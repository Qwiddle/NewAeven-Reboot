import { Room, Client } from 'colyseus';
import { gameEvents } from '../events/events';

export class MainRoom extends Room {
  oncreate (options: any) {
    this.onMessage("*", (client, type, packet) => {
			this.handleEvents(client, type, packet);
		});
  }

  handleEvents(client: Client, type: string | number, packet: any) {
		if(Object.prototype.hasOwnProperty.call(gameEvents, type)) {
      gameEvents[type](packet, client);
    }
	}
}