function currentTapasReducer(state = 0, action) {

  if (action.type === 'TAPAS_CHANGE') {
    return action.id;
  }

  return state;
}

export default currentTapasReducer;
