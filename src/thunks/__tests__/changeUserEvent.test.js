import { changeUserEvent } from '../changeUserEvent';
import { setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('changeUserEvent', () => {
  let mockDispatch;
  let mockEventId;
  let mockMethod;
  let mockStatus;

  beforeEach(() => {
    mockStatus = 'attending';
    mockMethod = 'POST';
    mockEventId = 5;
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = changeUserEvent(mockEventId, mockMethod, mockStatus);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters for a POST request', async () => {
    const thunk = changeUserEvent(mockEventId, mockMethod, mockStatus);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/users/1/events/${mockEventId}?status=${mockStatus}`, mockMethod);
  });

  it('should call fetchData with the correct parameters for a PUT request', async () => {
    mockMethod = 'PUT';
    mockStatus = 'wishlist';
    const thunk = changeUserEvent(mockEventId, mockMethod, mockStatus);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/users/1/events/${mockEventId}?status=${mockStatus}`, mockMethod);
  });

  it('should call fetchData with the correct parameters for a DELETE request', async () => {
    mockMethod = 'DELETE';
    const thunk = changeUserEvent(mockEventId, mockMethod);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/users/1/events/${mockEventId}`, mockMethod);
  });

  it('should call dispatch with the setLoading action', async () => {
    const thunk = changeUserEvent(mockEventId, mockMethod, mockStatus);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.' }
    })
    const thunk = changeUserEvent(mockEventId, mockMethod, mockStatus);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'));
  })
});