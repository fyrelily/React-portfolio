import React, {useState, useEffect}  from 'react'
import { RiMenuFill } from "react-icons/ri";
import "./TopNav.css"
import { useSpring } from '@react-spring/web';
import DropDownMenu from './DropDownMenu';


function TopNav() {
  
  const useScreenSize = () => {
    const[screenSize, setScreenSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
   

  useEffect(()=> {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize); 

    //Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return screenSize;
}

const screenSize = useScreenSize();

console.log(screenSize)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useSpring(
    screenSize.width > 800? {
    transform: isMenuOpen ?
     `translate3d(45%, 0, 0)`:
      `translate3d(100%, 0, 0)`
  }: {
    transform: isMenuOpen ?
    `translate3d(0%, 0, 0)`:
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