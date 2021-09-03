import React, { useEffect, useState } from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import Gacha from "../gacha_page/gacha";
import Profile from "../Profile/Profile";
import { getUser, newTama } from "../../utils/API";
import Auth from '../../utils/auth';
import { getUserId, setCurrentTama } from "../../utils/localStorage";
import './myTama.css';


function MyTama() {
  const [page, setPage] = useState('My Tama');
  const [tamasOwned, setTamaOwned] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const getUserData = async () => {
    try {
      const user_id = getUserId();
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        throw new Error("Not logged in!");
      }
      console.log("token", token);

      const response = await getUser(user_id, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const user = await response.json();
      console.log(user);
      setTamaOwned(user.tamas_owned);
      console.log("tamasOwned", tamasOwned);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const gachaPull = async () => {
      const u_id = getUserId();
      const token =  Auth.getToken()

      const response = await newTama(u_id, token)
      if (!response.ok) {
          return
      }

      console.log('gacha pull response: ', response)
      const data = await response.json();
      console.log('gacha pull data: ', data);
      if (setCurrentTama(data.id)) {
          setCurrentTama(data.id)
      };

  }

  const handleSelectTama = (tama_id) => {
    setCurrentTama(tama_id);
    setButtonClick(true);

  };

  const handleOnClick = (page) => {
    setButtonClick(true)
    setPage(page)
  }

  const renderPageFunction = (page) => {
    if(page === 'Gacha'){
        gachaPull()

        return <Gacha />
    } else {
      return <Profile />
    }
  }

  return (
    <>
      {buttonClick ? renderPageFunction(page)
      : (
        <body>
          <div className="mytamapagetitle">Select your Tama!</div>
          {tamasOwned.map((tama) => {
            return (
              <div key={tama.userTama.id} className="mytamacontainer">
                {/* <button className="mytamagachabutton"> Get a Tama! </button> */}

                {/* ===END OF TITLE AND GACHA BUTTON=== */}

                <div class="wrappergachabutton">
                  <div class="icongachabutton egggachabutton" onClick={() =>{handleOnClick('Gacha')}}>
                    <div class="toolgachabutton">Get a Tama!</div>
                    <span>
                      <i class="fas fa-egg"></i>Gacha!
                    </span>
                  </div>
                </div>

                {/* TRIAL BUTTON */}

                {/* === TAMA PER CARD === */}
                <div className="mytamacardcont">
                  <div className="mytamamaincard" onClick={() => handleSelectTama(tama.userTama.id)}>
                    <div>
                      <button
                        // onClick={() => handleSelectTama(tama.userTama.id)}
                        className="mytamabutton"
                      >
                        {" "}
                        Select!
                      </button>
                    </div>

                    <div className="icon">
                      <img
                        className="mytamacard-img-top"
                        src={tama.pictures}
                        name="tama1"
                        alt="Mametchi"
                      />
                      <div className="mytamatextcont">
                        <h5 className="title">{tama.name}</h5>
                        <p className="mytamatext">
                          Happiness: {tama.userTama.happiness} <br />
                          Bladder: {tama.userTama.bladder} <br />
                          Hunger: {tama.userTama.hunger} <br />
                          Alive: {tama.userTama.is_alive === true ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </body>
      )}
    </>
  );
}

            export default MyTama;