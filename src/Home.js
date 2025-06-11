import React from 'react';
import Jenel2 from './Images/Jenel2.jpg'; // Import image
import './App.css'; // Import CSS

function Home() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Jenel2})` }}>
      <div className="overlay">
        <div className="text-container">
          <div className="text-main">Hello</div>
          <div className="text-main">I'm Jenel</div>
          <div className="sub-gradient-text">
            <p>A computer engineer, I'm not just a problem-solver</p>
            <p>I'm an architect of innovation. I thrive on transforming</p>
            <p>complex challenges into elegant, efficient digital solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
