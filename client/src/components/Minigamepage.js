import React, { useState } from 'react';
import TamaMatch from '../assets/TamaMatch.png';
import TamaTTT from '../assets/TamaTTT.png';
import '../styles/minigamepage.css';

function MinigamePage() {
    
    return (
        <div>
            <h2>Which Minigame would you like to play?</h2>
            <div className="minigame-container">
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
        </div>
    )
}

export default MinigamePage;