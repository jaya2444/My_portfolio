import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaWindows } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiPython, SiNetlify, SiVercel, SiVisualstudiocode, SiMongoose } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills-container" id="skills"> {/* Add id here */}
      <h1 className="skills-title">Skills</h1>
      <p className="skills-description">Here are some of my skills which I have been working on:</p>

      <div className="skills-grid">
        {/* Frontend Section */}
        <div className="skills-card">
          <h2>Frontend</h2>
          <div className="skills-list">
            <span><FaHtml5 /> HTML</span>
            <span><FaCss3Alt /> CSS</span>
            <span><FaJsSquare /> JavaScript</span>
            <span><FaReact /> React.js</span>
            <span><FaBootstrap /> Bootstrap</span>
            <span><SiTailwindcss /> Tailwind CSS</span>
            <span><SiRedux /> Redux</span>
            <span><SiRedux /> Redux Toolkit</span>
          </div>
        </div>

        {/* Backend Section */}
        <div className="skills-card">
          <h2>Backend</h2>
          <div className="skills-list">
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express.js</span>
            <span><SiMongodb /> MongoDB</span>
            <span><SiMongoose /> Mongoose</span>
            <span>JWT(Json Web Tokens)</span> {/* No icon used here */}
            <span>RESTful APIs</span> {/* No icon used here */}
            <span><SiPython /> Python</span>
          </div>
        </div>

        {/* Other Tools Section */}
        <div className="skills-card">
          <h2>Other Tools</h2>
          <div className="skills-list">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><SiNetlify /> Netlify</span>
            <span><SiVercel /> Vercel</span>
            <span><FaLinux /> Linux</span>
            <span><FaWindows /> Windows</span>
            <span><SiVisualstudiocode /> VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
