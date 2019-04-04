import { eventsReducer } from './eventsReducer'
import * as actions from '../../actions'
import { mockEvents } from '../../data/mockData'

describe('eventsReducer', () => {
  it('should return the default state', () => {
    const result = eventsReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = mockEvents.data;
    const result = eventsReducer(undefined, actions.setEvents(expected))
    expect(result).toEqual(expected)
  })
});