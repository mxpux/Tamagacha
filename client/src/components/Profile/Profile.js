import React, {useState, useEffect} from "react";
import Stats from "./StatsDropdown"
import './profile.css';
import  { getUserId, getCurrentTama }  from '../../utils/localStorage'
import { getUser, getTama, updateTama } from '../../utils/API';
import Auth from '../../utils/auth'
import MinigamePage from '../Minigame/Minigamepage'

function Profile () {
  const [tama, setTama] = useState({});
  const [pageToRender, setPageToRender] = useState(false);

  const handlePageChange = () => {
    setPageToRender(true)
  };

  const getTamaStats = async () => {
    try{
      const u_id = getUserId();
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      const response = await getTama(u_id, ut_id, token);
      const data = await response.json();
      setTama(data);
      //* Data ==> Tama + userTama data as Tama's property
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTamaStats()
    const interval = setInterval(() => {
      getTamaStats()
    }, 5000)
      return () => clearInterval(interval);
  }, [])

  const feedTama = async () => {
    console.log('initial hunger stat', tama.userTama.hunger)
    if (tama.userTama.hunger >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      let newHunger = tama.userTama.hunger + 5
      if (newHunger > 100) {
        newHunger = 100
      }

      let response = await updateTama({hunger: newHunger}, token, ut_id)

      console.log(response);
      getTamaStats();
    }
  }

  const poopTama = async () => {
    console.log('bladder stat', tama.userTama.bladder)
    if (tama.userTama.bladder >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      let newBladder = tama.userTama.bladder + 5
      if (newBladder > 100) {
        newBladder = 100;
      }

      let response = await updateTama({bladder: newBladder}, token, ut_id)

      console.log(response);
      getTamaStats();
    }
  }


  return (

    <>
    {pageToRender ? <MinigamePage /> : (<tama id="profilecssid">
        <h2 className="profiletamaname">{tama.name}</h2>
        <pfp>
          <img id='tama' src={tama.pictures} alt=''/>
        </pfp>

        <div className="row btnRowprofile {
">
          <button
          onClick={feedTama}
          className='feed btnprofile'
          >Feed</button>
          <button
          className='play btnprofile'
          onClick={() => handlePageChange()}
          >Play</button>
          <button
          onClick={poopTama}
          className='poop btnprofile'
          >Poop</button>
        </div>

        <div className="profilestatsbox">
          <div className="cardprofile">
          {tama.userTama && <Stats userTama={tama.userTama} name={tama.userTama.name} />}
          </div>
        </div>

      </tama>)}

    </>
  )
}

export default Profile

