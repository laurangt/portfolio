import React from 'react'
import ProjectContainer from './ProjectContainer'

import projects from './shared/projectsAPI'

function Projects() {
  return (
    <div id="projects" className='mb-10'>
      <h1 className='text-2xl pt-10 px-10 lg:px-72'>Projects</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-10" />
      <div className='px-10 lg:px-72 mt-10 lg:grid lg:grid-cols-2 lg:gap-10'>
        {projects.map((project) => (
          <a key={project.id} href={`/projects/${project.slug}`}>
            <ProjectContainer project={project} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
