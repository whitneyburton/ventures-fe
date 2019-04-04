import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchIcon from '../../images/search.svg';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='SearchBar'>
        <h3 className='searchbar-title'>SEARCH EVENTS</h3>
        <div className='searchbar-container'>
          <img src={searchIcon} alt='search icon' className='searchbar-icon' />
          <input onChange={this.handleChange} name='searchQuery' placeholder='Search all events' className='searchbar-input' />
        </div>
      </div>
    );
  }
}
