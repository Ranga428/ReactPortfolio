import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Jenel Portfolio</h2>
        <p>© {new Date().getFullYear()} Jenel. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Ranga428" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jenel-esteron-83459b2a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
