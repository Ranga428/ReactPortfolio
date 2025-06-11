import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function Contact() {
  return (
      <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
        <section className="text-on-blur">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>Phone: (+63)9063749610</li>
            <li>Email: Mjesteron@tip.edu.ph</li> 
          </ul>
        </section>
      </div>
    );
}

export default Contact;
