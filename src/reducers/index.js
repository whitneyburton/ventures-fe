import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer/eventsReducer';
import { userReducer } from './userReducer/userReducer';
import { wishlistReducer } from './wishlistReducer/wishlistReducer';
import { attendingReducer } from './attendingReducer/attendingReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';

export const rootReducer = combineReducers({
  events: eventsReducer,
  user: userReducer,
  wishlist: wishlistReducer,
  attending: attendingReducer,
  loading: loadingReducer,
  error: errorReducer,
});