
const reducer = function reducer(state = {
      timeArray: [10, 20, 30],
      id: 0,
      time: 10,
      text: 'enter text',
      timerCount: 1,
    },
    action) {

    console.log('reducer called');
    console.log(state);

    switch (action.type) {
      case 'INCREMENT_TIMERCOUNT':
        return {
            timeArray: [10, 20, 30],
          id: state.id,
          time: state.time,
          text: state.text,
          timerCount: state.timerCount + 1, //

        };
        case 'DECREMENT_TIMERCOUNT':
          return {
              timeArray: [10, 20, 30],
            id: state.id,
            time: state.time,
            text: state.text,
            timerCount: state.timerCount - 1, //
          };
      case 'SET_TITLE':
        return {
            timeArray: [10, 20, 30],
          id: action.id,
          time: state.time,
          text: action.text, //
          timerCount: state.timerCount,
        };
      case 'RESET':
        return {
            timeArray: [10, 20, 30],
          id: state.id,
          time: 0, //
          text: state.text,
          timerCount: state.timerCount, /* should simply return
              the current time, and then clearInterval (stop ticking). */
        };
      case 'INCREMENT':
        return {
            timeArray: [10, 20, 30],
          id: state.id,
          time: state.time + 1, //
          text: state.text,
          timerCount: state.timerCount
        };
      case 'DECREMENT':
        return {
            timeArray: [10, 20, 30],
           id: state.id,
           time: state.time - 1, //
           text: state.text,
           timerCount: state.timerCount
        };
      case 'PAUSEPLAY':
        return state;

          /* should simply return
          the current time, and then clearInterval (stop ticking). */

      case 'SET_TIME':

        return Object.assign({}, state, {
             time: Number(action.time)
           });
  
        default:
          return state;
      }

};
module.exports = reducer;
