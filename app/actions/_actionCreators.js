
const _setTickingTrue = (id) => ({ type: 'SET_TICKING_TRUE', id });
const _setTickingFalse = (id) => ({ type: 'SET_TICKING_FALSE', id });

export const removeTimer = (id) => ({ type: 'REMOVE_TIMER', id });
export const addTimer = () =>  ({ type: 'ADD_TIMER' });
export const reset = (id) => ({ type: 'RESET', id });
export const increment = (id) => ({ type: 'INCREMENT', id });
export const decrement = (id) => ({ type: 'DECREMENT', id });
export const startTicking = (id) => {
    return (dispatch, getState) => {
      console.log(getState());
      dispatch(_setTickingTrue(id));
      window.myInt = setInterval(() => {
        let currentTime = getState().find((el) => el.id === id).time;
    /* based on the current id, find the current time. as long as current time is
        more than zero, keep counting down. */
        if (currentTime > 0) {
          dispatch(decrement(id));
            } else {
          clearInterval(window.myInt);
          console.log('Times up. Next timer should start...');
      } // ^ called every 1 second
    }, 1000);
    };
  };
  export const pauseTimer = (id) => {
    return (dispatch) => {
        clearInterval(window.myInt);
        dispatch(_setTickingFalse(id));
      };
    };
