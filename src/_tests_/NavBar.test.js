import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar pathname={'/'}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});