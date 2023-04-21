import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavLink(props) {
  return (
    <div>
      <Link to={props.link} className='px-4 hover:text-pink delay-75'>{props.text}</Link>
    </div>
  )
}

export default NavLink
