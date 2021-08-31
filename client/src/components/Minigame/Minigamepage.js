import React, { useState } from 'react';
import TamaMatch from '../../assets/match-thumb.png';
import TamaTTT from '../../assets/ttt-thumb.png';
import './minigamepage.css';

function MinigamePage() {

    return (
        <div className="minigame-container">
            {/* <div className="minigame-container"> */}
                <div className="minigame-cardcontainer">
                     <h2 class="minigame-title">Which Minigame would you like to play?</h2>
                    <div className="minigame-card">
                    <h3>Matching Game</h3>
                    <img
                        className="minigame-card-img"
                        src={TamaMatch}
                        alt="Tama Match" />
                    </div>
                    <div className="minigame-card">
                    <h3>Tic Tac Toe</h3>
                    <img
                        className="minigame-card-img"
                        src={TamaTTT}
                        alt="Tama Tic Tac Toe" />
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default MinigamePage;