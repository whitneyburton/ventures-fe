import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps, mapDispatchToProps } from '../containers/SearchBar/SearchBar';
import { setSearchText } from '../actions';

describe('SearchBar', () => {
  let wrapper;
  let setSearchTextMock;
  let searchTextMock;

  beforeEach(() => {
    setSearchTextMock = jest.fn();
    searchTextMock = 'search text';
    wrapper = shallow(
      <SearchBar 
        setSearchText={setSearchTextMock}
        searchText={searchTextMock}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call setSearchText onChange', () => {
    const e = { target: { value: '' } };
    wrapper.find('input').simulate('change');
    expect(wrapper.instance().props.setSearchText).toHaveBeenCalled();
  });


  describe('mapStateToProps', () => {
    it('should return a props object with events', () => {
      const mockState = {
        searchText: 'search text',
        isLoading: true,
        error: ''
      };
      const expectedState = {
        searchText: 'search text',
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setSearchText action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setSearchText();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setSearchText();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});