import React from 'react'
import Navbar from './shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';

function ProjectShow({projects}) {
  const { slug } = useParams();
  console.log(slug)
  const project = projects.find((p) => p.slug === slug);
  console.log(project.description);

  if (!project) {
    return <div>Project not found</div>;
  }

  const desktop = <>
    <div className='px-10 h-screen lg:px-72 py-10'>
      {project.video &&
      <video width="100%" height="100%" controls muted>
        <source src={project.video} type="video/mp4" />
      </video>}
      <div className='leading-loose mt-10 '>
        <p>About the project:</p>
        <ul className='list-disc list-inside'>
          {project.description.map(des => <li key={des}>{des}</li>
            )}
          <li className='hover:text-pink delay-75'><a href={project.website} target="_blank" rel="noreferrer">Link to website</a></li>
        </ul>
      </div>
    </div>
  </>

  const mobile = <>
    <div className='px-10 h-screen lg:px-72 py-10 sm:flex'>
      <div className='w-1/2 mr-10'>
        <video width="300" controls muted>
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
      <div className='leading-loose mt-10'>
        <p>About the project:</p>
        <ul className='list-disc list-inside'>
          {project.description.map(des => <li key={des}>{des}</li>
            )}
          <li className='hover:text-pink delay-75'><a href={project.website} target="_blank" rel="noreferrer">Link to website</a></li>
        </ul>
      </div>
    </div>
  </>


  return (
    <div className='bg-blue text-white '>
      <Navbar />
      <h1 className='text-2xl pt-10 px-10 lg:px-72'><a href={project.website} target="_blank" rel="noreferrer" className='hover:text-pink'>{project.title}</a></h1>
      <p className='text-sm px-10 lg:px-72'><a href={project.github} target="_blank" rel="noreferrer" className='hover:text-pink'>Github</a></p>
      <hr className="w-1/3 h-1 bg-pink border-none mt-10" />
      {project.phone === 'true' ? mobile : desktop}
    </div>
  )
}

export default ProjectShow
