import React from 'react'

function ProjectContainer(props) {

  return (
    <a href={props.href} target="_blank" rel="noreferrer" >
      <div className='text-lg lg:text-xl2 mb-10 lg:mb-0'>
        <p>{props.title}</p>
        <img src={props.img_url} alt={props.img_url} />
      </div>
    </a>
  )
}

export default ProjectContainer
