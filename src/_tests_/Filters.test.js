import React from 'react';
import { shallow } from 'enzyme';
import { Filters, mapStateToProps, mapDispatchToProps, formatType } from '../containers/Filters/Filters';
import { mockEvents } from '../data/mockData';
import { getEvents } from '../thunks/getEvents';
jest.mock('../thunks/getEvents')

const mockProps = {
  events: mockEvents.data,
  getEvents,
};

describe('Filters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Filters {...mockProps} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('formatType', () => {
    it('should return items with an uppercase first letter', () => {
      const result = formatType('item');
      expect(result).toEqual('Item');
    });
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the getEvents thunk', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getEvents();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getEvents();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});