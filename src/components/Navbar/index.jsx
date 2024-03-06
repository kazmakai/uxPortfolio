import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink className='home-sections' to="/#works"><h4>Works</h4></NavLink>
            <NavLink className='home-sections' to="/#about"><h4>About</h4></NavLink>
            <NavLink className='home-sections' to="/" activeClassName="active"><img src="src/assets/images/logo-white.svg" /></NavLink>
            <NavLink className='home-sections' to="/#contact"><h4>Contact</h4></NavLink>
            <a href="public/assets/files/resume 2024.pdf" target="_blank" className='home-sections'><h4>Resume&darr;</h4></a>
        </nav>
    </header>
  );
}

export default Navbar;