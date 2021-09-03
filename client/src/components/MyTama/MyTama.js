import React, { useEffect, useState } from "react";
import tama1 from '../../assets/tama1.png';
import tama2 from '../../assets/tama2.png';
import tama3 from '../../assets/tama3.png';
import tama4 from '../../assets/tama4.png';
import tama5 from '../../assets/tama5.png';
import { getUser } from "../../utils/API";
import Auth from '../../utils/auth';
import { getUserId, setCurrentTama } from "../../utils/localStorage";
import './myTama.css';


function MyTama() {
    const [tamasOwned, setTamaOwned] = useState([]);

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

    const handleSelectTama = (tama_id) => {
        setCurrentTama(tama_id);
    };

    return (
        <body>
            <div className="mytamapagetitle">Select your Tama!</div>
            {tamasOwned.map((tama) => {
                return (
                    <div key={tama.userTama.id} className="mytamacontainer">


                        {/* === TAMA PER CARD === */}
                        <div className="mytamacardcont">
                            <div className="mytamamaincard">
                                <div>
                                    <button
                                        onClick={() => handleSelectTama(tama.userTama.id)}
                                        className="mytamabutton"> Select!
                                    </button>
                                </div>
                                
                                <div className="icon">
                                    <img
                                        className="mytamacard-img-top"
                                        src={tama.pictures}
                                        name="tama1"
                                        alt="Mametchi"
                                    />
                                    <div class="mytamatextcont">
                                        <h5 className="title">{tama.name}</h5>
                                        <p className="mytamatext">
                                            Happiness: {tama.userTama.happiness} <br />
                                            Bladder: {tama.userTama.bladder} <br />
                                            Hunger: {tama.userTama.hunger} <br />
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </body>
    );
}

export default MyTama;