import React from 'react';
import './App.css';
import Header from './Components/Header'; // Make sure the path is correct
import ProfileSection from './Components/ProfileSection';
import Skills from './Components/Skills';
import Education from './Components/Education';
import ContactForm from './Components/ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Experience from './Components/Experience';


function App() {
  return (
    <div className="App">
      <Header />
      <ProfileSection />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;