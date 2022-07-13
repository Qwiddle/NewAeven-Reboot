import TypeshiftScene from './typeshift';
import { setStatus } from '../slices/game';

export default class BootScene extends TypeshiftScene {
  constructor() {
    super('boot');
  }

  preload() {
    this.sceneStore.dispatch(setStatus('boot'));
  }

  create() {
    this.scene.start('preload');
  }
}