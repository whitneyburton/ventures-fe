import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../thunks/getUser';
import { getUserEvents } from '../../thunks/getUserEvents';
import { connect } from 'react-redux';

export const Login = ({ getUser, getUserEvents, history }) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const handleSubmit = () => {
    getUser('1');
    getUserEvents('1');
    history.replace('/profile/upcoming');
  }

  return(
    <Fragment>
      <div className='overlay'></div>
      <form autoComplete='off' onSubmit={handleSubmit} className='Login'>
        <button onClick={() => history.goBack()} className='close-pop-up'></button>
        <h3>User Login</h3>
        <label>Email
              <input onChange={(e) => updateEmail(e.target.value)} required type='email' placeholder='Enter your email' id='email' value={email} />
        </label>
        <label>Password
              <input onChange={(e) => updatePassword(e.target.value)} required type='password' placeholder='Enter your password' id='password' value={password} />
        </label>
        <button type='submit'>Submit</button>
        <Link className='pop-up-link' to='/sign-up'>Sign Up Here</Link>
      </form>
    </Fragment>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  getUserEvents: (id) => dispatch(getUserEvents(id))
});

export default connect(null, mapDispatchToProps)(Login);