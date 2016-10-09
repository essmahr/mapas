import { CALL_API } from '../middleware/api';

export const PINS_REQUEST = 'PINS_REQUEST';
export const PINS_SUCCESS = 'PINS_SUCCESS';
export const PINS_FAILURE = 'PINS_FAILURE';

export function loadPins() {
  return {
    [CALL_API]: {
      types: [ PINS_REQUEST, PINS_SUCCESS, PINS_FAILURE ],
    }
  };
}


export const PIN_CHANGE = 'PIN_CHANGE';

export function setCurrentPin(id) {
  return {
    type: PIN_CHANGE,
    id,
  }
}

export const TAPAS_CHANGE = 'TAPAS_CHANGE';

export function setCurrentTapa(id) {
  return {
    type: TAPAS_CHANGE,
    id,
  }
}
