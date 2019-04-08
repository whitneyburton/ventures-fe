import React from 'react';
import { shallow } from 'enzyme';
import { Filters, mapStateToProps } from '../containers/Filters/Filters';
import { mockEvents } from '../data/mockData';

const mockProps = {
  events: mockEvents.data
};

describe('Filters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Filters {...mockProps} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with events', () => {
      const mockState = {
        events: mockEvents.data,
        isLoading: true
      };
      const expectedState = {
        events: mockEvents.data
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });
});