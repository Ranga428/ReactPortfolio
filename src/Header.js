import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ visible }) {
  return (
    <header className={`Header-header ${visible ? 'show' : 'hide'}`} role="banner">
      <nav className="header-menu" aria-label="Main navigation">
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
            >
              Jenel
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/about"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
            >
              About Me
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
            >
              Projects
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/highlights"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
            >
              Highlights
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
