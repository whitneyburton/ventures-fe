import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EventContainer from '../EventContainer/EventContainer';
import { updateUser } from '../../thunks/updateUser';
import { setUser, setUserEvents } from '../../actions';

export const Profile = ({ location, user, updateUser, setUser, setUserEvents, history }) => {
  if (user.name) {
    const [contentEditable, toggleEditable] = useState(false);
    const [name, editName] = useState(user.name);
    const [bio, editBio] = useState(user.bio);
    const buttonText = contentEditable ? 'Save' : 'Edit Profile';

    const saveUser = () => {
      toggleEditable(!contentEditable);
      contentEditable && updateUser({ name, bio });
    };

    const logoutUser = () => {
      setUser({});
      setUserEvents([]);
      history.replace('/');
    }

    return (
      <div className='Profile'>
        <div className='user-profile'>
          <img
            src={user.image_url}
            alt='user headshot'
            className='user-photo'
          />
          <div className='user-bio-section'>
            <div className='bio-header'>
              {!contentEditable ? (
                <h1 className='user-name'>{name.toUpperCase()}</h1>
              ) : (
                <input
                  className='edit-name-input'
                  value={name.toUpperCase()}
                  onChange={e => editName(e.target.value)}
                />
              )}
              <button
                onClick={() => saveUser()}
                className='edit-profile-button'
              >
                {buttonText}
              </button>
              <button
                onClick={() => logoutUser()}
                className='edit-profile-button'
              >
                Logout
              </button>
            </div>
            <p className='user-about-me'>ABOUT ME</p>
            {!contentEditable ? (
              <p className='user-bio'>{bio}</p>
            ) : (
              <textarea
                className='edit-bio-input'
                value={bio}
                onChange={e => editBio(e.target.value)}
              ></textarea>
            )}
          </div>
        </div>
        <div className='view-tabs-section'>
          <NavLink
            exact
            to='/profile/upcoming'
            className='upcoming-button'
            activeClassName='active'
          >
            Upcoming
          </NavLink>
          <NavLink
            exact
            to='/profile/wishlist'
            className='wishlist-button'
            activeClassName='active'
          >
            Wishlist
          </NavLink>
          <NavLink
            exact
            to='/profile/past'
            className='past-button'
            activeClassName='active'
          >
            Past
          </NavLink>
        </div>
        <EventContainer pathname={location.pathname} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  setUser: user => dispatch(setUser(user)),
  setUserEvents: events => dispatch(setUserEvents(events))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

Profile.propTypes = {
  user: PropTypes.object
};
