import React, { useEffect } from 'react';
import { App, mapStateToProps, mapDispatchToProps } from '../containers/App/App';
import { shallow } from 'enzyme';
import { getUser } from '../thunks/getUser';
import { getEvents } from '../thunks/getEvents';
jest.mock('../thunks/getUser');
jest.mock('../thunks/getEvents');

describe('App', () => {
  let wrapper;
  let mockError;
  let mockLocation;

  beforeEach(() => {
    mockError = '';
    mockLocation = { pathname: '/' };

    wrapper = shallow(
      <App
        getEvents={getEvents}
        getUser={getUser}
        error={mockError}
        location={mockLocation}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object of props', () => {
      const mockState = {
        error: 'Error message',
        otherState: false,
      };
      const expected = {
        error: 'Error message',
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when getEvents is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getEvents();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getEvents();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when getUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getUser();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});