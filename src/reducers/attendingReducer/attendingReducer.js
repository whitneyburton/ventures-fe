export const attendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ATTENDING':
      return action.attending
    default:
      return state
  }
}