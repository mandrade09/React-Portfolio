// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
   
      <h1>React Portfolio</h1> 
      <nav>
        <Navigation />
        {/* <ul>
          <li><Link to="#about-me">About Me</Link></li>
          <li><Link to="#portfolio">Portfolio</Link></li>
          <li><Link to="#contact">Contact</Link></li>
          <li><Link to="#resume">Resume</Link></li>
        </ul> */}

      </nav>
    </header>
  );
};

export default Header;
