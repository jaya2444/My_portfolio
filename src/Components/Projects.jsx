import React from "react";
import "./Projects.css";
// Ensure the case matches exactly with the file names in your assets folder

import cryptoImg from "../assests/crypto.png"; // Assuming this is correct
import feedbackImg from "../assests/Feedback.png"; // Corrected to match 'Feedback.png'
import movieImg from "../assests/movie.png"; // Assuming this is correct

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Crypto Project */}
          <div className="project">
            <a href="https://crypto-dashboard-one-wheat.vercel.app/dashboard">
              <img
                src={cryptoImg}
                alt="Crypto Project"
                className="project-image"
              />
        
            </a>
            <a href="https://github.com/shivani-methke/Cryptocurrency-Dashboard">
            </a>
            <p>
            The application shows live updates of the cryptocurrency market using data from APIs like CoinGecko. It displays price trends and market statistics with easy-to-understand graphs and charts. Built with React.js, it ensures a smooth and interactive user experience. Users can search for specific cryptocurrencies and filter results by market cap or volume. Overall, it provides an efficient way to track and analyze cryptocurrency data.
            </p>
          </div>

          {/* Feedback Project */}
          <div className="project">
            <a href="https://generated-report.netlify.app/">
              <img
                src={feedbackImg}
                alt="Feedback System"
                className="project-image"
              />
             
            </a>
            <a href="https://github.com/shivani-methke/Generate-report">
    
            </a>
            <p>
            I made a Feedback Report Generator using HTML, Tailwind CSS, JavaScript, and React for the front end. I used Google Apps Script to save data in Google Sheets and the Gemini API to create detailed reports. The design works well on all devices, and I set up an automated system to make reporting easier and faster.
            </p>
          </div>

          {/* Movie Generator Project */}
          <div className="project">
            <a href="https://movie-list-five-alpha.vercel.app/">
              <img
                src={movieImg}
                alt="Movie Generator"
                className="project-image"
              />
             
            </a>
            <a href="https://github.com/shivani-methke/Movie-list">
             
            </a>
            <p>
              A movie generator app built using React.js, allowing users to
              search and discover movies.A movie generator app built using
              React.js, allowing users to search and discover movies.A movie
              generator app built using React.js, allowing users to search and
              discover movies.A movie generator app built using React.js,
              allowing users to search and discover movies.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;