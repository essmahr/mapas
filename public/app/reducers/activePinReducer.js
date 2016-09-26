function activePinReducer(state = null, action) {

  if (action.type === 'ACTIVE_PIN_CHANGE') {
    return action.id;
  }

  return state;
}

export default activePinReducer;
