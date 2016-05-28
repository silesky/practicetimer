// TimerBox
const _setTickingTrue = (id) => ({ type: 'SET_TICKING_TRUE', id });
const _setTickingFalse = (id) => ({ type: 'SET_TICKING_FALSE', id });



export const removeTimer = (id) => ({ type: 'REMOVE_TIMER', id });
export const addTimer = () =>  ({ type: 'ADD_TIMER' });
export const reset = (id) => ({ type: 'RESET', id });
export const increment = (id) => ({ type: 'INCREMENT', id });
export const decrement = (id) => ({ type: 'DECREMENT', id });
export const startTicking = (id) => {
    return (dispatch) => {
      window.myInt = setInterval(() => dispatch(decrement(id)), 1000);
      dispatch(_setTickingTrue(id));
    };
  };
  export const pauseTimer = (id) => {
    return (dispatch) => {
        clearInterval(window.myInt);
        dispatch(_setTickingFalse(id));
      };
    };
