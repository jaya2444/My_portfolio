import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </div>
      <div className="footer-social">
        <a href="https://github.com/jaya2444" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jaya-kumawat-a5416323b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Jayak41412" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"> {/* Replace with your Facebook profile URL */}
          <i className="fab fa-facebook"></i> {/* Facebook icon */}
        </a>
        <a href="https://www.instagram.com/jayakumawat690/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footer-copyright">
        © 2024 Jaya Kumawat. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
