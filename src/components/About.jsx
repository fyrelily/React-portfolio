import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='container-100vh-100vw' style={{ position: 'relative', zIndex: 1, }} >



      <div className='flex-column flexbasis-60vw project-details' style={{border:"2px solid green"}}>
        <h2 className='project-name'>Chemistry Tutoring Web App</h2>
        <p className='project-desc'>Elevate your chemistry studies with our innovative web app. Designed to empower students of all levels, our platform offers access to a professional chemistry tutor and comprehensive interactive quizzes to solidify your understanding of fundamental chemistry concepts.</p>
      </div>



      <div className='flex-column flexbasis-40vw'>
        <h1 id='about' className='title-box '>About Me</h1>
        <img className='about-img' src="./images/KLundell.jpg" />
        <div className='bg-decor'></div>
      </div>








    </div>
  )
}

export default About