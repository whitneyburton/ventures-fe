import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavLink to='/'><h2 className='ventures-title'>Ventures</h2></NavLink>
      <NavLink to='/' className='home-button' />
      <NavLink to='/profile' className='profile-button' />
    </div>
  )
}

export default NavBar;