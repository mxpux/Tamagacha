import React, { Component } from 'react';
import {Howl, Howler} from 'howler';
import useSound from 'use-sound';
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
        
        <egg onMouseOver={sound.play()}>
        </egg>
      </div>
    </>
  )
}


export default Gacha