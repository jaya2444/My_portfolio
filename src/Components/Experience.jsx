import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <h3>Training and Placement Coordinator</h3>
        <p className="location">Pune, India</p>
        <p className="description">
          Managed attendance and discipline for 150 students. Developed schedules and rules, and handled academic issues. Collaborated with teachers to help students prepare for placements.
        </p>
      </div>
      <div className="experience-card">
        <h3>Discipline Coordinator</h3>
        <p className="location">Bengaluru, India</p>
        <p className="description">
          Managed attendance and discipline for 150 students, addressing campus issues and overseeing data for outings. Coordinated accommodations for new students, fostering a positive and respectful environment.
        </p>
      </div>
    </section>
  );
};

export default Experience;
