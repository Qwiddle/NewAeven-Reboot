import { Client } from 'colyseus';
import { playerHandlers } from './handlers/player';

export const gameEvents: { [key: string]: any } = {
  'player_login': (packet: any, client: Client) => playerHandlers.onPlayerLogin(packet, client)
};