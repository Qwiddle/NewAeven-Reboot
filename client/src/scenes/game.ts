import Phaser from 'phaser'
import TypeshiftScene from './typeshift';
import { GameState, setStatus } from '../slices/game';
import { UserEvent } from '../app/events';

export default class GameScene extends TypeshiftScene {
  constructor() {
    super('game');
  }

  preload() {
    this.sceneStore.dispatch(setStatus('game'));
  }

  create() {
    const updates: Map<UserEvent, (game: Phaser.Scene, state: GameState, action: any) => Promise<void | unknown>> = new Map([
      ['account_login', this.takeAction],
      ['account_register', this.takeAction]
    ]);
  
    this.connectStore(updates);
  }
  
  async takeAction(game: Phaser.Scene, state: GameState, action: any) {
    console.log(action);
  }
}