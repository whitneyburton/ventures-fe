import React, { Fragment, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import EventContainer from '../EventContainer/EventContainer';
import Profile from '../Profile/Profile';
import EventPopUp from '../EventPopUp/EventPopUp';
import NavBar from '../../components/NavBar/NavBar';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from '../../thunks/getEvents';
import { getUser } from '../../thunks/getUser';

export const App = ({ getEvents, getUser, location }) => {
  useEffect(() => {
    getUser('1');
    getEvents();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route
          path="/"
          render={() => (
            <Fragment>
              <div className="search-and-filters">
                <SearchBar />
                <Filters />
              </div>
              <EventContainer pathname={location.pathname} />
            </Fragment>
          )}
        />
      </Switch>
      <Switch>
        <Route path="/event/:id" component={EventPopUp} />
        <Route path="/profile/event/:id" component={EventPopUp} />
      </Switch>
    </div>
  );
};

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getUser: id => dispatch(getUser(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
