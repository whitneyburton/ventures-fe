import React from 'react';
import { shallow } from 'enzyme';
import EventCard from '../components/EventCard/EventCard';
import { mockEvents } from '../data/mockData';

const mockProps = {
  id: mockEvents.data[0].id,
  key: mockEvents.data[0].id,
  name: mockEvents.data[0].attributes.name,
  image: mockEvents.data[0].attributes.image_url,
  city: mockEvents.data[0].attributes.city,
  state: mockEvents.data[0].attributes.state,
  date: mockEvents.data[0].attributes.start_date,
  pathname: '/'
}

describe('EventCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventCard {...mockProps} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});