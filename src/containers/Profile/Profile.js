import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EventContainer from '../EventContainer/EventContainer';
import { setUser } from '../../actions';
import { updateUser } from '../../thunks/updateUser';

export const Profile = ({ location, user, updateUser }) => {
  if (user.name) {
    const [contentEditable, toggleEditable] = useState(false);
    const [name, editName] = useState(user.name);
    const [bio, editBio] = useState(user.bio);
    const buttonText = contentEditable ? 'Save' : 'Edit Profile';

    const saveUser = () => {
      toggleEditable(!contentEditable);
      contentEditable && updateUser({ name, bio });
    };

    return (
      <div className="Profile">
        <div className="user-profile">
          <img
            src={user.image_url}
            alt="user headshot"
            className="user-photo"
          />
          <div className="user-bio-section">
            <div className="bio-header">
              {!contentEditable && (
                <h1 className="user-name">{name.toUpperCase()}</h1>
              )}
              {contentEditable && (
                <input className='edit-name-input' value={name.toUpperCase()} onChange={e => editName(e.target.value)} />
              )}
              <button
                onClick={() => saveUser()}
                className="edit-profile-button"
              >
                {buttonText}
              </button>
            </div>
            <p className="user-about-me">ABOUT ME</p>
            {!contentEditable && <p className="user-bio">{bio}</p>}
            {contentEditable && (
              <input className='edit-bio-input' value={bio} onChange={e => editBio(e.target.value)} />
            )}
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
    return <h1>Loading...</h1>;
  }
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  setUser: PropTypes.func,
  user: PropTypes.object
};
