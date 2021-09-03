import React, { useState, useEffect } from 'react';
import tamaMatch from '../../assets/match-thumb.png';
import tamaTTT from '../../assets/ttt-thumb.png';
import './minigamepage.css';
import Ttt2 from '../TTT2/Ttt2'
import Matching from '../Matching/Matching'
import  { getUserId, getCurrentTama }  from '../../utils/localStorage'
import { getTama, updateTama } from '../../utils/API';
import Auth from '../../utils/auth' //gettoken

function MinigamePage() {
    //set page render
    const [page, setPage] = useState('MiniGame')
    const [buttonClick, setButtonClick] = useState(false) //When either game got click
    const [userWin, setUserWin] = useState() //When game play is over userWin will set either true/false


    //for tama data
    const [currentTamaData, setCurrentTamaDate] = useState({})

    //When page first render run the 'getCurrentUserTama()' to get all usertama data
    useEffect(() => {
        getCurrentUserTama()
    },[])

    //Watch to see if the game is over, once is done set the happiness
    useEffect(() => {
        const setHappiness = () => {
            if(userWin) {
                setCurrentTamaDate(prevState => {
                    prevState.userTama.happiness += 10;
                    if(prevState.userTama.happiness >= 100) {
                        prevState.userTama.happiness = 100;
                    }
                    return prevState;
                })
            }
            setUserWin(false);
        }

        const updateUserTama = async () => {
            try {
                let ut_id = getCurrentTama(); // from local
                let token = Auth.getToken() // from local
                console.log("currentTamaData", currentTamaData);
                let response = await updateTama({happiness: currentTamaData.userTama.happiness}, token, ut_id)
                
    
                //testing
                // let response = await updateTama(currentTamaData, token, 1)
    
                if (!response.ok) {
                    throw new Error('Something went wrong!')
                  };
                let data = await response.json()
                console.log(data)  
                console.log('update sucess')
            }
            catch (err) {
                console.log('error---->', err)
            }
        }

        setHappiness()
        updateUserTama()
    },[currentTamaData, userWin])


    //function to pass down to both game to set 'userWin' state
     const userGameStatus = (value) => {
        setUserWin(value)
    }

    //////////////For render page /////////////
    //check which game got click
    const handleOnClick = (page) => {
        setButtonClick(true)
        setPage(page)
    }
    //render page when user click on either game
    const renderPageFunction = (page) => {
        if(page === 'Matching') {
            return <Matching userGameStatus={userGameStatus}/>
        } else if (page === 'Ttt2') {
            return <Ttt2 userGameStatus={userGameStatus}/>
        } else {
            //nothing
        }
    }

    //get current usertama data and set it to the state 'currentTamaData'
    const getCurrentUserTama = async () => {
        try {
            let u_id = getUserId(); // from local
            let ut_id = getCurrentTama(); // from local
            let token = Auth.getToken() // from local

            let response = await getTama(u_id, ut_id , token)
            //Testing
            // let response = await getTama(1,1, token)


            if (!response.ok) {
                throw new Error('Something went wrong!')
              };
            let data = await response.json();
            setCurrentTamaDate(data)
        }
        catch (err) {
            console.log('error--->', err)
        }
    }

    return (
        <>
        {buttonClick ? renderPageFunction(page) : ( <div className="minigame-container">

        <div className="minigame-cardcontainer">
             <h2 className="minigame-title">Which Minigame would you like to play?</h2>

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