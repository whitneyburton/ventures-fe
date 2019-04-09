import { setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';

export const getEvent = (eventId = '') => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const event = await fetchData(`/events/${eventId}`, 'GET');
      dispatch(setLoading(false));
      return event.data.attributes;
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}