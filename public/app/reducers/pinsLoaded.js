import { PINS_LOADED } from '../constants/actionTypes'

export default function pinsLoaded(state = false, action) {
  switch(action.type) {
    case PINS_LOADED:
      return true;
    default:
      return state;
  }
};
