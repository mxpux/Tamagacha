import React, {useEffect, useState} from 'react'
import './matching.css'
import Card from './Card.js'

const images = [
  {
    name: 'paintochi',
    image: 'https://tamagotchi.com/wp-content/uploads/paintochi.jpg'
  },
  {
    name: 'kuchipatchi',
    image: 'https://tamagotchi.com/wp-content/uploads/kuchipatchi.jpg'
  },
  {
    name: 'ginjirotchi',
    image: 'https://tamagotchi.com/wp-content/uploads/ginjirotchi.jpg'
  },
  {
    name: 'mimitchi',
    image: 'https://tamagotchi.com/wp-content/uploads/mimitchi.jpg'
  },
  {
    name: 'weeptchi',
    image: 'https://tamagotchi.com/wp-content/uploads/weeptchi.jpg'
  },
  {
    name: 'sebiretchi',
    image: 'https://tamagotchi.com/wp-content/uploads/sebiretchi.jpg'
  }
]

const images2 = [...images, ...images]


function Matching() {

  let cards = document.querySelectorAll('.card')
  const [randomImageLink, setRandomImageLink] = useState(images2);

  useEffect(() => {
    // shuffleImages()
  })



  // const shuffleImages = () => {
  //   let shuffled = randomImageLink.sort(() => Math.random() - 0.5)
  //   console.log('shuffled', shuffled)
  //   setRandomImageLink(shuffled)
  // }

  // function insertImagesToCard() {
  //   var shuffled = shuffleImages()
  //   for(var i = 0; i < cards.length; i++) {
  //     cards[i].children[0].src = shuffled[i]
  //     console.log('aaaa', cards[i].children[0].src)
  //   }
  // }


  const imageOnClick = (e) => {

    console.log('fdasfadsff',e.target)
  }

  return (
    <div>
      <h1>from matching</h1>
      <div className='container'>

        <div class='row'>
        {randomImageLink.sort(() => Math.random() - 0.5)
        .map((item, index) => {
          return <Card key={index} item={item} imageOnClick={imageOnClick}/>
        })}


        </div>
      </div>
    </div>

  )
}

export default Matching;