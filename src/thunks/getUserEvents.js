import { setLoading, setError, setUserEvents } from '../actions';
import { fetchData } from '../utils/api';

export const getUserEvents = (userId = '') => { 
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const userEvents = await fetchData(`/users/${userId}/events`, 'GET');
      dispatch(setUserEvents(userEvents.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}