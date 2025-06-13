import React from 'react';
import './App.css';
import BG1 from './Images/BGarcade.jpg'; 
import { Link } from 'react-router-dom';


function Contact() {
  return (
      <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
        <Link to="/">
        <section className="text-on-blur">
          <h1>Contact</h1>
          <ul className="skills-list">
            <li>Phone: (+63)9063749610</li>
            <li>Email: Mjesteron@tip.edu.ph</li> 
          </ul>
        </section>
        </Link>
      </div>
    );
}

export default Contact;
