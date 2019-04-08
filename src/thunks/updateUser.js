import { setLoading, setError, setUser } from '../actions';
import { fetchData } from '../utils/api';

export const updateUser = (user) => {
  return async (dispatch) => {
    const { name, bio } = user;
    try {
      dispatch(setLoading(true));
      const updatedUser = await fetchData(`/users/1?name=${name}&bio=${bio}`, 'PUT');
      dispatch(setUser(updatedUser.data.attributes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}