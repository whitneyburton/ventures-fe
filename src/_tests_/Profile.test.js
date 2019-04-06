import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapDispatchToProps } from '../containers/Profile/Profile';
import { setUser } from '../actions';

const mockProps = {
  setUser: jest.fn()
};

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setUser action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setUser();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
