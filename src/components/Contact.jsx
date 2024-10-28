import React from 'react'
import './Contact.css'

function Contact()  {
    return (
      <div className='container-100vh-100vw' style={{ position: 'relative', zIndex: 1,}} >
  
  
  
        <div className='contact-column flexbasis-50vw about-details' >
          <p className='about-desc'><a href='mailto:katie.lundell@outlook.com'>Shoot me an email</a> at katie.lundell@outlook.com or look me up on social media.</p>
          <div className='contact-row flexbasis-30vw'>
          <h1 id='about' className='title-box '>Send A Message</h1>
          <a href='https://github.com/fyrelily'><img className="logo" src="./images/github.svg" /></a>
          <a href='https://www.linkedin.com/in/katie-a-lundell-762a937b/'><img className="logo" src="./images/linkedin.svg" /></a>
          <div className='contact-decor'></div>
        </div>

        </div>
  
  
  

  
  
  
  
  
  
  
  
      </div>
    )
  }

export default Contact