import * as actions from './index';
import { mockData } from '../data/mockData';

describe('actions', () => {
  it('should return a type of SET_EVENTS with an array of festivals', () => {
    const mockEvents = mockData;
    const expected = {
      type: 'SET_EVENTS',
      events: mockEvents
    };
    const result = actions.setEvents(mockEvents);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_USER with an array of festivals', () => {
    const mockUser = { name: 'Jane Doe', story: 'My story text'};
    const expected = {
      type: 'SET_USER',
      user: mockUser
    };
    const result = actions.setUser(mockUser);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_WISHLIST with an array of festival ids', () => {
    const mockData = [1, 2, 3];
    const expected = {
      type: 'SET_WISHLIST',
      wishlist: mockData
    };
    const result = actions.setWishlist(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_TO_WISHLIST with a festival id', () => {
    const mockData = 4;
    const expected = {
      type: 'ADD_TO_WISHLIST',
      eventId: mockData
    };
    const result = actions.addToWishlist(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of REMOVE_FROM_WISHLIST with a festival id', () => {
    const mockData = 1;
    const expected = {
      type: 'REMOVE_FROM_WISHLIST',
      eventId: mockData
    };
    const result = actions.removeFromWishlist(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_TO_ATTENDING with a festival id', () => {
    const mockData = 4;
    const expected = {
      type: 'ADD_TO_ATTENDING',
      eventId: mockData
    };
    const result = actions.addToAttending(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of REMOVE_FROM_ATTENDING with a festival id', () => {
    const mockData = 1;
    const expected = {
      type: 'REMOVE_FROM_ATTENDING',
      eventId: mockData
    };
    const result = actions.removeFromAttending(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ATTENDING with an array of festival ids', () => {
    const mockData = [1, 2, 3];
    const expected = {
      type: 'SET_ATTENDING',
      attending: mockData
    };
    const result = actions.setAttending(mockData);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_LOADING with a boolean', () => {
    const mockLoading = true;
    const expected = {
      type: 'SET_LOADING',
      loading: mockLoading
    };
    const result = actions.setLoading(mockLoading);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR with an error message', () => {
    const mockError = 'Error message';
    const expected = {
      type: 'SET_ERROR',
      error: mockError
    };
    const result = actions.setError(mockError);
    expect(result).toEqual(expected);
  });
});