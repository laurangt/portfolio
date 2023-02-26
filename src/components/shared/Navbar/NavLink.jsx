import React from 'react'

function NavLink(props) {
  return (
    <div>
      <p className='px-5 hover:text-pink delay-75'>{props.text}</p>
    </div>
  )
}

export default NavLink
