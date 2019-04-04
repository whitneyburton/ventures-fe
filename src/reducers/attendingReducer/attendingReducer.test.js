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
  });

  it('should return an array with a new event', () => {
    const newId = 3;
    const expected = [1, 2, 3];
    const result = attendingReducer([1, 2], actions.addToAttending(newId))
    expect(result).toEqual(expected)
  });

  it('should return an array and remove an event', () => {
    const removeId = 3;
    const expected = [1, 2];
    const result = attendingReducer([1, 2, 3], actions.removeFromAttending(removeId))
    expect(result).toEqual(expected)
  });
});