import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='container-100vh-100vw' style={{ position: 'relative', zIndex: 1,}} >



      <div className='about-flex-column flexbasis-60vw about-details' >

        <p className='about-desc'>I am Katie Lundell, a computational chemist turned full-stack web developer. With a Ph.D. in Computational Chemistry, I bring a strong foundation in scientific problem-solving to the world of web development.</p>
        <p className='about-desc'>I am passionate about creating innovative and user-friendly web applications, particularly in the fields of weather, food science, and STEM education. I am eager to collaborate with STEM educators and businesses seeking a skilled web developer.</p>
      </div>



      <div className='about-flex-column flexbasis-30vw'>
        <h1 id='about' className='title-box '>About Me</h1>
        <img className='about-img' src="./images/KLundell-cropped.jpg" />
        <div className='bg-decor'></div>
      </div>








    </div>
  )
}

export default About