import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import heroImage from '../assests/hero.jpg'; // Adjust path based on your project structure

const titles = [
  "Full Stack Developer",
  "Coder",
  "Programmer",
  "Frontend Developer",
  "UI Designer",
  "Web developer",
  "Software developer"
];

const ProfileSection = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setCurrentTitle(titles[index]);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index]);

  return (
    <section className="profile-section" id="about">
      <div className="profile-info">
        <h2>Hi, I am</h2>
        <h1>Jaya Kumawat</h1>
        <h3>I am a <span className="highlight">{currentTitle}</span></h3>
        <p>
          I am a motivated and versatile individual, always eager to take on new challenges.
          With a passion for learning, I am dedicated to delivering high-quality results.
          With a positive attitude and growth mindset, I am ready to make a meaningful
          contribution and achieve great things.
        </p>
        <a 
          href="https://drive.google.com/file/d/1sNCcXcZwTcYV43-5MTM4oeUEmwiWrPpt/view" // Replace with your actual resume URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
        >
          Check Resume
        </a>
      </div>
      <div className="profile-image">
        <img src={heroImage} alt="Jaya Kumawat" />
      </div>
    </section>
  );
};

export default ProfileSection;
