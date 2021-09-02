import React, {useState, useEffect} from "react";
import Stats from "./StatsDropdown"
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './profile.css';
import  { getUserId, getCurrentTama }  from '../../utils/localStorage'
import { getUser, getTama, updateTama } from '../../utils/API';
import Auth from '../../utils/auth'
import MinigamePage from '../Minigame/Minigamepage'

function Profile () {
  const [stat, setStat] = useState({});
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

   const getUserTamaStats = async () => {
    try {
      let u_id = getUserId();
      let ut_id = getCurrentTama();
      let token = Auth.getToken()

      let response = await getTama(u_id, ut_id , token)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      };

      let data = await response.json()
      console.log('data----->', data)
      setStat(data)
    }
    catch (err){
      console.error('errorr--->',err)
    }
  }


  useEffect(() => {
      getUserTamaStats()
  },[])

  const feedTama = async () => {
    console.log('hunger stat', stat.userTama.hunger)
    if (stat.userTama.hunger >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      const newHunger = stat.userTama.hunger + 1

      let response = await updateTama({hunger: newHunger}, token, ut_id) //hardcoded 1 for now
      console.log(response);
      getUserTamaStats();
    }
  }

  const poopTama = async () => {
    console.log('hunger stat', stat.userTama.bladder)
    if (stat.userTama.bladder >= 100 ) {
      console.log('nothing happened');
      return
    } else {
      const ut_id = getCurrentTama();
      const token = Auth.getToken();
      const newBladder = stat.userTama.bladder + 1

      let response = await updateTama({bladder: newBladder}, token, ut_id) //hardcoded 1 for now
      console.log(response);
      getUserTamaStats();
    }
  }


  return (

    <>
    {pageToRender ? <MinigamePage /> : (<tama id="profile">
        <h2>'Placeholder name'</h2>
        <pfp>
          <img id='tama' src={tama4} alt=''/>
        </pfp>
        <div className="row btnRow">
        {stat.userTama && <Stats userTama={stat.userTama} />}
          {/* <Stats userTama={stat.tamas_owned[0].userTama} />
          <Stats userTama={stat} /> */}
        </div>
        <div className="row btnRow">
          <button
          onClick={feedTama}
          className='feed btn'
          >Feed</button>
          <button
          href='#' //TODO: Navigate to play page
          className='play btn'
          onClick={() => handlePageChange()}
          >Play</button>
          <button
          onClick={poopTama}
          className='poop btn'
          >Poop</button>
        </div>
      </tama>)}

    </>
  )
}

export default Profile