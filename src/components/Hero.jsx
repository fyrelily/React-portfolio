import React from 'react'
import "./Hero.css"



function Hero() {
  return (
    
    
    <div id="home" className='hero-container'>

      <div className='hero-greeting greeting-container'>
     
          <div className='greeting-item'>
          <h1 className='h1-greeting'>Welcome!
            <br/> I'm Katie Lundell.</h1>
          </div>
          
          <div className='details-item'>
          <h2 className='h2-details'>Full Stack Developer,
            <br /> Computational Chemist, <br /> & Enthusiast of STEM Web Apps</h2>
          </div>
      </div>

      <div className='hero-avatar avatar-container'>    
            <img className='avatar-img' src="./images/avatar.png"/>
      </div>


    </div>
  )
}

export default Hero