import React from 'react'
import "./Projects.css"

function Projects() {
  return (
    <div className='container-100vh-100vw' style={{position:'relative',zIndex:1, }} >


      <div className='flex-column flexbasis-50vw'>
        <h1 id="projects" className='title-box '>Projects</h1>
        <img className='STEM-img' src="./images/STEM-mockup.png" />
          <div className='bg-decor'></div>
      </div>

        <div className='project-flex-column flexbasis-40vw project-details' style={{position:"relative"}}>
          <h2 className='project-name'>Chemistry Tutoring Web App</h2>
          <p className='project-desc'>Elevate your chemistry studies with our innovative web app. Designed to empower students of all levels, our platform offers access to a professional chemistry tutor and comprehensive interactive quizzes to solidify your understanding of fundamental chemistry concepts.</p>
          <div className='postgres-logo logo-container'>
            <img className='logo' src='./images/postgres-logo.svg'/>
            <h3 className='logo-name'>PostgreSQL</h3>
          </div>
          <div className='react-logo logo-container'>
            <img className='logo' src='./images/react-logo.svg'/>
            <h3 className='logo-name'>React</h3>
          </div>
        </div>








    </div>
  )
}

export default Projects