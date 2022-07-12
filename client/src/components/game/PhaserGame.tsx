import Phaser from 'phaser'
import BootScene from '../../scenes/boot';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectStatus, setStatus } from './gameSlice';
import { Outlet } from 'react-router-dom';

const PhaserGame = () => {
  const dispatch = useAppDispatch();
  const [phaser, setPhaser] = useState<Phaser.Game>();

  const status = useAppSelector(selectStatus);
  
  useEffect(() => {
    //hot-reload will create multiple Phaser instances if this isn't run
    if(phaser)
      return;

    setPhaser(new Phaser.Game({
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
      scene: [BootScene]
    }));
  }, [
    phaser,
    dispatch,
  ]);

  return (
    <><div id="game-container">
      <button className='setStatus'
        aria-label="Set Status"
        onClick={() => dispatch(setStatus('home'))}>

        Set Status
      </button>
    </div><Outlet />
    </>
  );
};

export default PhaserGame;