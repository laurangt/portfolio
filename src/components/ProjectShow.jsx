import React from 'react'
import Navbar from './shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';

function ProjectShow({projects}) {
  const { slug } = useParams();
  console.log(slug)
  const project = projects.find((p) => p.slug === slug);
  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='bg-blue text-white text-xl sm:text-xl2'>
      <Navbar />
        <h1 className='text-xl4 pt-20 px-10 lg:px-72'><a href={project.website} target="_blank" rel="noreferrer" className='hover:text-pink'>{project.title}</a></h1>
        <p className='text-sm px-10 lg:px-72'><a href={project.github} target="_blank" rel="noreferrer" className='hover:text-pink'>Github</a></p>
        <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
        <div className='px-10 lg:px-72 py-10'>
          <video width="100%" height="100%" controls muted>
            <source src={project.video} type="video/mp4" />
          </video>
        <div className='leading-loose mt-10'>
          <p>About the project:</p>
          <ul className='list-disc list-inside'>
            <li>Revamp of a cinema website, aiming to facilitate user experience</li>
            <li>Team project</li>
            <li>Technologies used: ReactJS, JavaScript, Ruby on Rails, Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectShow
