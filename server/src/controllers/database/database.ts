import mongoose from 'mongoose';
import 'dotenv/config.js';
import { IAccount, Account } from './models/account';
import { IPlayer, Player } from './models/player';

export function databaseConnect(host?: string, database?: string) {
  return mongoose.connect(`mongodb://${process.env.DBHOST || host}/${process.env.DB || database}`);
}

export function getAccount(account: string) {
  return Account.findOne({ account: account });
}

export function getAccountBySession(active_session_id: string) {
  return Account.findOne({ active_session_id: active_session_id });
}

export function getPlayers(account: string) {
  return Player.find({ account: account });
}

export function getPlayer(username: string) {
  return Player.findOne({ username: username });
}

export function createPlayer(playerData: IPlayer) {
  const player = new Player({
    account: playerData.account,
    username: playerData.username,
    admin: playerData.admin,
    sex: playerData.sex,
    race: playerData.race,
    hairColor: playerData.hairColor,
    hairStyle: playerData.hairStyle,
    map: playerData.map,
    x: playerData.x,
    y: playerData.y,
  })

  return player.save();
}

export function createAccount(accountData: IAccount) {
  const account = new Account({
    account: accountData.account,
    password: accountData.password,
    email: accountData.email,
    ip: accountData.ip
  })

  return account.save();
}