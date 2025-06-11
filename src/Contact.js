import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function Contact() {
  return (
    <div className="App1" style={{ backgroundImage: `url(${BG1})` }}>
    <section>
      <h1>Contact</h1>
      <p>Get in touch with me!</p>
    </section>
    </div>
  );
}

export default Contact;
