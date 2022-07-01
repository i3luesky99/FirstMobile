import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
import itemReducer from './item';

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  items: itemReducer,
});

export default allReducer;
