import { nextInLine, findIdWhereTrue, everythingIsPaused } from '../util.js';

export const _saveStartTimes = () => ({ type: 'SAVE_START_TIMES' });
export const _setTickingTrue = (id) => ({ type: 'SET_TICKING_TRUE', id });
export const _setTickingFalse = (id) => ({ type: 'SET_TICKING_FALSE', id });
export const _setPauseTrue = (id) => ({ type: 'SET_PAUSE_TRUE', id });
export const _setPauseFalse = (id) => ({ type: 'SET_PAUSE_FALSE', id });
export const removeTimer = (id) => ({ type: 'REMOVE_TIMER', id });
export const addTimer = () =>  ({ type: 'ADD_TIMER' });
export const reset = (id) => ({ type: 'RESET', id });

export const increment = (id) => ({ type: 'INCREMENT', id });
export const decrement = (id) => ({ type: 'DECREMENT', id });
export const setTitle = (text, id) => ({ type: 'SET_TITLE', text, id });
export const pausePlay = () => {
  
  return (dispatch, getState) => {
    clearInterval(window.myInt);  
    dispatch({ 
      type: 'TOGGLE_PAUSEPLAY',
      id: findIdWhereTrue(getState(), 'ticking'),
    });
  };
};
// pause and reset all
export const resetAll = () =>  {
  return (dispatch) => {
    clearInterval(window.myInt);
    dispatch({ type: 'RESET_ALL'});
  };
};
export const startTicking = (id) => {
  return (dispatch, getState) => { 
    const objectWithMatchingId = () => getState().find((el) => el.id === id);
    // checking if object exusts... it only starts the timer if there are timers on the board.
    if (objectWithMatchingId() && everythingIsPaused(getState())) {
      // if nothing is ticking, save the startTime (so I can later hit reset)...
      dispatch(_saveStartTimes());
      dispatch(_setTickingTrue(id));
      dispatch(_setPauseFalse(id)); 

      window.myInt = setInterval(() => {
        let currentTime = getState().find((el) => el.id === id).time;
        /* based on the current id, find the current time. as long as current time is
        more than zero, keep counting down. */
        if (currentTime > 0 && objectWithMatchingId()) {
          dispatch(decrement(id));
        } 
        else {
          clearInterval(window.myInt);
          dispatch(_setPauseTrue(id));
          dispatch(_setTickingFalse(id));
          dispatch(_setPauseTrue(id)); 
          dispatch(startTicking(nextInLine(getState(), id)));
        }
      }, 1000);
    }
    // ^ called every 1 second
  };

};

