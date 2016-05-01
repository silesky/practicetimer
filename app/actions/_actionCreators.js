// TimerBox

export function removeTimer(id) {
  return {
    type: 'REMOVE_TIMER',
    id
  }
}

export function addTimer(id) {
  return {
    type: 'ADD_TIMER',
    id
  }
}

// TimerBoxCountDown

export function setTickingTrue(id) {
  console.log('actionCreator.setTickingTrue() called...you should see reducer->SET_TICKING_TRUE ');

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
