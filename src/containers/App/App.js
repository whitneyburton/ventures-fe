import React, { Fragment, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import EventContainer from '../EventContainer/EventContainer';
import Profile from '../Profile/Profile';
import EventPopUp from '../EventPopUp/EventPopUp';
import NavBar from '../../components/NavBar/NavBar';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from '../../thunks/getEvents';
import PropTypes from 'prop-types';

export const App = ({ getEvents, location, error, user, history }) => {
  useEffect(() => {
    getEvents();
  }, []);

  if (!error) {
    return (
      <div className='App'>
        <NavBar user={user}/>
        <Switch>
          <Route path='/profile' render={() => <Profile history={history} location={location}/>} />
          <Route
            path='/'
            render={() => (
              <Fragment>
                <div className='search-and-filters'>
                  <SearchBar />
                  <Filters />
                </div>
                <EventContainer pathname={location.pathname} />
              </Fragment>
            )}
          />
        </Switch>
        <Switch>
          <Route path='/login' render={() => <Login history={history} />} />
          <Route path='/sign-up' render={() => <Signup history={history} />} />
          <Route path='/event/:id' component={EventPopUp} />
          <Route path='/profile/upcoming/event/:id' component={EventPopUp} />
          <Route path='/profile/wishlist/event/:id' component={EventPopUp} />
          <Route path='/profile/past/event/:id' component={EventPopUp} />
        </Switch>
        
      </div>
    );
  } else {
    return (
      <div className='App'>
        <NavBar />
        <div className='error-message'>
          <h1>Sorry, there was an error. Please try again.</h1>
          <button
            className='back-button'
            onClick={() => window.location.reload()}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  error: state.error,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

App.propTypes = {
  error: PropTypes.string,
  getEvents: PropTypes.func
};
