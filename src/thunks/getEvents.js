import { setEvents, setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';

export const getEvents = (limit = null, event_type = null, state = null, month = null) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let path = (limit || event_type || state || month) ? '?' : '';
      if (limit) path = path + `&limit=${limit}`;
      if (event_type) path = path + `&event-type=${event_type}`;
      if (state) path = path + `&state=${state}`;
      if (month) path = path + `&month=${month}`;
      const events = await fetchData('/events' + path, 'GET');
      dispatch(setEvents(events.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}