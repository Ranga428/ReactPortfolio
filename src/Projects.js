import React from 'react';
import './Projects.css';
import BG1 from './Images/BGarcade.jpg';
import ECObin from './Images/ECObin.png';
import Bit from './Images/8Bit.jpg';
import Peerquest1 from './Images/Peerquest1.png';
import BackendJS from './Images/BackendJS.png';
import CaseSEval from './Images/CaseSEval.png';
import Net3CS from './Images/Net3CS.png';
import HIRAC from './Images/HIRAC.png';

import { Link } from 'react-router-dom';

function Subprojects({ items }) {
  return (
    <div className="subprojects-container">
      {items.map((item, index) => (
        <div className="subproject-card" key={index}>
          <img src={item.image} alt={`Subproject ${index + 1}`} className="subproject-image" />
          <h1 className="subproject-title">{item.title} </h1>
          <p className="subproject-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

const subprojectData = [
  {
    image: ECObin,
    title: 'E.C.O Bin',
    text: 'Smart Trash bin capable of sorting bio and non-biodegrable with the use of image recognition, machine learning and logically controlled motors.',
  },
  {
    image: Bit,
    title: 'Control Word From 8-Bit Computer',
    text: 'A component of a 8-Bit Computer where it composes of multiple integrated circuits, EEPROM programmes and 4 visible 7 segment display to showcase 8-bits',
  },
  {
    image: Peerquest1,
    title: 'PeerQuest',
    text: 'A freelance website with a tavern theme, catered for students helping other students. Construced using React JS, Django-Rest Framework and a MySQL database',
  },
  {
    image: BackendJS,
    title: 'BackendJS',
    text: 'A project for our Database Management Systems subject where we are tasked to make a fullstack application but only required the backend functionality.',
  },
  {
    image: CaseSEval,
    title: 'Case Study For Computer Evaluation',
    text: 'A case study on A Performance-Based Comparative Study of Computers and  Workstations Used by Students.',
  },
  {
    image: Net3CS,
    title: 'Group Case Study',
    text: 'A case study on Designing An Enterprise Network where we are tasked to create a enterprise network with NAT and PAT to translate private IP addresses to public IP addresses and GRE over IPSEC VPN to create a secured VPN.',
  },
  {
    image: HIRAC,
    title: 'HIRAC',
    text: 'HIRAC stands for Hazard Identification, Risk Assessment, and Control. It is a systematic approach used in occupational safety and health (OSH) to prevent workplace accidents, illnesses, and injuries.',
  },
];


function Projects() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BG1})` }}>
      <div className="overlay">
      <Link to="/Highlights">
      <section className="text-on-blurProjects">
          <Subprojects items={subprojectData} />
      </section>
      </Link>
      </div>
    </div>
  );
}

export default Projects;
