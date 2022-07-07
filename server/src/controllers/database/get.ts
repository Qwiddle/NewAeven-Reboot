import { Account } from "./models/account";
import { Player } from "./models/player";

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

