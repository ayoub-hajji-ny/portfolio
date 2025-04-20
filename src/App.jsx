import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('fr'); // Default language set to French

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About />
      <Education language={language} />
      <Projects />
    </>
  );
};

export default App;
