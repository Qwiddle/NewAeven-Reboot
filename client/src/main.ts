import Phaser from 'phaser';
import { BootScene } from './render/scenes/boot';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'gamecanvas',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 800,
    height: 600,
    min: {
      width: 800,
      height: 600
    },
    max: {
      width: 1920,
      height: 1080
    },
    autoRound: true
  },
  scene: [BootScene],
  pixelArt: true,
  roundPixels: true,
  disableContextMenu: true,
}

export const game = new Phaser.Game(config);