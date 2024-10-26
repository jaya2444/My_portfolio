import React from 'react';
import './Education.css'; // CSS for styling

const Education = () => {
  const educationData = [
    {
      degree: 'Frontend Bootcamp',
      institution: 'Meraki',
      year: '01/2024 – Present',
      description: 'Comprehensive training in front-end development, focusing on JavaScript, React.js, and modern web design practices.',
    },
    {
      degree: 'Software Programming Diploma',
      institution: 'Navgurukul Foundation for Social Welfare',
      year: '12/2021 – Present',
      description: 'Intensive diploma program covering software development, problem-solving, and collaborative projects.',
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'Government Swasasi P.G College',
      year: '05/2019 – 07/2021',
      description: 'Studied advanced mathematics and analytical techniques with practical applications in data and technology.',
    },
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <EducationEntry key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

const EducationEntry = ({ degree, institution, year, description }) => (
  <div className="education-entry">
    <h3 className="degree">{degree}</h3>
    <p className="institution">{institution}</p>
    <span className="year">{year}</span>
    <p className="description">{description}</p>
  </div>
);

export default Education;
