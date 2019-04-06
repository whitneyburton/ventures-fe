import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EventContainer from '../EventContainer/EventContainer';
import { setUser } from '../../actions';
import { mockUser } from '../../data/mockData';

export const Profile = (props) => {
  const [contentEditable, toggleEditable] = useState(false);
  const buttonText = contentEditable ? 'Save' : 'Edit Profile';

  return (
    <div className="Profile">
      <div className="user-intro-section">
        <img
          src={mockUser.image_url}
          alt="user headshot"
          className="user-photo"
        />
        <h1 className="user-name" contentEditable={contentEditable}>{mockUser.name.toUpperCase()}</h1>
      </div>
      <div className="user-bio-section">
        <button
          onClick={() => toggleEditable(!contentEditable)}
          className="edit-profile-button"
        >
          {buttonText}
        </button>
        <p className="user-about-me">ABOUT ME</p>
        <p className="user-bio" contentEditable={contentEditable}>
          {mockUser.bio}
        </p>
      </div>
      <div className="view-tabs-section">
        <NavLink
          exact to='/profile/upcoming'
          className='upcoming-button'
          activeClassName='active'>
          Upcoming
        </NavLink>
        <NavLink
          exact to='/profile/wishlist'
          className='wishlist-button'
          activeClassName='active'>
          Wishlist
        </NavLink>
        <NavLink
          exact to='/profile/past'
          className='past-button'
          activeClassName='active'>
          Past
        </NavLink>
      </div>
      <EventContainer pathname={props.location.pathname}/>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  setUser: PropTypes.func
};
