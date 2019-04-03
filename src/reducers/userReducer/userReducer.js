export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    case 'UPDATE_USER':
      return action.user
    default:
      return state
  }
}