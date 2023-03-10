import React from 'react'

function ProjectContainer(props) {
  return (
    <div className='h-64 text-lg lg:text-xl2'>
      <p>{props.title}</p>
      <img src={props.img_url} alt={props.img_url}/>
    </div>
  )
}

export default ProjectContainer
