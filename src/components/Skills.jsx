import React from 'react'
import './Skills.css'

function Skill(props) {
  return (

      <div className='skills-container'>
        <img className='logo'
          key={props.key}
          src={props.src}
          alt={props.alt} />

        <h3 className='logo-name'>{props.name}</h3>


      </div>

  )
}

export default Skill