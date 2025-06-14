import React from 'react';
import './Highlights.css';
import BG1 from './Images/BGarcade.jpg';
import { Link } from 'react-router-dom';


function Highlights() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
    <div className="overlay1">
      <Link to="/">
      <ul className="highlights">
        <li>
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
        </li>

        <li>
            <section className="text-on-blur">
                <h1>Achievements</h1>
                <ul className="skills-list">
                    <li>VPAA's Lister – First Year, First Semester, TIP</li>
                    <li>Dean's Lister – Third Year, First Semester, TIP</li>
                    <li>Bronze Loyalty Award – LICS</li>
                    <li>Most Diligent Award – LICS</li>
                    <li>Champion – Badminton, LICS Intramurals</li>
                    <li>Runner-up – Mathematics Quiz Bee, LICS</li>
                    <li>Runner-up – Chess, LICS Intramurals</li>
                </ul>
            </section>
        </li>

        <li>
            <section className="text-on-blur">
                <h1>Extracurricular Activites</h1>
                <ul className="skills-list">
                    <li>Head Planning Committee – CoESS (Computer Engineering Student Society)</li>
                    <li>Member – ICpEP (Institute of Computer Engineers of the Philippines)</li>
                    <li>Associate Officer – Tempest Gaming Society</li>
                    <li>Intercollege Valorant Player – Tempest Gaming Society</li>
                </ul>
            </section>
        </li>
      </ul>
      </Link>
      </div>
    </div>
  );
}

export default Highlights;
