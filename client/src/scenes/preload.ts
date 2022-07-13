import WebpackLoader from '../util/webpackLoader';
import AssetManifest from '../assets/assetManifest';
import TypeshiftScene from './typeshift';
import { setStatus } from '../slices/game';

export default class PreloadScene extends TypeshiftScene {
  loader: any;
  
  constructor() {
    super('preload');
  }

  preload() {
    this.load.scenePlugin('WebpackLoader', WebpackLoader, 'loader', 'loader');
    this.sceneStore.dispatch(setStatus('load'));
  }

  create() {
    this.loader.start(AssetManifest);

    this.loader.systems.events.on('load', (file: any) => {
      //handle progressbar
    });
    
    this.loader.load().then(() => {
      this.sceneStore.dispatch(setStatus('home'));
    });

    console.log('hi');
  }
}