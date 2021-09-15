import React from 'react';
import './gacha.css';

function Gacha({handlePageChange}) {
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