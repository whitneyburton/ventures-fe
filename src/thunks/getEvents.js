import { setEvents, setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';

export const getEvents = (event_type = '', month = '', state = '') => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let path = (event_type.length || state.length || month.length) ? '?' : '';
      if (event_type.length) path = path + `&event_type=${event_type}`;
      if (month.length) path = path + `&month=${month}`;
      if (state.length) path = path + `&state=${state}`;
      const events = await fetchData('/events' + path, 'GET');
      dispatch(setEvents(events.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}