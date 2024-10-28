import React from 'react'
import './Toolkit.css'
import Skills from './Skills'


const logos = [
    { name: "JQuery", src: "./images/jquery-logo.svg", alt: "" },
    { name: "React", src: "./images/react-logo.svg", alt: "" },
    { name: "CSS", src: "./images/css-logo.svg", alt: "" },
    { name: "HTML5", src: "./images/html5-logo.svg", alt: "" },
    { name: "JavaScript", src: "./images/js-logo.svg", alt: "" },
    { name: "PostgreSQL", src: "./images/postgres-logo.svg", alt: "" },
    { name: "Git", src: "./images/git-logo-2.svg", alt: "" },
    { name: "Gaussian", src: "./images/gaussian-logo.svg", alt: "" },]


function Toolkit() {



    function createSkill(skill) {
        return (
            <Skills
                key={skill.index}
                name={skill.name}
                src={skill.src}
                alt={skill.alt}
            />
        )
    }

    return (
        <div className='container-100vh-100vw' style={{ position: 'relative', zIndex: 1, }} >

            <h1 id='toolkit' className='title-box '>My Toolkit</h1>


            <div className='toolkit-row'  >

                {logos.map(createSkill)}

            </div>

        </div>

    )
}

export default Toolkit