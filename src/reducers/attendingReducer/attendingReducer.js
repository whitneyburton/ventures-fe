export const attendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ATTENDING':
      return action.attending
    case 'ADD_TO_ATTENDING':
      return [...state, action.eventId]
    case 'REMOVE_FROM_ATTENDING':
      return state.filter(eventId => eventId !== action.eventId)
    default:
      return state
  }
}