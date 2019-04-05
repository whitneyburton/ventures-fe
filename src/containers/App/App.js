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

export const App = ({ getEvents }) => {

  useEffect(() => {
    getEvents();
  })

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={() => 
        <Fragment>
          <SearchBar />
          <Filters />
          <EventContainer />
        </Fragment>
      } />
      <Route path='/profile' component={Profile} />
      <Route path='/event/:id' render={({ match }) => {
        const { id } = match.params;
        return <EventPopUp id={id} />
      }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => dispatch(getEvents())
});

export default withRouter(connect(null, mapDispatchToProps)(App));