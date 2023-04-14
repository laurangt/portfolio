import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProjectShow from './components/ProjectShow';

function App() {
  return (
    <div className="App text-sans">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<ProjectShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
