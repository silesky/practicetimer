
// given the state and the current id, grab the next id;
export const nextInLine = (state, currentId) => {
  const idArr = state.map((el) => el.id); // [1, 4, 6]
  const currentIndex = idArr.indexOf(currentId); // e.g. if 4 , then zero
  const nextId = idArr[currentIndex + 1];
  return nextId;
};

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
    // hours view: if time is over an hour
    if (totalSeconds >= 3600) {
      // ...with remaning minutes (e.g 1:05:00...)
      let remainingMins = totalMinutes - ((totalHours * 3600) / 60);
      let remainingSecs = totalSeconds - totalMinutes * 60;
      // if remaining mins/seconds is under 10, add a 0
      let minsWithLeadingZeros = (remainingMins < 10) ? ('0' + remainingMins) : remainingMins;
      let secsWithLeadingZeros = (remainingSecs < 10) ? ('0' + remainingSecs) : remainingSecs;
      displayString = totalHours + ':' + minsWithLeadingZeros + ':' + secsWithLeadingZeros;
      } 
    // minutes view: if time is within an hour
    else if (totalSeconds < 3600 && totalSeconds > 0) {
     let minutes = Math.floor(totalSeconds / 60);
     let remainingSecs = totalSeconds - minutes * 60;
     let secsWithLeadingZeros = (remainingSecs < 10) ? ('0' + remainingSecs) : remainingSecs;
     displayString = minutes + ':' + secsWithLeadingZeros;
   } 
  // if timer is done
    else if(totalSeconds <= 0) {
      displayString = 'end';
    } 
    else { 
      displayString = totalSeconds;
    }    
  return displayString;
};   
