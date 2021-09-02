import React, {useState, useEffect} from "react";
import Stats from "./StatsDropdown"
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './profile.css';
import  { getUserId }  from '../../utils/localStorage'
import { getUser } from '../../utils/API';
import Auth from '../../utils/auth'
import MinigamePage from '../Minigame/Minigamepage'


// function getUserTamaStats () {
//     return fetch ('/api/usertama/unique/1') //! Need user id or userTama id for the parameters
//   .then((response) => response.json())
// }
//get id from localstorage(getUserId) -> auth(getToken) -> API(getUser))


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
      let userId = await getUserId()
      // console.log('aaaaa', userId)
      let token = await Auth.getToken() //Do we need the token?
      console.log('token', token)
      let response = await getUser(1, token) //Hard coded for now
      // console.log('response', response)

      if (!response.ok) {
        throw new Error('Something went wrong!')
      };

      let data = await response.json()
      // console.log('data----->', data)
      setStat(data)
    }
    catch (err){
      console.error('errorr--->',err)
    }
  }


  useEffect(() => {

      getUserTamaStats()

  },[])

  const feedTama = () => {
    setStat(stat.tamas_owned.userTama.hunger+1)
  }

  const poopTama = () => {
    setStat(stat.tamas_owned.userTama.bladder+1)
  }

  return (

    <>
    {pageToRender ? <MinigamePage /> : (<tama id="profile">
        <h2>'Placeholder name'</h2>
        <pfp>
          <img id='tama' src={tama4} alt=''/>
        </pfp>
        <div className="row btnRow">
        {stat.tamas_owned && stat.tamas_owned[0] && <Stats userTama={stat.tamas_owned[0].userTama} />}
          {/* <Stats userTama={stat.tamas_owned[0].userTama} /> */}
          {/* <Stats userTama={stat} /> */}
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