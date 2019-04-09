import { getUserEvents } from '../getUserEvents';
import { setUserEvents, setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('getUserEvents', () => {
  let mockDispatch;
  let mockUserId;
  let mockUserEvents;

  beforeEach(() => {
    mockUserEvents = [{ id: '1', type: 'my_event', attributes: {}}];
    mockUserId = '1';
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = getUserEvents(mockUserId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getUserEvents(mockUserId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/users/${mockUserId}/events`, 'GET');
  });

  it('should dispatch setUserEvents with the events', async () => {
    const userEvents = { data: { attributes: mockUserEvents } };
    fetchData.mockReturnValue(userEvents);
    const thunk = getUserEvents(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setUserEvents(userEvents.data))
  });

  it('should call dispatch with the setLoading action', async () => {
    const userEvents = { data: { attributes: mockUserEvents } };
    fetchData.mockReturnValue(userEvents);
    const thunk = getUserEvents(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.' }
    })
    const thunk = getUserEvents(mockUserId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'));
  })
});