
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
          return Object.assign({}, state, {
              timerCount: state.timerCount + 1
          });
        case 'DECREMENT_TIMERCOUNT':
          return Object.assign({}, state, {
              timerCount: state.timerCount - 1
          });
      case 'SET_TITLE':
        return Object.assign({}, state, {
          text: action.text
        });
      case 'RESET':
        return Object.assign({}, state, {
          time: 0
        });
      case 'INCREMENT':
        return Object.assign({}, state, {
          time: state.time + 1
        });
      case 'DECREMENT':
        return Object.assign({}, state, {
          time: state.time - 1
        });
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
