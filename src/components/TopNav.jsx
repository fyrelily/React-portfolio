import React, {useState}  from 'react'
import { RiMenuFill } from "react-icons/ri";
import "./TopNav.css"
import { useSpring } from '@react-spring/web';
import DropDownMenu from './DropDownMenu';


function TopNav() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useSpring({
    transform: isMenuOpen ?
     `translate3d(45%, 0, 0)`:
      `translate3d(100%, 0, 0)`
  })
  
  
    return (
    <button  className="menu-button" style={{color: isMenuOpen && '#efefef'}}
    onClick={()=>{setIsMenuOpen(!isMenuOpen), console.log(isMenuOpen)}} 
    ><RiMenuFill/>
    <DropDownMenu style={menuAnimation} />
    
    </button>
  )
}

export default TopNav