import { getUser } from '../getUser';
import { setUser, setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('getUser', () => {
  let mockDispatch;
  let mockUserId;
  let mockUser;

  beforeEach(() => {
    mockUser = { name: 'Wonderwoman', bio: 'About me.' };
    mockUserId = 1;
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = getUser(mockUserId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getUser(mockUserId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/users/${mockUserId}`, 'GET');
  });

  it('should dispatch setUser with the updated user', async () => {
    const updatedUser = { data: { attributes: mockUser } };
    fetchData.mockReturnValue(updatedUser);
    const thunk = getUser(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setUser(updatedUser.data.attributes))
  });

  it('should call dispatch with the setLoading action', async () => {
    const updatedUser = { data: { attributes: mockUser } };
    fetchData.mockReturnValue(updatedUser);
    const thunk = getUser(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.' }
    })
    const thunk = getUser(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'));
  });
});