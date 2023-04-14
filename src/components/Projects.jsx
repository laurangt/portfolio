import React from 'react'
import { Link } from 'react-router-dom'
import ProjectContainer from './ProjectContainer'

import projects from './shared/projectsAPI'

function Projects() {
  return (
    <div id="projects" className='mb-20'>
      <h1 className='text-xl4 pt-20 px-10 lg:px-72'>Projects</h1>
      <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
      <div className='px-10 lg:px-72 mt-20 lg:grid lg:grid-cols-2 lg:gap-20'>
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`}>
            <ProjectContainer project={project} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
