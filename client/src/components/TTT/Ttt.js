import React, { useState, useEffect } from 'react';
import './ttt.css';
import player1 from '../../assets/tama2.png';
import player2 from '../../assets/tama4.png';

const playerOne = <img src={player1} alt="player1"/>;
const playerTwo = <img src={player2} alt="player2"/>

const Ttt = () => {
	// const [turn, setTurn] = useState('player1');
	const [whoTurn, setWhoTurn] = useState('player') //player or computer
	const [turn, setTurn] = useState(<img src={player1} alt="player1"/>);
	const [boxes, setBoxes] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState(null);

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
				}
			});
		}
	};
	// useEffect(() => {
	// 	handleRestart()
	// },[])

	const whenComputerTurn = () => {
		// handleClick
		if(whoTurn === 'computer') {
			var randomNumber = randomIndex()
			handleClick(randomNumber)
		}
		// var squares = [...boxes];
		// var openIndex = randomIndex()
		// squares[openIndex] = playerTwo;
		// setTurn(playerOne);
	}

	//check to see boxes that which boxes are still open and return a open random box number
	const randomIndex = () => {
		var stillOpen = []
		for(var i = 0; i < boxes.length; i++) {
			if (boxes[i] === '') {
				stillOpen.push(i)
			}
		}
		console.log('stillOpen---->', stillOpen.length )
		var randomIndex = Math.floor(Math.random() * stillOpen.length)

		console.log('random index', stillOpen[randomIndex])
		return stillOpen[randomIndex]
	}


	const handleClick = (num) => {
		if (boxes[num] !== '') {
			alert('oops! Please choose another space!');
			return;
		}

		var squares = [...boxes];

		if (turn === playerOne) {
			console.log('inside playerOne click')
			squares[num] = playerOne;
			// setWhoTurn('computer')
			setTurn(playerTwo);
			// console.log('whoturn', whoTurn)
		} else {
			console.log('inside playerOne click')
			squares[num] = playerTwo;
			// setWhoTurn('player')
			setTurn(playerOne);
			// handleClick(randomIndex())

		}

		winningComb(squares);
		setBoxes(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setBoxes(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{boxes[num]}</td>;
	};

	return (
		<div className='tttcontainer'>
			<table>
				Turn: {turn}
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
};

export default Ttt;