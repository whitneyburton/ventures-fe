import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventContainer from '../EventContainer/EventContainer';
import { setUser } from '../../actions';
import { mockUser } from '../../data/mockData';

export const Profile = () => {
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
        <h1 className="user-name">{mockUser.name.toUpperCase()}</h1>
      </div>
      <div className="user-bio-section">
        <p className="user-about-me">About Me</p>
        <button
          onClick={() => toggleEditable(!contentEditable)}
          className="edit-profile-button"
        >
          {buttonText}
        </button>
        <p className="user-bio" contentEditable={contentEditable}>
          {mockUser.bio}
        </p>
      </div>
      <div className="view-tabs-section">
        <button className="upcoming-button">Upcoming</button>
        <button className="wishlist-button">Wishlist</button>
        <button className="past-button">Past</button>
      </div>
      <EventContainer />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  setUser: PropTypes.func
};
