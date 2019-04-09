import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer/eventsReducer';
import { userReducer } from './userReducer/userReducer';
import { userEventsReducer } from './userEventsReducer/userEventsReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';

export const rootReducer = combineReducers({
  events: eventsReducer,
  user: userReducer,
  userEvents: userEventsReducer,
  loading: loadingReducer,
  error: errorReducer,
});