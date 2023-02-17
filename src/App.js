import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import LanguagesTools from './components/LanguagesTools';

function App() {
  return (
    <div className="App bg-black">
      <h1 className='text-white'>Hello</h1>
      <LandingPage />
      <LanguagesTools />
    </div>
  );
}

export default App;
