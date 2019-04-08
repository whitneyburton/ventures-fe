import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../containers/SearchBar/SearchBar';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});