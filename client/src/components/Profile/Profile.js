import React, {useState, useEffect} from "react";
import Stats from "./StatsDropdown"
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './profile.css';
import  { getUserId, getCurrentTama }  from '../../utils/localStorage'
import { getUser, getTama, updateTama, getUniqueTama } from '../../utils/API';
import Auth from '../../utils/auth'
import MinigamePage from '../Minigame/Minigamepage'

function Profile () {
  const [stat, setStat] = useState({});
  const [tama, setTama] = useState({})
// console.log('stat', stat)
// console.log('stat', stat.id)
// console.log('stat', stat.tamas_owned[0])
  const [pageToRender, setPageToRender] = useState(false)

  const handlePageChange = () => {
    setPageToRender(true)
  }

  /**
   * Stat ===
   * User: {id, username, email, password, tamas_owned}
   * tamas_owned: {id, name, description, pictures, userTama}
   * userTama: {id, age, hunger, happiness, bladder, date_modified, date_created, is_alive, is_awake, status}
   */
  const getTamaStats = async (t_id) => {
    try{
      const u_id = getUserId();
      const token = Auth.getToken();
      const response = await getTama(u_id, t_id, token);
      console.log ('getTamaStats response: ', response);
      const data = await response.json();
      console.log('getTamaStats data: ', data);
      setTama(data);
    } catch (err) {
      console.error(err);
    }
  }
   const getUserTamaStats = async () => {
    try {
      let ut_id = getCurrentTama();
      let token = Auth.getToken()

      let response = await getUniqueTama(ut_id , token)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      };

      let data = await response.json()
      console.log('data----->', data)
      setStat(data)
      getTamaStats(data.tama_id);
    }
    catch (err){
      console.error('errorr--->',err)
    }
  }


  useEffect(() => {
      getUserTamaStats()
  }, [])

  const feedTama = async () => {
    console.log('hunger stat', stat.hunger)
    if (stat.hunger >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      const newHunger = stat.hunger + 1

      let response = await updateTama({hunger: newHunger}, token, ut_id)

      console.log(response);
      getUserTamaStats();
    }
  }

  const poopTama = async () => {
    console.log('bladder stat', stat.bladder)
    if (stat.bladder >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      const newBladder = stat.bladder + 1

      let response = await updateTama({bladder: newBladder}, token, ut_id)

      console.log(response);
      getUserTamaStats();
    }
  }


  return (

    <>
    {pageToRender ? <MinigamePage /> : (<tama id="profilecssid">
        <h2 class="profiletamaname">{tama.name}</h2>
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
          href='#' //TODO: Navigate to play page
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
        {stat.id && <Stats userTama={stat} name={stat.name} />}
          {/* <Stats userTama={stat.tamas_owned[0].userTama} />
          <Stats userTama={stat} /> */}
        </div></div>

      </tama>)}

    </>
  )
}

export default Profile