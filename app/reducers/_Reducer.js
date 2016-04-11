import { combineReducers } from 'redux';

const reducer = function(state = {
  timerCount: 1,
  timeArray: [10, 20, 30],
  idArray: [1, 2, 3],
  textArray: ['shop', 'read', 'study'],
}, action) {

  console.log('reducer called');
  console.log(state);

  const lastArrayValue = (arr) => arr[arr.length - 1];
  const nextId = lastArrayValue(state.idArray);

  switch (action.type) {
    case 'INCREMENT_TIMERCOUNT':
      // add another array item to the end of timeArray, incremented by one.
      return Object.assign({}, state, {
        timerCount: state.timerCount + 1,
        timeArray: [...state.timeArray, (lastArrayValue(state.timeArray) + 1)],
        idArray: [...state.idArray, nextId]
      });
      case 'DECREMENT_TIMERCOUNT':
      return Object.assign({}, state, {
        timerCount: state.timerCount - 1,
        timeArray: [...state.timeArray, (lastArrayValue(state.timeArray) - 1)],
        idArray: [...state.idArray, nextId],
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
