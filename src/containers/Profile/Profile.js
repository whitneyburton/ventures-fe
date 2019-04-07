import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EventContainer from '../EventContainer/EventContainer';
import { setUser } from '../../actions';

export const Profile = ({ location, user }) => {
  const [contentEditable, toggleEditable] = useState(false);
  const buttonText = contentEditable ? 'Save' : 'Edit Profile';

  if (user.name) {
    return (
      <div className="Profile">
        <div className="user-profile">
          <img src={user.image_url} alt="user headshot" className="user-photo" />
          <div className="user-bio-section">
            <div className="bio-header">
              <h1 className="user-name" contentEditable={contentEditable}>
                {user.name.toUpperCase()}
              </h1>
              <button
                onClick={() => toggleEditable(!contentEditable)}
                className="edit-profile-button"
              >
                {buttonText}
              </button>
            </div>
            <p className="user-about-me">ABOUT ME</p>
            <p className="user-bio" contentEditable={contentEditable}>
              {user.bio}
            </p>
          </div>
        </div>
        <div className="view-tabs-section">
          <NavLink
            exact
            to="/profile/upcoming"
            className="upcoming-button"
            activeClassName="active"
          >
            Upcoming
          </NavLink>
          <NavLink
            exact
            to="/profile/wishlist"
            className="wishlist-button"
            activeClassName="active"
          >
            Wishlist
          </NavLink>
          <NavLink
            exact
            to="/profile/past"
            className="past-button"
            activeClassName="active"
          >
            Past
          </NavLink>
        </div>
        <EventContainer pathname={location.pathname} />
      </div>
    );
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  setUser: PropTypes.func
};
