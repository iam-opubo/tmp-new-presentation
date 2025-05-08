// import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import WhatWeDo from './components/WhatWeDo'
import Projects from './components/Projects'
import OurPortfolio from './components/OurPortfolio'
import Testimonials from './components/Testimonials'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <WhatWeDo />
      <Projects />
      <OurPortfolio />
      <Testimonials />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default App
