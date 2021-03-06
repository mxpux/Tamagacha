import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import music from '../../assets/victory.mp3';
import endMusic from '../../assets/finish.wav';
import wrongBeep from '../../assets/wrong.mp3';
import './matching.css'
import Card from './Card.js'
import Profile from '../Profile/Profile'

//Name & pic link
const images2 = [
  {
    name: 'paintochi',
    image: 'https://tamagotchi.com/wp-content/uploads/paintochi.jpg',
    flip: false
  },
  {
    name: 'kuchipatchi',
    image: 'https://tamagotchi.com/wp-content/uploads/kuchipatchi.jpg',
    flip: false
  },
  {
    name: 'ginjirotchi',
    image: 'https://tamagotchi.com/wp-content/uploads/ginjirotchi.jpg',
    flip: false
  },
  {
    name: 'mimitchi',
    image: 'https://tamagotchi.com/wp-content/uploads/mimitchi.jpg',
    flip: false
  },
  {
    name: 'weeptchi',
    image: 'https://tamagotchi.com/wp-content/uploads/weeptchi.jpg',
    flip: false
  },
  {
    name: 'sebiretchi',
    image: 'https://tamagotchi.com/wp-content/uploads/sebiretchi.jpg',
    flip: false
  },
  {
    name: 'paintochi',
    image: 'https://tamagotchi.com/wp-content/uploads/paintochi.jpg',
    flip: false
  },
  {
    name: 'kuchipatchi',
    image: 'https://tamagotchi.com/wp-content/uploads/kuchipatchi.jpg',
    flip: false
  },
  {
    name: 'ginjirotchi',
    image: 'https://tamagotchi.com/wp-content/uploads/ginjirotchi.jpg',
    flip: false
  },
  {
    name: 'mimitchi',
    image: 'https://tamagotchi.com/wp-content/uploads/mimitchi.jpg',
    flip: false
  },
  {
    name: 'weeptchi',
    image: 'https://tamagotchi.com/wp-content/uploads/weeptchi.jpg',
    flip: false
  },
  {
    name: 'sebiretchi',
    image: 'https://tamagotchi.com/wp-content/uploads/sebiretchi.jpg',
    flip: false
  },
]

const sound = new Howl ({
  src: [music],
  volume: 0.2,
});

const endSound = new Howl ({
  src: [endMusic],
  volume: 0.2,
});

const errSound = new Howl ({
  src: [wrongBeep],
  volume: 0.1,
});

function Matching( { userGameStatus }) {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!! When the game is over gamOver will set to true
  const [randomImageLink, setRandomImageLink] = useState([]);
  const [userPick, setUserPick] = useState([])
  const [move, setMove] = useState(0)
  const [gameOver, setGameOver] = useState(false); //When score === 6 gameOver will set to true.
  const [score, setScore] = useState(0); // 6 = win
  const [backToProfile ,setBackToProfile] = useState(false)

  // Only render for the first time
  useEffect(() => {
    // console.log('---------only run for the fist time---------')
    randomCard()
  },[])

  // watch userPick
  useEffect(() => {
  //  console.log('Run when userPick change')
  //when the userPick state change run the checkBothCard function
   checkBothCards()
  },[userPick])

  useEffect(() => {
    checkGameOver()
  },[score])

  const checkGameOver = () => {
    if(score === 6) {
      endSound.play();
      setGameOver(true)
      userGameStatus(true)
      // randomCard()
      //random and flip the card back

    }
  }

  const randomCard = () => {
    var random = images2.sort(() => Math.random() - 0.5)
    // console.log('-----randomcard------', random)
    let temp = random.map(item => {
      item.flip = false
      return item
    })
    // console.log('------temp----', temp)
    setRandomImageLink(random)
  }

  const handleOnClick = (index, name) => {
    // if image is already open - just return
    if(randomImageLink[index].flip) {
      return;
    }

    //try to use the move state to see if it work
    if(move < 2 ) {
      setMove(prev => prev + 1);

      //Set the card open
      setRandomImageLink(prevState => {
        prevState[index].flip = !prevState[index].flip
        return prevState;
      })
      if (userPick.length <= 2) {
        setUserPick(prev => [...prev, {index: index, name:name}])
      }
    }
    else {
      setMove(0)
    }
  }

  const handleBackButtonClick = () => {
    setBackToProfile(true)
  }

  //check 2 user pick card
  const checkBothCards = () => {
    if(userPick.length > 2 ) {
      // console.log('userpick length are more then 2')
      return;
    }
    if(userPick.length === 2) {
      //check to see if both card name are the same
      if(userPick[0].name === userPick[1].name) {
        // console.log('user picked the right card')
        sound.play();
        setScore(prev => prev += 1)
        setUserPick([])
      }
       else {
        // close both card
        errSound.play();
        setTimeout(() => {
          console.log('settimeout runnnnnninnnnngggg')
          setRandomImageLink(prevState => {
            var index1 = userPick[0].index
            var index2 = userPick[1].index
            prevState[index1].flip = false
            prevState[index2].flip = false
            return [...prevState]
          })
          setUserPick([])
        },500)

      }
    }
  }

  return (
    <>
      {backToProfile ? <Profile /> : (
        <div>
          <h1 className="matchingtitle">Let's play a matching game!</h1>
          <div className='container'>
            <div className='row p-3 m-3'>
              {randomImageLink.map((item, index) => {
                return (
                  <Card
                  key={index}
                  item={item}
                  name={item.name}
                  image={item.image}
                  flip={item.flip}
                  index={index}
                  handleOnClick={handleOnClick}
                  setUserPick={setUserPick}
                  />
                )
              })}
              {gameOver ? 
                <button class="matchingbtn" onClick={() => handleBackButtonClick()}>Return to Profile</button> : null
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Matching;


