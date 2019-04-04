export const setEvents = events => ({
  type: 'SET_EVENTS',
  events
});

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const setWishlist = wishlist => ({
  type: 'SET_WISHLIST',
  wishlist
});

export const addToWishlist = eventId => ({
  type: 'ADD_TO_WISHLIST',
  eventId
});

export const removeFromWishlist = eventId => ({
  type: 'REMOVE_FROM_WISHLIST',
  eventId
});

export const addToAttending = eventId => ({
  type: 'ADD_TO_ATTENDING',
  eventId
});

export const removeFromAttending = eventId => ({
  type: 'REMOVE_FROM_ATTENDING',
  eventId
});

export const setAttending = attending => ({
  type: 'SET_ATTENDING',
  attending
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

