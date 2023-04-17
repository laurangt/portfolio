import React from 'react'

function ProjectContainer({project}) {
  return (
      <div className='text-lg mb-10 lg:mb-0'>
        <p>{project.title}</p>
        <img src={project.img_url} alt={project.title} className='border border-black rounded' />
      </div>
  )
}

export default ProjectContainer
