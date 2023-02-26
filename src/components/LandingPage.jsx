import React from 'react'
import Button from './shared/Button'
import Navbar from './shared/Navbar/Navbar'

function LandingPage(props) {
  const styles = {fontSize: 200}

  return (
    <div className='h-screen px-20 lg:px-72 bg-blue text-white text-2xl'>
      <Navbar />
      <p style={styles} className='opacity-20	absolute right-0 -top-3'>Developer</p>
      <hr class="w-1/3 h-1 bg-pink absolute left-0 top-40 border-none" />
      <div className='absolute top-1/3 leading-10'>
        <p>Hi, I'm</p>
        <p className='font-lora text-4xl'>Laura Nguyen-Trong</p>
        <p>Full-Stack Developer</p>
        <p className='mt-20 mb-3'>Do you need a website? Are you looking for a developer to join your team?</p>
        <Button text="Let's talk"/>
      </div>
      <hr class="w-1/3 h-1 bg-pink absolute right-0 bottom-40" />
      <p style={styles} className='opacity-20	absolute left-0 bottom-3 border-none'>Developer</p>
    </div>
  )
}

export default LandingPage
