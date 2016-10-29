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
export const MAP_ZOOM = 'MAP_ZOOM';

export function setCurrentPin(nextPin) {
  return function(dispatch, getState) {
    const prevPin = getState().currentPin;

    dispatch({
      type: PIN_CHANGE,
      id: nextPin,
    });

    // don't fire map zoom on change between pins
    if (prevPin === null || nextPin === null) {
      setTimeout(() => {
        dispatch({
          type: MAP_ZOOM,
          zoomed: nextPin !== null,
        });
      }, 600);
    }
  };
}


export const TAPAS_CHANGE = 'TAPAS_CHANGE';

export function setCurrentTapa(id) {
  return {
    type: TAPAS_CHANGE,
    id,
  }
}

export const ABOUT_STATE_TOGGLE = 'ABOUT_STATE_TOGGLE';

export function toggleAboutState() {
  return {
    type: ABOUT_STATE_TOGGLE,
  }
}
