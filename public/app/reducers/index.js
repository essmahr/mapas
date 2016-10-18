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
  mapZoomed,
});

function mapZoomed(state = false, action) {
  if (action.type === 'MAP_ZOOM') {
    return action.zoomed;
  }

  return state;
}

export default rootReducer;
