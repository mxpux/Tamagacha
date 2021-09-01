import React, {useState, useEffect} from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './selectTama.css';
import {getMe, getUser} from '../../utils/API';
import Auth from '../../utils/auth';
import { setCurrentTama, getUserId } from '../../utils/localStorage'


export default function SelectTama() {
  const [tamasOwned, setTamasOwned] = useState([])
  console.log(tamasOwned);
  //* tamasOwned should be a userObject with a property of tamas_owned

  
  const getUserData = async() => {
    try {
      const user_id = getUserId();
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        throw new Error('Not logged in!')
      }
      console.log('token', token);

      const response = await getUser(user_id, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const user = await response.json();
      console.log(user);
      setTamasOwned(user.tamas_owned);
      console.log('tamasOwned', tamasOwned);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  const handleSelectTama = (tama_id) => {
    //TODO: Redirect the user to the profile page which uses the userTama ID to populate it with stats
    setCurrentTama(tama_id);
    return
  }

  return (
    <div className="row">
      {tamasOwned.map((tama) => {
        return (
          <div key={tama.userTama.id} className="card selectTamaCard">
            <img src={tama4} className="card-img-top" alt="name" />
            <div className="card-body">
              <h5 className="card-title">{tama.name}</h5>
              <p className="card-text m-0">Status: {tama.userTama.status}</p>
              <p className="card-text m-0">Hunger: {tama.userTama.hunger}</p>
              <p className="card-text m-0">Bladder: {tama.userTama.bladder}</p>
              <p className="card-text m-0">Happiness: {tama.userTama.happiness}</p>
              <p className="card-text m-0">Age: {tama.userTama.age/60} minutes</p>
              <button 
              onClick={() => handleSelectTama(tama.userTama.id)}
              className="btn btn-success"
              >Select this tama!</button>
            </div>
          </div>
        )
      })}
    </div >
  )

}