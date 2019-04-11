import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps, mapDispatchToProps } from '../containers/Profile/Profile';
import { updateUser } from '../thunks/updateUser';
import { mockUser } from '../data/mockData';
jest.mock('../thunks/updateUser');

const mockProps = {
  updateUser: jest.fn(),
  user: mockUser,
  location: { pathname: '/profile' }
};

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for loading', () => {
    const mockProps = {
      updateUser: jest.fn(),
      user: {},
      location: { pathname: '/profile' }
    };
    wrapper = shallow(<Profile {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with events', () => {
      const mockState = {
        user: { name: 'Wonderwoman', bio: 'About me'},
        isLoading: true,
        error: ''
      };
      const expectedState = {
        user: { name: 'Wonderwoman', bio: 'About me' },
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the updateUser action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateUser();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
