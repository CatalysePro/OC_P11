// store.js
import { createStore, combineReducers } from 'redux'; // createStore for gloabl state stocking 
                                                      // combineReducer for unifying reducers within one root reducer 
                                                      // to be passed to createStore
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers here if necessary
});

const store = createStore(rootReducer);

export default store;
