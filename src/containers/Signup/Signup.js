import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../thunks/getUser';
import { getUserEvents } from '../../thunks/getUserEvents';
import { connect } from 'react-redux';

export const Signup = ({ getUser, getUserEvents, history }) => {
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [passwordConfirmation, updatePasswordConfirmation] = useState('');
  const [imgUrl, updateImgUrl] = useState('');
  const [bio, updateBio] = useState('');

  const handleSubmit = () => {
    // createUser() thunk that will POST this info
    getUser('1');
    getUserEvents('1');
    history.replace('/profile/upcoming');
  }

  return(
    <Fragment>
      <div className='overlay'></div>
      <form autoComplete='off' onSubmit={handleSubmit} className='Signup'>
        <button onClick={() => history.goBack()} className='close-pop-up'></button>
        <h3>Create an Account</h3>
        <label>First Name
              <input onChange={(e) => updateFirstName(e.target.value)} id='first-name' value={firstName} />
        </label>
        <label>Last Name
              <input onChange={(e) => updateLastName(e.target.value)} value={lastName} />
        </label>
        <label>Email
              <input onChange={(e) => updateEmail(e.target.value)} required type='email' id='email' value={email} />
        </label>
        <label>Password
              <input onChange={(e) => updatePassword(e.target.value)} required type='password' id='password' value={password} />
        </label>
        <label>Password Confirmation
              <input onChange={(e) => updatePasswordConfirmation(e.target.value)} required type='password' id='password' value={passwordConfirmation} />
        </label>
        <label>Write a short bio about yourself!
              <input className='bio-input' onChange={(e) => updateBio(e.target.value)} id='bio' value={bio} />
        </label>
        {/* <label>Upload a personal photo */}
              {/* <input onChange={(e) => updateImgUrl(e.target.value)} placeholder='Confirm password' id='password' value={passwordConfirmation} /> */}
        {/* </label> */}
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  getUserEvents: (id) => dispatch(getUserEvents(id))
});

export default connect(null, mapDispatchToProps)(Signup);