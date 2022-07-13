import Phaser from 'phaser'
import BootScene from '../scenes/boot';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PreloadScene from '../scenes/preload';

const Game = () => {
  let phaser: Phaser.Game;
  let config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    scale: {
      mode: Phaser.Scale.ScaleModes.RESIZE,
      width: 640,
        height: 480,
        min: {
          width: 640,
          height: 480
        },
        max: {
          width: 1920,
          height: 1080
        },
        autoRound: true
    },
    scene: [BootScene, PreloadScene]
  };
  
  useEffect(() => {
    //hot-reload will create multiple Phaser instances if this isn't run
    //@ts-ignore
    if(window.phaser) {
      return;
    }

    phaser = new Phaser.Game(config);

    //@ts-ignore
    window.phaser = phaser;
  }, []);

  return (
    <><div id="game-container"></div><Outlet /></>
  );
};

export default Game;