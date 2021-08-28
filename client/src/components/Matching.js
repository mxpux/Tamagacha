import React, {useEffect, useState} from 'react'
import '../styles/matching.css'
import Card from './Card.js'

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

function Matching() {


  const [randomImageLink, setRandomImageLink] = useState([]);
  const [userPick, setUserPick] = useState([])
  const [move, setMove] = useState(0)



  // Only render for the first time
  useEffect(() => {
    console.log('only run for the fist time')
    randomCard()
  },[])

  // watch userPick
  useEffect(() => {
  //  console.log('Run when userPick change')
  //when the userPick state change run the checkBothCard function
   checkBothCards()
  },[userPick])




  const randomCard = () => {
    var random = images2.sort(() => Math.random() - 0.5)
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

    // //Set the card open
    // setRandomImageLink(prevState => {
    //   prevState[index].flip = !prevState[index].flip
    //   return prevState;
    // })

    //add the user click image index and tama name
    // if (userPick.length <= 2) {
    //   setUserPick(prev => [...prev, {index: index, name:name}])
    // }

  }



  //check 2 user pick card
  const checkBothCards = () => {
    if(userPick.length > 2 ) {
      console.log('userpick length are more then 2')
      return;
    }
    if(userPick.length === 2) {
      //check to see if both card name are the same
      if(userPick[0].name === userPick[1].name) {
        // console.log('user picked the right card')
        setUserPick([])
      }
       else {
        // close both card
        setTimeout(() => {
          console.log('settimeout runnnnnninnnnngggg')
          setRandomImageLink(prevState => {
            var index1 = userPick[0].index
            var index2 = userPick[1].index
            prevState[index1].flip = false
            prevState[index2].flip = false
            return prevState
          })
          setUserPick([])
        },500)

      }
    }
  }


  return (
    <div>
      <h1>from matching</h1>
      <div className='container'>
        <div class='row'>
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


        </div>
      </div>
    </div>

  )
}

export default Matching;


