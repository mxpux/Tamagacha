import React from 'react'





function Card ({item}) {
  return (
    <img
      src={item.image}
      alt={item.name}
      className='image m-2'
      name={item.name}
      onClick={item.imageOnClick}>
    </img>
  )

}


export default Card;