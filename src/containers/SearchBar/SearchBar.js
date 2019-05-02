import React from 'react';
import searchIcon from '../../images/search.svg';
import { setSearchText } from '../../actions';
import { connect } from 'react-redux';

export const SearchBar = ({ setSearchText, searchText}) => {
  return (
    <div className='SearchBar'>
      <h3 className='searchbar-title'>SEARCH EVENTS</h3>
      <div className='searchbar-container'>
        <img src={searchIcon} alt='search icon' className='searchbar-icon' />
        <input autocomplete='off' onChange={(e) => setSearchText(e.target.value)} name='searchQuery' placeholder='Search all events' className='searchbar-input' value={searchText}/>
      </div>
    </div>
  );
} 

export const mapStateToProps = (state) => ({
  searchText: state.searchText,
});

export const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(setSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
