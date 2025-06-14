import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ visible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={`Header-header ${visible ? 'show' : 'hide'}`} role="banner">
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className="header-menu" aria-label="Main navigation">
        <ul className={`menu-list ${menuOpen ? 'show' : ''}`}>
          <li className="menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Jenel
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/about"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/highlights"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Highlights
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
