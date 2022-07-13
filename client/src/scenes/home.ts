import TypeshiftScene from './typeshift';
import { setStatus } from '../slices/game';

export default class HomeScene extends TypeshiftScene {
  constructor() {
    super('home');
  }

  preload() {
    this.sceneStore.dispatch(setStatus('home'));
  }

  create() {
   
  }
}