import Phaser from 'phaser'
import { store } from '../app/store';
import { Store } from '@reduxjs/toolkit';
import { UserEvent } from '../app/events';
import { GameState } from '../slices/game';

export default class TypeshiftScene extends Phaser.Scene {
  sceneStore: Store = store;

  constructor(key: string) {
    super(key);
  }

  connectStore(updates: Map<UserEvent, (game: Phaser.Scene, state: any, action: any) => Promise<void | unknown>>): void {
    this.sceneStore.subscribe(() => this.stateUpdated(updates));
  }

  stateUpdated(updates: Map<UserEvent, (game: Phaser.Scene, state: any, action: any) => Promise<void | unknown>>): void {
    const newState: GameState = this.sceneStore.getState().game;
    
    if(!newState.uiUpdates.length) 
      return;

    for(const action of newState.uiUpdates) {
      if(updates.has(action.type)) {
        //ts doesn't know the state of Map so non-null assertion is used
        updates.get(action.type)!(this, newState, action);
      }

    }
  }
}