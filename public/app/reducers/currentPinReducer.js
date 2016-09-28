function currentPinReducer(state = null, action) {

  if (action.type === 'PIN_CHANGE') {
    return action.id;
  }

  return state;
}

export default currentPinReducer;
