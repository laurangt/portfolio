import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Button(props) {
  return (
    <div className='bg-pink text-2xl py-2 text-center text-black w-52 rounded-lg'>
      <Link to="/#contact">{props.text}</Link>
    </div>
  )
}

export default Button
