/*  grab the stored state object from LocalStorage, use it to hydrate the state (so timer
    timer settings will persist on page load). */
import { getStateFromLS } from '../util';
let stateFromLS = getStateFromLS();
/*  if there's nothing in localStorage, be sure to
    set a default initialState or we'll get a state.map is undefined error. */
let initialState = (stateFromLS) ?  stateFromLS : [{ id: 1, time: 5, title: '', ticking: false, startTime: 5 }];

const reducer = function(state = initialState, action) {
    let _index;
    let _objEl;
    let _individualTimerObjEl;
    console.log(state);
    const util = {

    getState_replaceElByIndex: (index, el) => {
        return [
          ...state.slice(0, index),
          state[index] =  el,
          ...state.slice(index + 1)
        ];

      },
      getState_removeElByIndex: (index) => {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      },
      getCurrentIndex: () => {
        const foundObj = state.find((el) => el.id === action.id);
        const foundIndex = state.indexOf(foundObj);
        return foundIndex;
      },
      getCurrentObjEl: () => {
         return state.find((el) => el.id == action.id);
       },
      getNextId: () => {
        return Math.max(...state.map(el => el['id'])) + 1;
      },
    };
    switch (action.type) {

      // save the start time of all of the timers...(except for the one )
      case 'SAVE_START_TIMES':
      let stateWithSavedStartTimes = state.map((el) => { 
      // if the timer is paused, don't overwrite the start time
          el.startTime = !el.ticking ? el.time : el.startTime; 
          return el; 
        });
   
      return stateWithSavedStartTimes;
      case 'RESET':
      _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.time = _individualTimerObjEl.startTime;
       return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);
      case 'RESET_ALL':
       let stateWithAllTimesReset = state.map((el) => { 
          el.time = el.startTime; 
          return el; 
        });
      return stateWithAllTimesReset;

      case 'SET_TIME':
      _individualTimerObjEl = util.getCurrentObjEl();
      // otherwise input will get parsed as string
      let int = parseInt(action.time, 10);
      _individualTimerObjEl.time = int;

      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);

      case 'SET_TICKING_TRUE':
      _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.ticking = true;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);

      case 'SET_TICKING_FALSE':
      _individualTimerObjEl = util.getCurrentObjEl();
      _individualTimerObjEl.ticking = false;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);

      case 'SET_TITLE':
      _individualTimerObjEl = util.getCurrentObjEl();

      _individualTimerObjEl.title = action.text;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _individualTimerObjEl);
      // at the moment that add_timer is instantiated, the state only has two timers
      case 'ADD_TIMER':
      return [...state, { id: util.getNextId(), ticking: false, time: 5, title: '', startTime: 5 }];

      case 'INCREMENT':
      _index = util.getCurrentIndex();
      _objEl = util.getCurrentObjEl();
      _objEl.time = _objEl.time + 60;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _objEl);


      case 'DECREMENT':
      _index = util.getCurrentIndex();
      _objEl = util.getCurrentObjEl();
      _objEl.time = _objEl.time - 1;
      return util.getState_replaceElByIndex(util.getCurrentIndex(), _objEl);

      case 'REMOVE_TIMER':
      return util.getState_removeElByIndex(util.getCurrentIndex());


      default:
      return state;
    }
  };

export default reducer;
