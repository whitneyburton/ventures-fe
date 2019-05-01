import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ user }) => {
  return (
    <div className='NavBar'>
      <NavLink to='/'><h2 className='ventures-title'>Ventures</h2></NavLink>
      <div className='subtitle'>
        <p className='ventures-slogan'>A place to find and track outdoor events that speak to you.</p>
        {user.name && <p className='user-name'>Welcome {user.name}!</p>}
      </div>
      <NavLink exact to='/' className='home-button' activeClassName='home-active' />
      <NavLink 
        to={user.name ? '/profile/upcoming' : '/login'}
        className='profile-button' 
        activeClassName='profile-active' />
    </div>
  )
}

export default NavBar;