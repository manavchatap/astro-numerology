import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">AstroNumero</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/numerology" 
            className={`nav-link ${isActive('/numerology') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Numerology
          </Link>
          <Link 
            to="/astrology" 
            className={`nav-link ${isActive('/astrology') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Astrology
          </Link>
          <Link 
            to="/compatibility" 
            className={`nav-link ${isActive('/compatibility') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Compatibility
          </Link>
          <Link 
            to="/name-numerology" 
            className={`nav-link ${isActive('/name-numerology') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Name Number
          </Link>
        </div>

        <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
