export const setEvents = events => ({
  type: 'SET_EVENTS',
  events
});

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});

export const setWishlist = wishlist => ({
  type: 'SET_WISHLIST',
  wishlist
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

