import { wishlistReducer } from './wishlistReducer'
import * as actions from '../../actions'

describe('wishlistReducer', () => {
  it('should return the default state', () => {
    const result = wishlistReducer(undefined, {})
    expect(result).toEqual([])
  });

  it('should return an array of events to set', () => {
    const expected = [1, 2, 3];
    const result = wishlistReducer(undefined, actions.setWishlist(expected))
    expect(result).toEqual(expected)
  });

  it('should return an array with a new event', () => {
    const newId = 3;
    const expected = [1, 2, 3];
    const result = wishlistReducer([1, 2], actions.addToWishlist(newId))
    expect(result).toEqual(expected)
  });

  it('should return an array and remove an event', () => {
    const removeId = 3;
    const expected = [1, 2];
    const result = wishlistReducer([1, 2, 3], actions.removeFromWishlist(removeId))
    expect(result).toEqual(expected)
  });
});