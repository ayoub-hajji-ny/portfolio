import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
    </div>
  )
}

export default App
