import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App w-screen text-sans">
      <LandingPage />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
