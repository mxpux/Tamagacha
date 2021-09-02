import React, { useState } from 'react';
import tamaMatch from '../../assets/match-thumb.png';
import tamaTTT from '../../assets/ttt-thumb.png';
import './minigamepage.css';
import Ttt2 from '../TTT2/Ttt2'
import Matching from '../Matching/Matching'

function MinigamePage() {
    const [page, setPage] = useState('MiniGame')
    const [buttonClick, setButtonClick] = useState(false)

    const handleOnClick = (page) => {
        setButtonClick(true)
        setPage(page)
    }

    const renderPageFunction = (page) => {
        if(page === 'Matching') {
            return <Matching />
        } else if (page === 'Ttt2') {
            return <Ttt2 />
        } else {
            //nothing
        }
    }





    // each game will need a onclick.
    // When click render diff things
    return (
        <>
        {buttonClick ? renderPageFunction(page) : ( <div className="minigame-container">

        <div className="minigame-cardcontainer">
             <h2 class="minigame-title">Which Minigame would you like to play?</h2>

            <div className="minigame-card">
                <h3>Matching Game</h3>
                <img
                    className="minigame-card-img"
                    src={tamaMatch}
                    alt="Tama Match"
                    onClick={() => {
                        handleOnClick('Matching')
                    }} />
            </div>

            <div className="minigame-card">
                <h3>Tic Tac Toe</h3>
                <img
                    className="minigame-card-img"
                    src={tamaTTT}
                    alt="Tama Tic Tac Toe"
                    onClick={() => {
                        handleOnClick('Ttt2')
                    }} />
            </div>
        </div>
</div>)}
        </>
    )
}

export default MinigamePage;