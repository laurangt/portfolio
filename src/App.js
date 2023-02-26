import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import LanguagesTools from './components/LanguagesTools';

function App() {
  return (
    <div className="App bg-blue text-sans">
      <LandingPage />
      <LanguagesTools />
    </div>
  );
}

export default App;
