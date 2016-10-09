import { combineReducers } from 'redux';
import pins from './pinsReducer';
import pinsLoaded from './pinsLoadedReducer';
import currentPin from './currentPinReducer';
import currentTapa from './currentTapaReducer';

const rootReducer = combineReducers({
  pins,
  pinsLoaded,
  currentPin,
  currentTapa,
});

export default rootReducer;
