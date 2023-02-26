import React from 'react'
import NavLink from './NavLink'

function Navbar() {
  return (
    <div className='flex absolute right-64 pt-10 z-10'>
      <NavLink text="Projects" />
      <NavLink text="Services" />
      <NavLink text="Contact" />
    </div>
  )
}

export default Navbar
