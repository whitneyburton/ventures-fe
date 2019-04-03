import { attendingReducer } from './attendingReducer'
import * as actions from '../../actions'

describe('wishlistReducer', () => {
  it('should return the default state', () => {
    const result = attendingReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = [1, 2, 3];
    const result = attendingReducer(undefined, actions.setAttending(expected))
    expect(result).toEqual(expected)
  })
});