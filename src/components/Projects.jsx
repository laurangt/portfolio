import React from 'react'
import ProjectContainer from './ProjectContainer'
// import StayActive from '../images/stayactive.jpeg'
import SvenPT from '../images/svenPT.png'

function Projects() {
  return (
    <div id="projects" className='mb-20'>
      <h1 className='text-xl4 pt-20 px-10 lg:px-72'>Projects</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
      <div className='px-10 lg:px-72 mt-20 grid grid-cols-2 gap-44'>
        <ProjectContainer img_url={SvenPT} title="Personal Trainer Website"/>
        {/* <ProjectContainer img_url={StayActive} title="StayActive"/> */}
        <ProjectContainer img_url={SvenPT} title="Personal Trainer Website"/>
        {/* <ProjectContainer img_url={StayActive}/> */}
      </div>
    </div>
  )
}

export default Projects
