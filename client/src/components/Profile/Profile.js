import React, {useState} from "react";
import Stats from "./StatsDropdown"
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './profile.css'

function getUserTamaStats () {
    return fetch ('/api/usertama/unique/1') //! Need user id or userTama id for the parameters
  .then((response) => response.json())
}

function Profile () {
  const [stat, setStat] = useState(getUserTamaStats());
  console.log(stat);
  /**
   * Stat ===
   * User: {id, username, email, password, tamas_owned}
   * tamas_owned: {id, name, description, pictures, userTama}
   * userTama: {id, age, hunger, happiness, bladder, date_modified, date_created, is_alive, is_awake, status}
   */
  const feedTama = () => {
    setStat(stat.tamas_owned.userTama.hunger+1)
  }

  const poopTama = () => {
    setStat(stat.tamas_owned.userTama.bladder+1)
  }

  return (
    <>
      <tama id="profile">
        <h2>'Placeholder name'</h2> 
        <pfp>
          <img id='tama' src={tama4}/>
        </pfp>
        <div className="row btnRow">
          <Stats userTama={stat.tamas_owned.userTama}/>
        </div>
        <div className="row btnRow">
          <button
          onClick={feedTama} 
          className='feed btn'
          >Feed</button>
          <button 
          href='#' //TODO: Navigate to play page
          className='play btn'
          >Play</button>
          <button 
          onClick={poopTama}
          className='poop btn'
          >Poop</button>
        </div>
      </tama>
    </>
  )
}

export default Profile