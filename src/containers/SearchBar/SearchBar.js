import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchIcon from '../../images/search.svg';

export const SearchBar = (props) => {
  const [searchQuery, updateSearchQuery] = useState('');

  return (
    <div className='SearchBar'>
      <h3 className='searchbar-title'>SEARCH EVENTS</h3>
      <div className='searchbar-container'>
        <img src={searchIcon} alt='search icon' className='searchbar-icon' />
        <input onChange={(e) => updateSearchQuery(e.target.value)} name='searchQuery' placeholder='Search all events' className='searchbar-input' value={searchQuery}/>
      </div>
    </div>
  );
}

export default SearchBar;
