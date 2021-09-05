import React, {useState} from 'react'
import './card.css'

function Card ({ index, name, image, flip, handleOnClick, setUserPick}) {
  // const [flip, setFlip] = useState(false)
  const handleImageClick = (e) => {
    handleOnClick(index, name)
  }

  return (
    <div
      onClick={handleImageClick}
      className='card m-1 cardmatching'
      > {flip ? (<img
        src={image}
        alt={name}
        className='good'
        name={name}
        index={index}
        ></img>) : (<img
      src='./card.png'
      alt={name}
      className='bad'
      ></img>)}
    </div>
  )
}

export default Card;