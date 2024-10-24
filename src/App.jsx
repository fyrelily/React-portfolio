import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TopNav from './components/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNav />
    <Hero />
  
        </>
  )
}

export default App
