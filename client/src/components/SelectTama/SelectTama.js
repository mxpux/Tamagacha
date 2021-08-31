import React, {useState} from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import './selectTama.css';

function getTamasOwned () {
  return fetch ('/api/usertama/:id') //! Need user id
.then((response) => response.json())
}

export default function SelectTama() {
  const [tamasOwned, setTamasOwned] = useState(getTamasOwned())
  console.log(tamasOwned);
  //* tamasOwned should be a userObject with a property of tamas_owned

  const handleSelectTama = (id) => {
    //TODO: use local storage and set the userTama ID
    //TODO: Redirect the user to the profile page which uses the userTama ID to populate it with stats
    return
  }

  return (
    <div class="row">
      {tamasOwned.tamas_owned.map((tama) => {
        return (
          <div key={tama.userTama.id} class="card selectTamaCard">
            <img src={tama4} class="card-img-top" alt="name" />
            <div class="card-body">
              <h5 class="card-title">{tama.name}</h5>
              <p class="card-text m-0">Status: {tama.userTama.status}</p>
              <p class="card-text m-0">Hunger: {tama.userTama.hunger}</p>
              <p class="card-text m-0">Bladder: {tama.userTama.bladder}</p>
              <p class="card-text m-0">Happiness: {tama.userTama.happiness}</p>
              <p class="card-text m-0">Age: {tama.userTama.age/60} minutes</p>
              <button 
              onClick={() => handleSelectTama(tama.userTama.id)}
              class="btn btn-success"
              >Select this tama!</button>
            </div>
          </div>
        )
      })}
    </div >
  )

}