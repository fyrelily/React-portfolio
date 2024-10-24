import React from 'react'
import {animated} from "@react-spring/web"
import "./DropDownMenu.css"


function DropDownMenu(props) {
  return (
    <animated.div style={props.style}
      className="menu-wrapper">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
    </animated.div>
  )
}

export default DropDownMenu