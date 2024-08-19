import React from 'react';
import { NavLink } from "react-router-dom";
import { home, wkey, akey, skey, dkey } from "../assets/images";


const Navbar = () => {
  return (
    <aside className='navbar'>
        <NavLink to='/' className='nav-logo'>
            <img src={home} alt='home' className='w-10 h-10 object-contain' />
        </NavLink>
        
        <div className='nav-group'>
            <NavLink to='/about' className='nav-links'>
                <img src={wkey} alt='wkey' className='w-full h-full object-cover' />
                <p className='nav-text'>About</p>
            </NavLink>
            
        </div>

        <div className='nav-group'>
            <NavLink to='/projects' className='nav-links'>
                <img src={akey} alt='akey' className='w-full h-full object-cover' />
                <p className='nav-text'>Projects</p>
            </NavLink>
            
        </div>

        <div className='nav-group'>
            <NavLink to='/programs' className='nav-links'>
                <img src={skey} alt='skey' className='w-full h-full object-cover' />
                <p className='nav-text'>Programs</p>
            </NavLink>
            
        </div>

        <div className='nav-group'>
            <NavLink to='/contact' className='nav-links'>
                <img src={dkey} alt='dkey' className='w-full h-full object-cover' />
                <p className='nav-text'>Contact</p>
            </NavLink>
            
        </div>
    </aside>
  )
}

export default Navbar
