import React from 'react'
import LandingPage from './LandingPage';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import Footer from './shared/Footer';

function Home() {
  return (
    <div>
      <LandingPage />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
