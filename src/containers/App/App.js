import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Filters } from '../Filters/Filters';
import { EventContainer } from '../EventContainer/EventContainer';
import { NavBar } from '../../components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <Filters />
        <EventContainer />
      </div>
    );
  }
}

export default App;