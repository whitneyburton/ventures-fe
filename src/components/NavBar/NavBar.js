import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <h3 className='ventures-title'>VENTURES</h3>
      <NavLink to='/' className='home-button' />
      <NavLink to='/profile' className='profile-button' />
    </div>
  )
}

export default NavBar;