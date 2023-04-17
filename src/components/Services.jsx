import React from 'react'
import Technology from './Technology'
import RubyLogo from '../images/ruby.jpeg'
import JavascriptLogo from '../images/javascript.png'
import BootstrapLogo from '../images/bootstrap.jpeg'
import CSSLogo from '../images/css.png'
import FigmaLogo from '../images/figma.png'
import GitLogo from '../images/git.png'
import HtmlLogo from '../images/html.png'
import PostgresqlLogo from '../images/postgresql.png'
import RailsLogo from '../images/rails.png'
import ReactLogo from '../images/react.png'
import TailwindLogo from '../images/tailwind.png'
import MatlabLogo from '../images/matlab.png'
import SpssLogo from '../images/spss.jpg'
import TypeScript from '../images/typescript.png'

function Services() {
  return (
    <div id="services" className=' bg-blue text-white'>
      <h1 className='text-2xl pt-10 px-10 lg:px-72'>Services</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-10" />
      <div className='px-10 lg:px-72 py-10'>
        <p className='text-justify'>I`m a full-stack developer, passionate about coding and creating amazing websites that enhance user experience.</p>
        <div className='xl:flex gap-20 mt-10'>
          <div className='xl:w-1/2'>
            <p className='text-center mb-2.5'>Web development</p>
            <p className='text-justify'>Whether you need a website for your new business or a makeover for your current website,  I will make sure your vision is realised and more.</p>
          </div>
          <div className='xl:w-1/2 mt-10 xl:mt-0'>
            <p className='text-center mb-2.5'>UI/UX design</p>
            <p className='text-justify'>You don't have an exact idea of what you want your website to look like? Let me help you create a vision and come up with an amazing design that will greatly benefit your business.</p>
          </div>
        </div>
        <div className='my-10'>
          <p className='text-lg'>Technologies</p>
          <div className='grid xl:grid-cols-4 grid-cols-2 mt-5'>
            <div>
              <Technology img_url={JavascriptLogo} title="JavaScript"/>
              <Technology img_url={RubyLogo} title="Ruby"/>
              <Technology img_url={MatlabLogo} title="MatLab"/>
              <Technology img_url={TypeScript} title="TypeScript"/>
            </div>
            <div>
              <Technology img_url={ReactLogo} title="React"/>
              <Technology img_url={ReactLogo} title="React Native"/>
              <Technology img_url={RailsLogo} title="Ruby on Rails"/>
              <Technology img_url={PostgresqlLogo} title="PostgreSQL"/>
            </div>
            <div>
              <Technology img_url={GitLogo} title="Git"/>
              <Technology img_url={HtmlLogo} title="HTML"/>
              <Technology img_url={FigmaLogo} title="Figma"/>
              <Technology img_url={SpssLogo} title="SPSS"/>
            </div>
            <div>
              <Technology img_url={CSSLogo} title="CSS"/>
              <Technology img_url={TailwindLogo} title="Tailwind"/>
              <Technology img_url={BootstrapLogo} title="Bootstrap"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
