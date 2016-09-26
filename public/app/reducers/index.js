import { combineReducers } from 'redux';
import pins from './pinsReducer';
import pinsLoaded from './pinsLoadedReducer';
import activePin from './activePinReducer';

const rootReducer = combineReducers({
  pins,
  pinsLoaded,
  activePin,
});

export default rootReducer;
