export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return action.wishlist
    default:
      return state
  }
}