import React from 'react';
import './App.css'; // Import CSS
import BG1 from './Images/BGarcade.jpg'; // Import image

function Skills() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
      <section className="text-on-blur">
        <h1>Skills</h1>
        <ul className="skills-list">
          <li>Cybersecurity Knowledge – CIA Triad, basic network defense and attack concepts</li>
          <li>Leadership & Teamwork – Leads planning committees, volunteers for leadership roles</li>
          <li>Event Planning – Head of Planning Committee for student org events</li>
          <li>Organizational Involvement – Active member of tech and gaming organizations</li>
          <li>Communication – Clear, responsible communicator with peers and mentors</li>
          <li>Tools & Platforms – Basic familiarity with SOC tools, Linux, Wireshark, and Packet Tracer</li>
        </ul>
      </section>
    </div>
  );
}

export default Skills;
