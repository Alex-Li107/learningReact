import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ApexLogo from '../Images/Apex Logo.png';

function navbar() {
  return (
    <nav className='navbar' >
        <div className='navbarConatiner'>
            <Link to="/" className="navbar-logo">
                Apex Legends
            </Link>
        </div>
    </nav>
  )
}

export default navbar