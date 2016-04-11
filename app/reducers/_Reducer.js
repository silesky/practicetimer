import { combineReducers } from 'redux';

const reducer = function(state = {
  timerCount: 1,
  timeArray: [10, 20, 30], 
  id: [1, 2, 3],
  text: ['shop', 'read', 'study'],
}, action) {

  console.log('reducer called');
  console.log(state);
  switch (action.type) {
    case 'INCREMENT_TIMERCOUNT':
      // add another array item to the end of timeArray, incremented by one.
      const newItem = state.timeArray[state.timeArray.length - 1]++;
      return Object.assign({}, state, {
        timerCount: state.timerCount + 1,
        id: [...state.timeArray, newItem],
      });
      case 'DECREMENT_TIMERCOUNT':
      return Object.assign({}, state, {
        timerCount: state.timerCount - 1,
        id: state.id - 1,
      });
      case 'SET_TITLE':
      return Object.assign({}, state, {
        text: action.text,
      });
      case 'RESET':
      return Object.assign({}, state, {
        time: 0,
      });
      case 'INCREMENT':
      return Object.assign({}, state, {
        time: state.time + 1,
      });
      case 'DECREMENT':
      return Object.assign({}, state, {
        time: state.time - 1,
      });
      case 'PAUSEPLAY':
      return state;

          /* should simply return
          the current time, and then clearInterval (stop ticking). */

          case 'SET_TIME':
          return Object.assign({}, state, {
           time: Number(action.time),
         });
          default:
          return state;
        }

      };

/* const reducer = combineReducers({
   reducer1, reducer2,
 });
*/
module.exports = reducer;
