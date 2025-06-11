import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function Projects() {
  return (
    <div className="App1" style={{ backgroundImage: `url(${BG1})` }}>
    <section>
      <h1>Projects</h1>
      <p>Showcase of projects I've worked on.</p>
    </section>
    </div>
  );
}

export default Projects;
