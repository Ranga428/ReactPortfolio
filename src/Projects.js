import React from 'react';
import './Projects.css';
import BG1 from './Images/BGarcade.jpg';
import ECObin from './Images/ECObin.png';
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
    image: '/images/traffic-ai.jpg',
    text: 'AI-based traffic management system that optimizes green light durations in real-time.',
  },
  {
    image: '/images/water-monitoring.jpg',
    text: 'IoT-based water quality monitoring network for city reservoirs and public fountains.',
  },
  {
    image: '/images/waste-segregation.jpg',
    text: 'Automated waste segregation system using image recognition and smart bins.',
  },
  {
    image: '/images/emergency-app.jpg',
    text: 'Mobile emergency alert system that connects citizens directly with local responders.',
  },
  {
    image: '/images/green-buildings.jpg',
    text: 'Monitoring system for energy consumption and CO2 levels in smart buildings.',
  }
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
