import React from 'react'
const Avatsr = ({user}) => {
    const {name, imageUrl, imgSize} = user

  return (
   <div>
    <h1>{name}</h1>
    <img src={imageUrl} width={imgSize}/>
   </div>
  )
}

export default Avatsr
