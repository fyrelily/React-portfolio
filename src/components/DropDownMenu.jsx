import React from 'react'
import {animated} from "@react-spring/web"
import "./DropDownMenu.css"


function DropDownMenu(props) {
  return (
    <animated.div style={props.style}
      className="menu-wrapper">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#toolkit">My Toolkit</a>
                <a href="#toolkit">Contact</a>
    </animated.div>
  )
}

export default DropDownMenu