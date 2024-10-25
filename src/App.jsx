import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TopNav from './components/TopNav'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav />
      <Hero />
      <Projects />
  
    </>
  )
}

export default App
