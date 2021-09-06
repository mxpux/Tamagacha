import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './ttt2.css';
import Swal from 'sweetalert2'
import Profile from '../Profile/Profile'
import music from '../../assets/slip.mp3';
import endMusic from '../../assets/finish.wav';
import loseMusic from '../../assets/lose.wav';
import player1 from '../../assets/tama2.png';
import player2 from '../../assets/tama4.png';

const playerOne = <img src={player1} alt="player1" className='ttt2-inline'/>;
const playerTwo = <img src={player2} alt="player2" className='ttt2-inline'/>

const sound = new Howl({
	src: [music],
	volume: 0.1,
});

const endSound = new Howl ({
	src: [endMusic],
	volume: 0.2,
});

const loseSound = new Howl ({
	src: [loseMusic],
	volume: 0.2,
});

//!!!!!!!!!!!!!!!!! At the end of the game - userWon will either be true/false
function Ttt2 ( {userGameStatus} ) {
  // const [turn, setTurn] =useState('player')
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  // const [gameOver, setGameOver] = useState('false')
  const [winner, setWinner] = useState(null); //<img src={player1} alt="player1" className='ttt2-inline'/>
  const [userWon, setUserWon] = useState(false) //if user won - value set to true
	const [gameOver, setGameOver] = useState(false);
	const [backToProfile ,setBackToProfile] = useState(false)
	const [turn, setTurn] = useState('player') //player or computer

	// useEffect(() => {

  // },[userWon])

	//check when boxes got updated
  useEffect(() => {
		console.log('useeffect run on the boxes')
		sound.play();
    winningComb([...boxes])

  },[boxes])


	useEffect(() => {
		if(turn === 'computer') {
			setComputerMove()
		}

  },[turn])

	//Check when winner are set - sweetalert
  useEffect(() => {
		console.log('inside useEffect for winner')
    if(winner === playerOne) {
	  endSound.play();
      console.log('playerone won')
      setUserWon(true)
			userGameStatus(true) // return true to minigame
      Swal.fire({
        title: 'Sweet!',
        text: 'User Win!!',
        imageUrl: player1,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }

    if(winner === playerTwo) {
	  loseSound.play();
      Swal.fire({
        title: 'Oh no!',
        text: 'Computer Win!!',
        imageUrl: player2,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  },[winner])

  const winningComb = (squares) => {
		console.log('inside winning comb function')
		var combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (var combo in combos) {
			combos[combo].forEach((pattern) => {
				if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') {

				} else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
					setWinner(squares[pattern[0]]);
					setGameOver(true)
          // setUserWon(true)
				}
			});
		}

	};
  	//check to see which boxes are still open and return a open random box number
	const randomIndex = () => {
		console.log('inside randomIndex function')
		var stillOpen = []
		for(var i = 0; i < boxes.length; i++) {
			if (boxes[i] === '') {
				stillOpen.push(i)
			}
		}
		var randomIndex = Math.floor(Math.random() * stillOpen.length)
		return stillOpen[randomIndex]
	}

	const handleBackButtonClick = () => {
    setBackToProfile(true)
  }

	const setComputerMove = () => {
		console.log('inside setComputer move function')
		if(gameOver === false) {
			setTimeout(() => {
				if(gameOver === false) {
						setBoxes(prevState => {
							prevState[randomIndex()] = playerTwo;
							return [...prevState]
						})
				}
			},750)
		}
		setTurn('player')
		// setTimeout(() => {
		// 	if(gameOver === false) {
		// 			setBoxes(prevState => {
		// 				prevState[randomIndex()] = playerTwo;
		// 				return [...prevState]
		// 			})
		// 	}
		// },750)
	}

  const handleClick = (num) => {
		console.log('inside handleClick function')
    if (boxes[num] !== '') {
      Swal.fire({
        icon: 'error',
        title: `oops! Please choose another space!`,
        timer: 1500
      })
			return;
		}

    setBoxes(prevState => {
      prevState[num] = playerOne;
			// if(gameOver === false) {
			// 	setComputerMove()
			// }
      return [...prevState]
    })
    winningComb([...boxes])

		if(gameOver === false) {
			// setComputerMove()
			setTurn('computer')
		}

  }


  const handleRestart = () => {
		console.log('inside handle restart function')
		setWinner(null);
		setBoxes(Array(9).fill(''));
		setUserWon(false) //if user won - value set to true
		setGameOver(false);
	};
  const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{boxes[num]}</td>;
	};

	return (
		<>
		{backToProfile ? <Profile /> : (
			<div className='tttcontainer'>
			<div>
				<div className='ttt2-charOne'>{playerOne}<h3 className="ttt-toptitle">You</h3></div>
				<div className='ttt2-charTwo'>{playerTwo}<h3 className="ttt-toptitle">Com</h3></div>
			</div>
			<table>
				{/* Turn: {turn} */}
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p className="tttwinner">{winner} is the winner!</p>
					<button className="ttt2playagainbtn" onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
			{gameOver ? <button className="ttt2btn" onClick={() => handleBackButtonClick()}>Return to Profile</button> : null}
		</div>
		)}


		</>
	);
}

export default Ttt2;