import { combineReducers } from 'redux';
import pins from './pinsReducer';
import pinsLoaded from './pinsLoadedReducer';
import currentPin from './currentPinReducer';
import currentTapas from './currentTapasReducer';

const rootReducer = combineReducers({
  pins,
  pinsLoaded,
  currentPin,
  currentTapas,
});

export default rootReducer;
