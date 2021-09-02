import React, { useEffect } from 'react';
import {Howl} from 'howler';
import pop from './pop.mp3'
import './gacha.css';

const sound = new Howl ({
  src: [pop],
  loop: true,
  volume: 0.1,
});

function Gacha() {
  return (
    <>
      <div id='egg-container'>
        <p className='gacha-title'>What will hatch!?</p>
        <br/>
        <br/>
        <br/>
        <div id='egg' />
      </div>
    </>
  )
}


export default Gacha