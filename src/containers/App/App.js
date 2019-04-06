import React, { Fragment, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import EventContainer from '../EventContainer/EventContainer';
import Profile from '../Profile/Profile';
import EventPopUp from '../EventPopUp/EventPopUp';
import NavBar from '../../components/NavBar/NavBar';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from '../../thunks/getEvents';

export const App = ({ getEvents, location }) => {

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={(props) => 
        <Fragment>
          <div className='search-and-filters'>
            <SearchBar />
            <Filters />
          </div>
          <EventContainer pathname={props.location.pathname} />
        </Fragment>
      } />
      <Route path='/profile' component={Profile} />
      <Route path='/event/:id' component={EventPopUp} />
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(getEvents())
});

export default withRouter(connect(null, mapDispatchToProps)(App));