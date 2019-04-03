export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return action.wishlist
    case 'ADD_TO_WISHLIST':
      return [...state, action.eventId]
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(eventId => eventId !== action.eventId)
    default:
      return state
  }
}