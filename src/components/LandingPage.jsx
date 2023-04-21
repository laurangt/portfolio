import React from 'react'
import Button from './shared/Button'
import Navbar from './shared/Navbar/Navbar'

function LandingPage() {

  return (
    <div className='h-screen px-10 lg:px-72 bg-blue text-white text-lg sm:text-xl'>
      <Navbar />
      <p className='text-nmSize lg:text-lgSize opacity-20	absolute right-0 -top-12 lg:-top-32'>Developer</p>
      <hr className="w-1/3 h-1 bg-pink absolute left-0 top-40 border-none" />
      <div className='absolute top-1/3 leading-10'>
        <p>Hi, I'm</p>
        <p className='font-lora text-2xl sm:text-3xl'>Laura Nguyen-Trong</p>
        <p>Full-Stack Developer</p>
        <p className='mt-10 lg:mt-20 mb-3 leading-8'>Do you need a website? Are you looking for a developer to join your team?</p>
        <Button text="Let's talk"/>
      </div>
      <hr className="w-1/3 h-1 bg-pink absolute right-0 md:bottom-30 bottom-16" />
      <p className='text-nmSize lg:text-lgSize opacity-20	absolute left-0 -bottom-9 lg:-bottom-24 border-none'>Developer</p>
    </div>
  )
}

export default LandingPage
