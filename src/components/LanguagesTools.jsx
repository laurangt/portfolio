import React from 'react'
import bootstrap from '../images/bootstrap.jpeg'
import css from '../images/css.png'
import figma from '../images/figma.png'
import git from '../images/git.png'
import html from '../images/html.png'
import javascript from '../images/javascript.png'
import postgresql from '../images/postgresql.png'
import react from '../images/react.png'
import rails from '../images/rails.png'
import ruby from '../images/ruby.jpeg'
import tailwind from '../images/tailwind.png'

function LanguagesTools() {
  return (
    <div className='flex'>
      <img src={bootstrap} className="h-10" alt="bootstrap logo"/>
      <img src={css} className="h-10" alt="css logo"/>
      <img src={figma} className="h-10" alt="figma logo"/>
      <img src={git} className="h-10" alt="git logo"/>
      <img src={html} className="h-10" alt="html logo"/>
      <img src={javascript} className="h-10" alt="javascript logo"/>
      <img src={postgresql} className="h-10" alt="postgresql logo"/>
      <img src={react} className="h-10" alt="react logo"/>
      <img src={rails} className="h-10" alt="rails logo"/>
      <img src={ruby} className="h-10" alt="ruby logo"/>
      <img src={tailwind} className="h-10" alt="tailwind logo"/>
    </div>
  )
}

export default LanguagesTools
