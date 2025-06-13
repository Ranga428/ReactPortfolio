import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ visible }) {
  return (
    <header className={`Header-header ${visible ? 'show' : 'hide'}`} role="banner">
      <nav className="header-menu" aria-label="Main navigation">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Jenel</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="menu-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="menu-item">
            <Link to="/highlights">Highlights</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
