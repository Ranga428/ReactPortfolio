import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">
        <h2 className=".footer-content h2" >Jenel Portfolio</h2>
        </Link>
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
