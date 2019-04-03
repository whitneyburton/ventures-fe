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

  it('should return a type of UPDATE_USER with an array of festivals', () => {
    const mockUser = { name: 'Jane Doe', story: 'My story text' };
    const expected = {
      type: 'UPDATE_USER',
      user: mockUser
    };
    const result = actions.updateUser(mockUser);
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