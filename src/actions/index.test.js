import * as actions from './index';
import { mockData } from '../data/mockData';

describe('actions', () => {
  it('should return a type of SET_FESTIVALS with an array of festivals', () => {
    const mockFestivals = mockData.data;
    const expected = {
      type: 'SET_FESTIVALS',
      mockFestivals
    };
    const result = actions.setFestivals(mockFestivals);
    expect(result).toEqual(expected);
  });
});