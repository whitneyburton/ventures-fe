import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer/eventsReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';

export const rootReducer = combineReducers({
  events: eventsReducer,
  loading: loadingReducer,
  error: errorReducer,
});