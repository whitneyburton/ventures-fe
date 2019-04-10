import { searchReducer } from './searchReducer';
import * as actions from '../../actions';

describe('searchReducer', () => {
  it('should return the default state', () => {
    const result = searchReducer(undefined, {});
    expect(result).toEqual('');
  });

  it('should update state with search text', () => {
    const expected = 'search text';
    const result = searchReducer(undefined, actions.setSearchText(expected));
    expect(result).toEqual(expected);
  })
});