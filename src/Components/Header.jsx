import React from 'react';
import './Header.css';
import logo from '../assests/logo1.jpg'; // Adjust the path as necessary based on your project structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Portfolio Logo" className="logo" />
        <span className="portfolio-title">Portfolio</span> {/* Portfolio text next to the logo */}
      </div>
      <div className="nav-group">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="https://github.com/jaya2444" className="github-btn">GitHub Profile</a>
      </div>
    </header>
  );
};

export default Header;
