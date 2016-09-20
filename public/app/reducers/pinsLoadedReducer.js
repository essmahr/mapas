export default function pinsLoaded(state = false, action) {
  switch(action.type) {
    case 'PINS_SUCCESS':
      return true;
    default:
      return state;
  }
};
