import { getEvents } from '../getEvents';
import { setEvents, setLoading, setError } from '../../actions';
import { fetchData } from '../../utils/api';
import { mockEvents } from '../../data/mockData';
jest.mock('../../utils/api');

describe('getEvents', () => {
  let mockDispatch;
  
  beforeEach(() => {
    mockDispatch = jest.fn();
  });
  
  it('should call dispatch with the setLoading action', () => {
    const thunk = getEvents();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct parameters', async () => {
    const thunk = getEvents();
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/events', 'GET');
  });

  it('should call fetchData with the correct parameters with a limit', async () => {
    const thunk = getEvents('10', 'biking', 'CO', 'July');
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/events?&limit=10&event-type=biking&state=CO&month=July', 'GET');
  });

  it('should dispatch setEvents with the events', async () => {
    const expected = mockEvents;
    fetchData.mockReturnValue(expected);
    const thunk = getEvents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setEvents(expected.data))
  });

  it('should dispatch setError if there is an error', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data.'}
    })
    const thunk = getEvents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data.'))
  })
});