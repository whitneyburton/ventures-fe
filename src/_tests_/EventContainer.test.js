import React from 'react';
import { shallow } from 'enzyme';
import { EventContainer, mapStateToProps, filterEvents, filterUserEvents, filterEventsByDate } from '../containers/EventContainer/EventContainer';
import { mockEvents, mockUserEvents } from '../data/mockData';

const mockProps = {
  events: mockEvents.data,
  pathname: '/profile/upcoming',
  searchText: '',
  userEvents: mockUserEvents,
};

describe('EventContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventContainer {...mockProps} />)
  });

  it('should match the snapshot for the /profile/upcoming path', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for the /profile/wishlist path', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/profile/wishlist'} searchText={mockProps.searchText} userEvents={mockProps.userEvents}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for the /profile/past path', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/profile/past'} searchText={mockProps.searchText} userEvents={mockProps.userEvents}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for the /profile path', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for the /home path with no search text', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/home'} searchText={mockProps.searchText} userEvents={mockProps.userEvents}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot for the /home path with search text', () => {
    wrapper = shallow(<EventContainer events={mockEvents.data} pathname={'/home'} searchText='sea' />)
    expect(wrapper).toMatchSnapshot()
  });

  describe('filterEvents', () => {
    it('should return filtered events', () => {
      const expected = [
        {
          id: "6",
          type: "event",
          attributes: {
            name: "Leavenworth Rock Fest",
            city: "Canon Springs",
            state: "CO",
            event_type: "climbing",
            price: 35,
            start_date: "10-19-2018",
            end_date: "10-21-2018",
            description:
              "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
            event_url: "https://americanalpineclub.org/shelf-road-cc",
            image_url:
              "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
            video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo"
          }
        }
      ];
      const result = filterEvents(mockProps.events, 'leavenworth');
      expect(result).toEqual(expected);
    });
  });

  describe('filterUserEvents', () => {
    it('should return filtered events', () => {
      const expected = [
        {
          id: "6",
          type: "event",
          attributes: {
            name: "Leavenworth Rock Fest",
            city: "Canon Springs",
            state: "CO",
            event_type: "climbing",
            price: 35,
            start_date: "10-19-2018",
            end_date: "10-21-2018",
            description:
              "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
            event_url: "https://americanalpineclub.org/shelf-road-cc",
            image_url:
              "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
            video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo",
            status: "attending"
          }
        }
      ];
      const result = filterUserEvents(mockProps.userEvents, 'attending');
      expect(result).toEqual(expected);
    });
  });

  describe('filterEventsByDate', () => {
    it('should return filtered events', () => {
      const expected = [
        {
          id: "6",
          type: "event",
          attributes: {
            name: "Leavenworth Rock Fest",
            city: "Canon Springs",
            state: "CO",
            event_type: "climbing",
            price: 35,
            start_date: "10-19-2018",
            end_date: "10-21-2018",
            description:
              "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
            event_url: "https://americanalpineclub.org/shelf-road-cc",
            image_url:
              "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
            video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo",
            status: "attending"
          }
        }
      ];
      const result = filterEventsByDate(mockProps.userEvents, false);
      expect(result).toEqual(expected);
    });
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