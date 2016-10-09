function currentTapaReducer(state = null, action) {

  if (action.type === 'TAPAS_CHANGE') {
    return action.id;
  }

  return state;
}

export default currentTapaReducer;
