import React from 'react'
import "./Hero.css"



function Hero() {
  return (
    
    
    <div id="home" className='hero-container'>

      <div className='flexbasis-60vw flex-column'>
            <h1 className='h1-greeting'>Welcome! I'm Katie Lundell.</h1>
            <h2 className='h2-details'>Full Stack Developer,
             Computational Chemist, & Enthusiast of STEM Web Apps</h2>
      </div>

      <div className='flexbasis-40vw  flex-row-centered'>    
            <img className='avatar-img' src="./images/avatar.png"/>
      </div>


    </div>
  )
}

export default Hero