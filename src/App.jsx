import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('fr'); // Default language set to French

  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize('G-0VWKBBS253'); // Replace with your actual Measurement ID
    ReactGA.send('pageview'); // Track the initial page view
  }, []);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Education language={language} />
      <Projects language={language} />
    </>
  );
};

export default App;
