import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar', () => {
  let wrapper;
  let mockUser = {name: 'Wonder Woman', bio: 'bio here'}

  beforeEach(() => {
    wrapper = shallow(<NavBar pathname={'/'} user={mockUser}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});