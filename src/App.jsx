import React from 'react'
import Hero from './Components/Hero'
import "../src/index.css"
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Bio from './Components/Bio'
import Skills from './Components/Skills'
import WorkExp from './Components/WorkExp'
import Education from './Components/Education'
import ContactForm from './Components/ContactForm'

const App = () => {
  return (
    <div className='reltive h-full overflow-y-auto antialiased'>
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto '></div>
      <Hero/>
      <Navbar/>
      <Projects/>
      <Bio/>
      <Skills/>
      <WorkExp/>
      <Education/>
      <ContactForm/>
    </div>
  )
}

export default App