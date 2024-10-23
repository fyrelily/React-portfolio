import React from 'react'
import "./Hero.css"



function Hero() {
  return (
    <div className='hero-container'>


      <div className='hero-greeting greeting-container'>
     
          <h1 className='h1-greeting'>Welcome! I'm Katie Lundell.</h1>

          <h2 className='h2-details'>Full Stack Developer, Computational Chemist & Enthusiast of STEM Web Apps</h2>

      </div>

      <div className='hero-avatar avatar-container'>    
            <img className='avatar-img' src="./images/avatar.png"/>
      </div>


    </div>
  )
}

export default Hero