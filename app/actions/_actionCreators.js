// TimerBox

export function removeTimer(id) {
  return {
    type: 'REMOVE_TIMER',
    id
  }
}

export function addTimer(id) {
  console.log(id);
  return {
    type: 'ADD_TIMER',
    id
  }
}


// TimerBoxCountDown
