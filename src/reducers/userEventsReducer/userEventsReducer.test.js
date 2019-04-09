import { userEventsReducer } from './userEventsReducer';
import * as actions from '../../actions';

describe('userEventsReducer', () => {
  it('should return the default state', () => {
    const result = userEventsReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = [1, 2, 3];
    const result = userEventsReducer(undefined, actions.setUserEvents(expected))
    expect(result).toEqual(expected)
  });
});