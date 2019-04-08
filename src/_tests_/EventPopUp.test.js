import React from 'react';
import { shallow } from 'enzyme';
import { EventPopUp, mapDispatchToProps } from '../containers/EventPopUp/EventPopUp';
import { getEvent } from '../thunks/getEvent';
jest.mock('../thunks/getEvent');

const mockProps = {
  getEvent,
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the getEvent thunk', async () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getEvent('1');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getEvent('1');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});