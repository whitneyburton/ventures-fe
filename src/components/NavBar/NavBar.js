import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <h3 className='ventures-title'>VENTURES</h3>
      <p className='ventures-slogan'>A place to find and track outdoor events that speak to you.</p>
      <NavLink to='/' className='home-button' />
      <NavLink to='/profile/upcoming' className='profile-button' />
    </div>
  )
}

export default NavBar;