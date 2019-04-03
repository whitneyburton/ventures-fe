import { userReducer } from './userReducer'
import * as actions from '../../actions'

describe('userReducer', () => {
  it('should return the default state', () => {
    const result = userReducer(undefined, {})
    expect(result).toEqual({})
  });

  it('should return user object to set', () => {
    const expected = { name: 'Jane Doe', story: 'This is my story.'};
    const result = userReducer(undefined, actions.setUser(expected))
    expect(result).toEqual(expected)
  });

  it('should return user object to update', () => {
    const expected = { name: 'Jane Doe', story: 'This is my story.' };
    const result = userReducer(undefined, actions.updateUser(expected))
    expect(result).toEqual(expected)
  });
});