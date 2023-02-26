import React from 'react'
import Technology from './Technology'
import Ruby from '../images/ruby.jpeg'

function Services() {
  return (
    <div className='h-screen bg-blue text-white text-2xl'>
      <h1 className='text-4xl pt-20 px-20 lg:px-72'>Services</h1>
      <hr class="w-1/3 h-1 bg-pink border-none mt-20" />
      <div className='px-20 lg:px-72 mt-20'>
        <p>I`m a full-stack web developer, passionate about coding and creating amazing websites that enhance user experience.</p>
        <div className='flex gap-20 mt-16'>
          <div className='w-1/2'>
            <p className='text-center mb-2.5'>Web development</p>
            <p className='text-justify'>Whether you need a website for your new business or a makeover for your current website,  I will make sure your vision is realised and more.</p>
          </div>
          <div className='w-1/2'>
            <p className='text-center mb-2.5'>UI/UX design</p>
            <p className='text-justify'>You don`t have an exact idea of what you want your website to look like? Let me help you create a vision and come up with an amazing design that will greatly benefit your business.</p>
          </div>
        </div>
        <div className='mt-16'>
          <p className='text-3xl'>Technologies</p>
          <div className='grid grid-cols-4 mt-5'>
            <div>
              <Technology img_url={Ruby} title="Ruby"/>
              <Technology img_url={Ruby} title="JavaScript"/>
              <Technology img_url={Ruby} title="MatLab"/>
            </div>
            <div>
              <Technology img_url={Ruby} title="React"/>
              <Technology img_url={Ruby} title="Ruby on Rails"/>
              <Technology img_url={Ruby} title="PostgreSQL"/>
              <Technology img_url={Ruby} title="Git"/>
            </div>
            <div>
              <Technology img_url={Ruby} title="HTML"/>
              <Technology img_url={Ruby} title="Figma"/>
              <Technology img_url={Ruby} title="SPSS"/>
            </div>
            <div>
              <Technology img_url={Ruby} title="CSS"/>
              <Technology img_url={Ruby} title="Tailwind CSS"/>
              <Technology img_url={Ruby} title="Bootstrap CSS"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
