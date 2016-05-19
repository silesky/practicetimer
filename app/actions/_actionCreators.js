// TimerBox
export function log(text) {
  console.log(text);
}

export function removeTimer(id) {
  return {
    type: 'REMOVE_TIMER',
    id
  }
}

export function addTimer() {
  return {
    type: 'ADD_TIMER',
  };
}
export function addTimerThunk(state) {
// thunk intercepts the action and adds a new dispatch function
  return function(dispatch) {
    dispatch(addTimer());
    dispatch(log(state));
  };
}

// TimerBoxCountDown

export function setTickingTrue(id) {
  console.log('actionCreator.setTickingTrue() called...you should see reducer->SET_TICKING_TRUE ');
  console.log(id);
  return {
    type: 'SET_TICKING_TRUE',
    id
  }
}

export function setTickingFalse(id) {
  console.log('actionCreator->setTickingFalse called...you should see reducer -> SET_TICKING_FALSE');
  return {
    type: 'SET_TICKING_FALSE',
    id
  }
}
