function pinsReducer(state = [], action) {

  if (action.type === 'PINS_SUCCESS' && action.response) {
    return action.response;
  }

  return state;
}

export default pinsReducer;
