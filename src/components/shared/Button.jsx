import React from 'react'

function Button(props) {
  return (
    <div className='bg-pink text-2xl py-2 text-center text-black w-52 rounded-lg'>
      <p>{props.text}</p>
    </div>
  )
}

export default Button
