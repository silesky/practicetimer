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
  let _addTimer = () => ({ type: 'ADD_TIMER' })
// thunk intercepts the action and adds a new dispatch function
  return (dispatch) => {
    dispatch(test);
    dispatch(_addTimer());
  };
}
const increment = (id) => ({ type: 'INCREMENT', id });
const decrement = (id) => ({ type: 'DECREMENT', id });
export function startTicking(id) {
    return (dispatch) => {
      window.myInt = setInterval(() => dispatch(decrement(id)), 1000);
      dispatch(setTickingTrue());
      dispatch(test);
    };
  }
