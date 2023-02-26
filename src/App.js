import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className="App w-screen text-sans">
      <LandingPage />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
