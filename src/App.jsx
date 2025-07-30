import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Location from './components/location.jsx'  
import Separation from './components/separation.jsx'
import ContactUs from './components/contactus.jsx'
import ProjectSection from './components/projectsec.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Separation />
      <Location />
      <Separation />
      <ProjectSection />
      <Separation />
      <ContactUs />
    </>
  )
}

export default App
