import React from 'react'

function Footer() {
  return (
    <div className='bg-blue h-28 relative text-white text-center text-2xl pt-10'>
      <a href="https://www.linkedin.com/in/laura-nguyen-trong/" target="_blank" rel="noreferrer" className='mx-5 hover:text-pink delay-75'>Linkedin</a>
      <a href="https://github.com/laurangt" target="_blank" rel="noreferrer" className='mx-5 hover:text-pink delay-75'>Github</a>
      <p className='absolute bottom-2 right-32 text-sm'>© 2023 by Laura Nguyen-Trong. All rights reserved.</p>
    </div>
  )
}

export default Footer
