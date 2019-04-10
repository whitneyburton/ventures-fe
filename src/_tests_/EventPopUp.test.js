import React from 'react';
import { shallow } from 'enzyme';
import { EventPopUp, mapStateToProps, mapDispatchToProps } from '../containers/EventPopUp/EventPopUp';
import { mockUserEvents } from '../data/mockData';
import { getEvent } from '../thunks/getEvent';
import { changeUserEvent } from '../thunks/changeUserEvent';
import { getUserEvents } from '../thunks/getUserEvents';
jest.mock('../thunks/getEvent');
jest.mock('../thunks/changeUserEvent');
jest.mock('../thunks/getUserEvents');

const mockProps = {
  changeUserEvent,
  getUserEvents,
  getEvent,
  userEvents: mockUserEvents,
  match: { params: { id: '1' } },
  history: { goBack: jest.fn() }
}

describe('EventPopUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventPopUp {...mockProps} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with events', () => {
      const mockState = {
        userEvents: mockUserEvents,
        isLoading: true,
        error: ''
      };
      const expectedState = {
        userEvents: mockUserEvents
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the getEvent thunk', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getEvent('1');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getEvent('1');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with the changeUserEvent thunk', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = changeUserEvent('1', 'POST', 'attending');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.changeUserEvent('1', 'POST', 'attending');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with the getUserEvents thunk', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getUserEvents('1');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getUserEvents('1');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});