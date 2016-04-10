
const reducer = function reducer(state = {
      id: 0,
      time: 0,
      text: 'enter text',
      timerCount: 1,
    },
    action) {

    console.log('reducer called');
    console.log(state);

    switch (action.type) {
      case 'INCREMENT_TIMERCOUNT':
        return {
          timerCount: state.timerCount + 1,
        };
        case 'DECREMENT_TIMERCOUNT':
          return {
            timerCount: state.timerCount - 1,
          };
      case 'SET_TITLE':
        return {
          id: action.id,
          time: state.time,
          text: action.text,
        };
      case 'RESET':
        return {
          time: 0, /* should simply return
              the current time, and then clearInterval (stop ticking). */
        };
      case 'INCREMENT':
        return {
          time: state.time + 1,
        };
      case 'DECREMENT':
        return {
              time: state.time - 1,
        };
      case 'PAUSEPLAY':
        return state;
          /* should simply return
          the current time, and then clearInterval (stop ticking). */

      case 'SET_TIME':
        return {
            time: Number(action.time),
          };
        default:
          return state;
      }

};
module.exports = reducer;
