import React from 'react';
import { shallow } from 'enzyme';
import EventCard from '../components/EventCard/EventCard';
import { mockEvents } from '../data/mockData';


describe('EventCard', () => {
  
  it('should match the snapshot from the home path', () => {
    const mockProps = {
      id: mockEvents.data[0].id,
      key: mockEvents.data[0].id,
      name: mockEvents.data[0].attributes.name,
      image: mockEvents.data[0].attributes.image_url,
      city: mockEvents.data[0].attributes.city,
      state: mockEvents.data[0].attributes.state,
      date: mockEvents.data[0].attributes.start_date,
      pathname: '/'
    };
    const wrapper = shallow(<EventCard {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot from the profile path', () => {
    const mockProps = {
      id: mockEvents.data[0].id,
      key: mockEvents.data[0].id,
      name: mockEvents.data[0].attributes.name,
      image: mockEvents.data[0].attributes.image_url,
      city: mockEvents.data[0].attributes.city,
      state: mockEvents.data[0].attributes.state,
      date: mockEvents.data[0].attributes.start_date,
      pathname: '/profile'
    };
    const wrapper = shallow(<EventCard {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});