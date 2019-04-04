import { loadingReducer } from './loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(false);
  });

  it('should set loading to false', () => {
    const expected = true;
    const result = loadingReducer(undefined, actions.setLoading(expected));
    expect(result).toEqual(expected);
  })
});