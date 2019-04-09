import { getEvent } from '../getEvent';
import { setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
import { mockEvents } from '../../data/mockData';
jest.mock('../../utils/api');

describe('getEvent', () => {
  let mockDispatch;
  let mockEvent;
  let eventId;
  
  beforeEach(() => {
    eventId = '1';
    mockEvent = mockEvents.data[0];
    mockDispatch = jest.fn();
  });
  
  it('should call dispatch with the setLoading action', () => {
    const thunk = getEvent();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getEvent(eventId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/events/${eventId}`, 'GET');
  });

  it('should return the event', async () => {
    const expected = { data: mockEvent};
    fetchData.mockReturnValue(expected);
    const thunk = getEvent(eventId);
    const result = await thunk(mockDispatch);
    expect(result).toEqual(expected.data.attributes)
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.'}
    })
    const thunk = getEvent();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'))
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = getEvent(eventId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});