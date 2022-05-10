import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ApexLogo from '../Images/Apex Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='Navbar' >
        <div className='NavbarConatiner'>
            <Link to="/" className="Home-logo">
                Apex Legends
                <img id = "NavBarHomeLogo" src = {ApexLogo} />
                <i className='ApexLogo'/>
            </Link>
            <div className='menu-icon'>
              
            </div>
        </div>
    </nav>
  )
}

export default Navbar