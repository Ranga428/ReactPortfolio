import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function AboutMe() {
  return (
    <div className="App1" style={{ backgroundImage: `url(${BG1})` }}>
    <section>
      <h1>About Me</h1>
      <p>Brief biography and background.</p>
    </section>
    </div>
  );
}

export default AboutMe;
