import { Player, IPlayer } from './models/player';
import { Account, IAccount } from './models/account';

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