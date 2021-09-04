import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import pop from '../../assets/pop.mp3';
import Profile from '../Profile/Profile';
import './gacha.css';

const sound = new Howl({
  src: [pop],
  loop: true,
  volume: 0.1,
});

function Gacha({handlePageChange}) {
  // const [page, setPage] = useState('Gacha')
  // const [buttonClick, setButtonClick] = useState(false)

  // const handleOnClick = (page) => {
  //   setButtonClick(true)
  //   setPage(page)
  // }

  // const renderPageFunction = (page) => {
  //   if (page === 'Profile') {
  //     return <Profile />;
  //   }
  // }

  return (
    <>

        <div a href id='egg-container'>
          <p className='gacha-title'>What will hatch!?</p>
          <br />
          <br />
          <br />
          <div id='egg' onClick={() => {
            handlePageChange('Profile')
          }} />

        </div>
    </>
  )
}

export default Gacha