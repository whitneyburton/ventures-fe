import * as actions from './index';
import { mockData } from '../data/mockData';

describe('actions', () => {
  it('should return a type of SET_EVENTS with an array of festivals', () => {
    const mockEvents = mockData;
    const expected = {
      type: 'SET_EVENTS',
      mockEvents
    };
    const result = actions.setEvents(mockEvents);
    expect(result).toEqual(expected);
  });
});