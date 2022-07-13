import TypeshiftScene from './typeshift';
import { setStatus } from '../slices/game';

export default class PreloadScene extends TypeshiftScene {
  constructor() {
    super('preload');
  }

  preload() {
    this.sceneStore.dispatch(setStatus('load'));
  }

  create() {
 
  }
}