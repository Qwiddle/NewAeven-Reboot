import { matchMaker } from '@colyseus/core';
import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { IAccount } from './database/models/account';
import { IPlayer } from './database/models/player';
import { comparePassword, createAccount, getAccount, 
  getAccountBySession, getPlayer, getPlayers, 
  hashPassword } from './database/database';

export async function login(req: Request, res: Response) {
  try {
    if(!req.body.acount || !req.body.password)
      throw 'Please ensure all input fields are filled out before trying to login.';

    const acc = await getAccount(req.body.account);

    /* don't want to reveal too much in the error as this could be used to bruteforcing a check for valid accounts*/
    if(!acc)
      throw 'Failed.';
    else if(acc.active_session_id)
      throw 'Failed.';
    else if(!await comparePassword(req.body.password, acc.password))
      throw 'Failed.';
    
    const seatReservation = await matchMaker.joinOrCreate("main_room", 0);
    const players = await getPlayers(acc.account);
    
    await updateSession(acc, seatReservation.sessionId, false);

    sendResponse(res, { seatReservation, players: players.length, account: req.body.account }, false);
  } catch(error) {
    sendResponse(res, error, true);
  }
}

export async function register(req: Request, res: Response) {
  try {
    if(!req.body.email || !req.body.account || !req.body.password)
      throw 'Please ensure all input fields are filled out before trying to login.';

    const acc = await getAccount(req.body.account);

    if(acc)
      throw 'Account already exists.';

    const hash = await hashPassword(req.body.password);

    const data: IAccount = {
      account: req.body.account,
      password: hash,
      email: req.body.email,
      ip: '127.0.0.1' //todo pass IP
    };

    let newAcc = await createAccount(data);
    const seatReservation = await matchMaker.joinOrCreate("main_room", 0);

    sendResponse(res, { account: newAcc.account, seatReservation }, false);
  } catch(error) {
    sendResponse(res, error, true);
  }
}

//documents returned from db may be null but checks will be ran beforehand. ugly workaround.
async function updateSession(account: Document<unknown, any, IAccount> & IAccount | null, sessionId: string, active: boolean) {
  if(active) {
    account!.active_session_id = sessionId;
    account!.pending_session_id = '';
    account!.pending_session_timestamp = null;
  } else {
    account!.pending_session_timestamp = Date.now();
    account!.pending_session_id = sessionId;
  }

  account!.updated_at = Date.now();
  account!.save();
}

export async function disconnect(sessionId: string) {
  let account = await getAccountBySession(sessionId);
  await updateSession(account, '', true);
}

function sendResponse(res: Response, output: any, error: boolean) {
  const status = error ? 200 : 400;
  res.status(status).json({ error: error, output: output });
}