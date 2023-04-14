import React from 'react'
import NavLink from './NavLink'

function Navbar() {
  return (
    <div className='flex lg:absolute right-10 lg:right-32 pt-10 z-10'>
      <NavLink link="/" text="Home" />
      <NavLink link="/#projects" text="Projects" />
      <NavLink link="/#services" text="Services" />
      <NavLink link="/#contact" text="Contact" />
    </div>
  )
}

export default Navbar
