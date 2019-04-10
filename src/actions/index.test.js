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

  it('should return a type of SET_USER_EVENTS with an array of events', () => {
    const mockData = [1, 2, 3];
    const expected = {
      type: 'SET_USER_EVENTS',
      events: mockData
    };
    const result = actions.setUserEvents(mockData);
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

  it('should return a type of SET_SEARCH_TEXT with text', () => {
    const mockText = 'Search text';
    const expected = {
      type: 'SET_SEARCH_TEXT',
      searchText: mockText
    };
    const result = actions.setSearchText(mockText);
    expect(result).toEqual(expected);
  });
});