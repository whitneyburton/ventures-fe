import React from 'react';
import { shallow } from 'enzyme';
import { EventCard } from '../components/EventCard/EventCard';
import { mockUser } from '../data/mockData';

const mockProps = {
  user: mockUser
}

describe('EventCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventCard {...mockProps} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})