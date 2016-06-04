// given the current ticking timer ID and state, grab the next ID
import { nextInLine } from '../util.js';

export const _setTickingTrue = (id) => ({ type: 'SET_TICKING_TRUE', id });
export const setTickingFalse = (id) => ({ type: 'SET_TICKING_FALSE', id });

export const removeTimer = (id) => ({ type: 'REMOVE_TIMER', id });
export const addTimer = () =>  ({ type: 'ADD_TIMER' });
export const reset = (id) => ({ type: 'RESET', id });
export const increment = (id) => ({ type: 'INCREMENT', id });
export const decrement = (id) => ({ type: 'DECREMENT', id });
export const startTicking = (id) => {


  return (dispatch, getState) => {
    const objectWithMatchingId = () => getState().find((el) => el.id === id);
    // checking if object exusts...
    if (objectWithMatchingId()) {
      dispatch(_setTickingTrue(id));
      window.myInt = setInterval(() => {
        let currentTime = getState().find((el) => el.id === id).time;
        /* based on the current id, find the current time. as long as current time is
        more than zero, keep counting down. */
        if (currentTime > 0 && objectWithMatchingId()) {
          dispatch(decrement(id));
        } else {
          clearInterval(window.myInt);
          dispatch(startTicking(nextInLine(getState(), id)));
        }
      }, 1000);
    }
    // ^ called every 1 second
  };

};
  export const pauseTimer = (id) => {
    return (dispatch) => {
        clearInterval(window.myInt);
        dispatch(setTickingFalse(id));
      };
    };
