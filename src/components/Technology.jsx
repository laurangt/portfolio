import React from 'react'

function Technology(props) {
  return (
    <div className='flex'>
      <img src={props.img_url} alt={props.img_url} className="mr-3 w-8 h-8 my-2 object-contain"/>
      <p className='self-center'>{props.title}</p>
    </div>
  )
}

export default Technology
