import React, { Component, Fragment } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';
import EventContainer from '../EventContainer/EventContainer';
import Profile from '../Profile/Profile'
import NavBar from '../../components/NavBar/NavBar';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
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
}

const mapDispatchToProps = ({

})

export default withRouter(connect(null, mapDispatchToProps)(App));