export const setEvents = events => ({
  type: 'SET_EVENTS',
  events
});

export const setUser = user => ({
  type: 'SET_USER',
  user
});

export const setUserEvents = events => ({
  type: 'SET_USER_EVENTS',
  events
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setSearchText = searchText => ({
  type: 'SET_SEARCH_TEXT',
  searchText
})

