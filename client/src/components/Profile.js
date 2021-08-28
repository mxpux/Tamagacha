import React from "react";
import tama1 from '../assets/tama1.png';
import tama2 from '../assets/tama2.png';
import tama3 from '../assets/tama3.png';
import tama4 from '../assets/tama4.png';
import tama5 from '../assets/tama5.png';
import './../styles/profile.css'

function Profile () {
  fetch ('/api/u_id/t_id') //! Need to find user id and tama id for the parameters
  .then((response) => response.json())
  .then((data) => console.log(data))

  return (
    <>
      <tama id="profile">
        <h2>'Placeholder name'</h2> 
        <pfp>
          <img id='tama' src={tama4}/>
        </pfp>
        <div className="row btnRow">
          <button className='feed btn'>Feed</button>
          <button className='play btn'>Play</button>
          <button className='poop btn'>Poop</button>
        </div>
      </tama>
    </>
  )
}

export default Profile