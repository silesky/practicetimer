// TimerBox
export function test() {
  console.log('clicked!')
}


export function removeTimer(id) {
  return {
    type: 'REMOVE_TIMER',
    id
  }
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

export function addTimer() {
  let _addTimerAct = () => ({ type: 'ADD_TIMER' })
// thunk intercepts the action and adds a new dispatch function
  return function(dispatch) {
    dispatch(test);
    dispatch(_addTimerAct());
  };
}

export function startTickingThunk() {

// thunk intercepts the action and adds a new dispatch function
  return function(dispatch) {
    dispatch(test);
  };
}
