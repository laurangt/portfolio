import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ProjectShow from './components/ProjectShow';
import projects from './components/shared/projectsAPI';

function App() {
  return (
    <div className="App text-sans">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {projects.map((project) => (
            <Route key={project.id} exact path={`/projects/:slug`} element={<ProjectShow projects={projects}/>} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
