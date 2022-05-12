import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ApexLogo from '../Images/apex-legends-logo-white.png';
import hamburgerMenuIcon from '../Images/Hamburger Menu icon.png';
import xIcon from '../Images/X icon.png';
import './Navbar.css';
import { Button } from './Button.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className='Navbar' >
        <div className='NavbarConatiner'>
            <Link to="/" className="Home-logo">
                Apex Legends
                <img id = "NavBarHomeLogo" src = {ApexLogo} />
                <i className='ApexLogo'/>
            </Link>
            <div className='menu-icon' onClick = {handleClick}>
              <img src = {click ? hamburgerMenuIcon : xIcon} />
            </div>
            <ul className = {click ? 'nav-menu on' : 'nav-menu hidden'}>
              <li className='nav-items'>
                <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-items'>
                <Link to = '/about' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className='nav-items'>
                <Link to = '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle = 'buttonOutline'>SIGN UP</Button>}
        </div>
    </nav>
  )
}

export default Navbar