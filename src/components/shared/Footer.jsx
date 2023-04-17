import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='bg-blue h-16 relative text-white text-center text-xl justify-center items-center flex'>
      <a href="https://www.linkedin.com/in/laura-nguyen-trong/" target="_blank" rel="noreferrer" className='mx-5 hover:text-pink delay-75'><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://github.com/laurangt" target="_blank" rel="noreferrer" className='mx-5 hover:text-pink delay-75'><FontAwesomeIcon icon={faGithub} /></a>
      <p className='lg:absolute bottom-2 right-10 lg:right-32 text-sm'>© 2023 by Laura Nguyen-Trong. All rights reserved.</p>
    </div>
  )
}

export default Footer
