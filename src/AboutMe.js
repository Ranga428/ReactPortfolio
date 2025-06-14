import React from 'react';
import './App.css';
import BG1 from './Images/BGarcade.jpg'; 
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
      <div className="overlay1">
      <Link to="/Projects">
      <section className="text-on-blur">
        <h1>About Me</h1>
        <p>
          I’m a motivated and disciplined 21-year-old Computer Engineering student currently in my third year, 
          majoring in Cybersecurity. I was born on April 27, 2004, in Abha, Saudi Arabia. 
          From a young age, I’ve been fascinated by technology—particularly networks, programming, 
          and the ever-evolving world of cybersecurity. I am well-versed in foundational cybersecurity principles 
          such as the CIA triad, as well as both offensive and defensive security strategies.
          In addition to my technical skills, I bring strong leadership qualities. I take pride in 
          leading my group projects effectively, ensuring that every team member contributes meaningfully based 
          on their individual strengths. My experience in organizing academic activities and events 
          has helped me develop a balanced mix of discipline, communication, and coordination skills.
          Outside the academic world, I enjoy playing video games as both a creative outlet and a way to unwind. 
          I’m also deeply passionate about pursuing a career in Security Operations Center (SOC) analysis, 
          where I can apply my skills to real-world challenges and continue learning every day.
          On a personal note, I have a loving girlfriend whom I adore deeply. I dream of building a happy, 
          fulfilling life with her, grounded in love, stability, and shared growth—both personally and professionally.
        </p>
      </section>
      </Link>
      </div>
    </div>
  );
}

export default AboutMe;
