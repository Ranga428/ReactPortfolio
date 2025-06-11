import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function Skills() {
  return (
    <div className="App1" style={{ backgroundImage: `url(${BG1})` }}>
    <section>
      <h1>Skills</h1>
      <p>Technical skills and tools I use.</p>
    </section>
    </div>
  );
}

export default Skills;
