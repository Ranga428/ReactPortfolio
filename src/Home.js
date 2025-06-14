import React from 'react';
import Jenel2 from './Images/Jenel2.jpg'; // Import image
import './App.css'; // Import CSS
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Jenel2})` }}>
      <div className="overlay1">
        <Link to="/About">
        <div className="text-container">
          <div className="text-main">Hello</div>
          <div className="text-main">I'm Jenel</div>
          <div className="sub-gradient-text">
            <p>A computer engineer, I'm not just a problem-solver</p>
            <p>I'm an architect of innovation. I thrive on transforming</p>
            <p>complex challenges into elegant, efficient digital solutions.</p>

            <p
                  className="contact-highlight"
                  onClick={() => {
                    navigator.clipboard.writeText('(+63)9063749610 | Jenelesteron01@gmail.com');
                    alert('Contact info copied to clipboard!');
                  }}
                  title="Click to copy"
                >
                  09063749610 | Jenelesteron01@gmail.com
                </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
