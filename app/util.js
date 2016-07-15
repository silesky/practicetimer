
// given the state and the current id, grab the next id;

export const storeStateInLS = (obj) => {
  if (typeof obj === 'object' || 'array') {
    // convert to string bc stupid localstorage only supports plain string
    const objString = JSON.stringify(obj);
    localStorage.setItem('storedState', objString);
  }
};

export const getStateFromLS = () => {
  const string = localStorage.getItem('storedState');
  const stateObj = JSON.parse(string);
  return stateObj;
};

// used in TimerBoxCountDown
export const secondsToMinutesAndHours = (totalSeconds) => {
  let displayString;
  // Math.round also casts the argument to an integer.
  totalSeconds = Math.round(totalSeconds);
  let totalHours = Math.floor(totalSeconds / 3600);
  let totalMinutes = Math.floor(totalSeconds / 60);
  // ...with remaning minutes (e.g 1:05:00...)
  let remainingMins = totalMinutes - ((totalHours * 3600) / 60);
  let remainingSecs = totalSeconds - totalMinutes * 60;
  // if remaining mins/seconds is under 10, add a 0
  let minsWithLeadingZeros = (remainingMins < 10) ? ('0' + remainingMins) : remainingMins;
  let secsWithLeadingZeros = (remainingSecs < 10) ? ('0' + remainingSecs) : remainingSecs;
  // 1hr+
  if (totalSeconds >= 3600) {
    displayString = `${totalHours}:${minsWithLeadingZeros}:${secsWithLeadingZeros}`;
  }
  // from 0-60min
  else if (totalSeconds < 3600 && totalSeconds > 0) {
    displayString = `${remainingMins}:${secsWithLeadingZeros}`;
  }
  // if timer is done
  else if (totalSeconds <= 0) {
    displayString = '0:00';
  }
  return displayString;
};

export const isEmpty = (thing) => (!thing || !thing.length);

export const findIdWhereTrue = (state, prop) => {
    let timerObj = state.find((el) => el[prop] === true);
    let id = timerObj ? timerObj.id : false;
    return id;
};

// expect all timers to have a paused value of true
export const everythingIsPaused = (state) => {
  let arr = state.map((el) => el.pause).filter((el) =>!el);
  return !arr.length; // if array has things, return false
};


export const getTickingId = (state) => {
  let item = state.find((el) => el.ticking).id;
  let id = !isEmpty(item) ? item : false;
  return id;
}; // grab the nextId given the current state. current
export const nextInLine = (state, currentId) => {
  let nextId;
  const idArr = state.map((el) => el.id); // [1, 4, 6]
  if (isEmpty(idArr)) {
    nextId = 1;
  }
  else {
    const currentIndex = idArr.indexOf(currentId); // e.g. if 4 , then zero
    nextId = idArr[currentIndex + 1];
  }
  return nextId;
};
