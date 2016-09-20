import { combineReducers } from 'redux';
import pinsLoaded from './pinsLoaded';

const rootReducer = combineReducers({
  pinsLoaded,
});

export default rootReducer;
