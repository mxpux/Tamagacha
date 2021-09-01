import React, { useState, useEffect } from 'react';
import './ttt2.css';
import Swal from 'sweetalert2'

import player1 from '../../assets/tama2.png';
import player2 from '../../assets/tama4.png';

const playerOne = <img src={player1} alt="player1" className='ttt2-inline'/>;
const playerTwo = <img src={player2} alt="player2" className='ttt2-inline'/>
//!!!!!!!!!!!!!!!!! At the end of the game - userWon will either be true/false
function Ttt2 () {
  // const [turn, setTurn] =useState('player')
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  // const [gameOver, setGameOver] = useState('false')
  const [winner, setWinner] = useState(null);
  const [userWon, setUserWon] = useState() //if user won - value set to true

  useEffect(() => {
    winningComb([...boxes])
  },[boxes])

  useEffect(() => {
    if(winner === playerOne) {
      console.log('playerone won')
      setUserWon(true)
      Swal.fire({
        title: 'Sweet!',
        text: 'User Win!!',
        imageUrl: player1,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    // else {
    //   setUserWon(false)
    // }
    if(winner === playerTwo) {
      Swal.fire({
        title: 'Sweet!',
        text: 'Computer Win!!',
        imageUrl: player2,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  },[winner])

  const winningComb = (squares) => {
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
				if (
					squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === ''
				) {
					// ==
				} else if (
					squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
          // setUserWon(true)
				}
			});
		}
	};
  	//check to see boxes that which boxes are still open and return a open random box number
	const randomIndex = () => {
		var stillOpen = []
		for(var i = 0; i < boxes.length; i++) {
			if (boxes[i] === '') {
				stillOpen.push(i)
			}
		}
		var randomIndex = Math.floor(Math.random() * stillOpen.length)
		return stillOpen[randomIndex]
	}


  const handleClick = (num) => {
    if (boxes[num] !== '') {
      Swal.fire({
        icon: 'error',
        title: `oops! Please choose another space!`,
        timer: 1500
      })

			return;
		}

    setBoxes(prevState => {
      console.log('prevvvvv beforee', prevState)
      prevState[num] = playerOne;
      prevState[randomIndex()] = playerTwo;
      console.log('prevvvvv afterrrrr', prevState)
      return [...prevState]
    })
    // squares[num] = playerOne;

    // squares[randomIndex()] = playerTwo;
    // var squares = [...boxes];

    winningComb([...boxes])
    // winningComb(squares)
    // setBoxes(squares)

  }


  const handleRestart = () => {
		setWinner(null);
		setBoxes(Array(9).fill(''));
	};
  const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{boxes[num]}</td>;
	};

	return (
		<div className='tttcontainer'>
      {playerOne}<h3>User</h3>
      {playerTwo}<h3>Com</h3>
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
					<p class="tttwinner">{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
}

export default Ttt2;