import { setLoading, setError } from '../actions';
import { fetchData } from '../utils/api';

export const changeUserEvent = (eventId, method, status = '') => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const path = status.length ? `?status=${status}` : status;
      await fetchData(`/users/1/events/${eventId}` + path, method);
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}