import React from 'react'
import FilmotecaVideo from '../images/videos/filmotecaVideo.mov';
import Navbar from './shared/Navbar/Navbar';

function ProjectShow() {
  return (
    <div className='h-screen w-screen bg-blue text-white text-xl sm:text-xl2'>
      <Navbar />
        <h1 className='text-xl4 pt-20 px-10 lg:px-72'>Filmoteca</h1>
        <hr className="w-1/3 h-1 bg-pink border-none mt-20" />
        <div className='px-10 lg:px-72 py-10'>
          <div className='flex'>
            <div className='w-1/2 leading-loose'>
              <p>About the project:</p>
              <ul className='list-disc list-inside'>
                <li>Revamp of a cinema website, aiming to facilitate user experience</li>
                <li>Team project</li>
                <li>ReactJS, JavaScript, Ruby on Rails, Tailwind CSS</li>
                <li>
                  <a href="https://filmoteca.herokuapp.com/" target="_blank" rel="noreferrer">Link to website</a>
                </li>
                <li>
                  <a href="https://github.com/RdzYogi/filmoteca" target="_blank" rel="noreferrer">Link to code</a>
                </li>
              </ul>
            </div>
            <div className='w-1/2'>
              <video width="640" height="480" controls muted>
                <source src={FilmotecaVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectShow
