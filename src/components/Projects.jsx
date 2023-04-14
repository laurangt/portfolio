import React from 'react'
import { Link } from 'react-router-dom'

import ProjectContainer from './ProjectContainer'
import StayActive from '../images/coverstayactive.png'
import SvenPT from '../images/covernevski.png'
import Filmoteca from '../images/coverfilmoteca.png'

function Projects() {
  return (
    <div id="projects" className='mb-20'>
      <h1 className='text-xl4 pt-20 px-10 lg:px-72'>Projects</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
      <div className='px-10 lg:px-72 mt-20 lg:grid lg:grid-cols-2 lg:gap-20'>
        <Link to={`/projects/`}>
          <ProjectContainer img_url={Filmoteca} title="Filmoteca"/>
        </Link>
        <ProjectContainer img_url={StayActive} title="StayActive" href="https://www.stayactivecommunity.me/" />
        <ProjectContainer img_url={SvenPT} title="Personal Trainer Website" href="https://nevskifit.com"/>
        {/* <ProjectContainer img_url={StayActive}/> */}
      </div>
    </div>
  )
}

export default Projects
