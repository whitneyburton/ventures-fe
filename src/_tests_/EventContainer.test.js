import React from 'react';
import { shallow } from 'enzyme';
import { EventContainer, mapStateToProps } from '../containers/EventContainer/EventContainer';
import { mockEvents, mockUserEvents } from '../data/mockData';

const mockProps = {
  events: mockEvents.data,
  pathname: '/profile',
  searchText: '',
  userEvents: mockUserEvents,
};

describe('EventContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventContainer {...mockProps} />)
  });

  it('should match the snapshot for the /profile path', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for the /home path with no search text', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/home'} searchText={mockProps.searchText} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot for the /home path with search text', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/home'} searchText='sea' />)
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return a props object with events', () => {
      const mockState = {
        events: mockEvents,
        searchText: mockProps.searchText,
        userEvents: mockProps.mockUserEvents,
        isLoading: true,
        error: ''
      };
      const expectedState = {
        events: mockEvents,
        searchText: mockProps.searchText,
        userEvents: mockProps.mockUserEvents
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  })
})