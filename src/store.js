// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers here if necessary
});

const store = createStore(rootReducer);

export default store;
