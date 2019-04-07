import { setLoading, setError, setUser } from '../actions';
import { fetchData } from '../utils/api';

export const getUser = (userId = '') => { 
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const user = await fetchData(`/users/${userId}`, 'GET');
      dispatch(setUser(user.data.attributes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}