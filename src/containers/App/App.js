import React, { Fragment, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import EventContainer from '../EventContainer/EventContainer';
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export const App = (props) => {

  useEffect(() => {
    
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
    </div>
  );
}

const mapDispatchToProps = ({

})

export default withRouter(connect(null, mapDispatchToProps)(App));