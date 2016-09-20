import { combineReducers } from 'redux';
import pins from './pinsReducer';
import pinsLoaded from './pinsLoadedReducer';

const rootReducer = combineReducers({
  pins,
  pinsLoaded,
});

export default rootReducer;
