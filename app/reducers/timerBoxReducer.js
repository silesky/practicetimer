import boardReducer from './boardReducer';

/*

  stateTree = {
   timerCount: 3 // boardReducer
    timeArray: [10, 20, 30],
    idArray: [1, 2, 3],
    titleArray: ['shop', 'read', 'study'],
  }
*/

const timerBoxReducer = function(
  state =
   { timeArray: [100],
     idArray: [1],
     titleArray: [''],
   },
   action) {
      console.log('reducer called...state:');
      console.log(state);
      const lastArrayValue = (arr) => arr[arr.length - 1];
      function removeItemFromArray(array, itemToRemove) {
        var indexToRemove = array.indexOf(itemToRemove);
        const copyArray = array.slice();
        copyArray.splice(indexToRemove, 1);
        return copyArray;
      }
      const nextId = lastArrayValue(state.idArray);

    switch (action.type) {
      case 'REMOVE_TIMER':
      // add another array item to the end of timeArray, incremented by one.

      const newIdArray = removeItemFromArray(state.idArray, action.id);
          console.log(newIdArray);
        console.log(action);
            return Object.assign({}, state, {
              timerCount: state.timerCount - 1,
              timeArray: [...state.timeArray, (lastArrayValue(state.timeArray) - 1)],
              idArray: newIdArray
            });

      case 'SET_TITLE':
      const oldArrayCopy = state.titleArray.slice();
      oldArrayCopy.splice(action.id, 1, action.text);

      return Object.assign({}, state, {
        titleArray: oldArrayCopy
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



module.exports = timerBoxReducer;
