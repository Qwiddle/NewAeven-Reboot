import WebpackLoader from '../util/webpackLoader';
import AssetManifest from '../assets/assetManifest';
import TypeshiftScene from './typeshift';
import { setStatus } from '../slices/game';

export default class PreloadScene extends TypeshiftScene {
  loader: any;
  
  constructor() {
    super('preload');
  }

  preload(): void {
    this.load.scenePlugin('WebpackLoader', WebpackLoader, 'loader', 'loader');
    this.sceneStore.dispatch(setStatus('load'));
  }

  create(): void {
		this.createProgressbar((this.scale.width / 2), (this.scale.height / 2) + 50);

    this.loader.start(AssetManifest);

    this.loader.load().then(() => {
      this.sceneStore.dispatch(setStatus('home'));
      this.scene.start('home');
    });
  }

  createProgressbar (x: number, y: number): void {
    let progressLabel: Phaser.GameObjects.Text = this.add.text((this.scale.width / 2), (this.scale.height / 2), 'Loading...', { fontFamily: 'Verdana', align: 'center', fontSize: '12px' });
		progressLabel.setOrigin(0.5);

		let width: number = 400;
		let height: number = 20;
		let xStart: number = x - width / 2;
		let yStart: number = y - height / 2;
		let borderOffset: number = 2;

		const borderRect: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(
			xStart - borderOffset,
			yStart - borderOffset,
			width + borderOffset * 2,
			height + borderOffset * 2);

		let border: Phaser.GameObjects.Graphics = this.add.graphics({
			lineStyle: {
				width: 5,
				color: 0xaaaaaa
			}
		});

		border.strokeRectShape(borderRect);

		let progressbar: Phaser.GameObjects.Graphics = this.add.graphics();

		const updateProgressbar = (percentage: number) => {
			progressbar.clear();
			progressbar.fillStyle(0x007f00, 1);
			progressbar.fillRect(xStart, yStart, percentage * width, height);
		};

		this.load.on('progress', updateProgressbar);

    this.loader.systems.events.on('load', (file: any) => {
      progressLabel.setText("Loading... " + file.url);
    }); 
	}
}