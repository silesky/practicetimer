import boardReducer from './boardReducer';

const timerBoxReducer = function(
  state = [{ id: 1, time: 10, title: 'shop' },{ id: 2, time: 5, title: 'work' }], action) {


  switch (action.type) {
    case 'INCREMENT':
    // copy the state array
    var copy = state.timerBoxReducer;
    // search in the array, return the object with the right id
       //  const foundObj = stateCopyArr.find((el) => el.id === action.id);
  //  console.log(foundObj);
    // change that object

    // foundObj.time =  foundObj.time + 1;
      // remove the old object and replace it
      // get the index of the old object
          // var indexOfElToRemove = stateCopyArr.indexOf(foundObj);
      // use array.splice to replace it with the new object
          //   stateCopyArr.splice(indexOfElToRemove, 1, foundObj);
      //  console.log(stateCopyArr.time);
          // return stateCopyArr;
    case 'DECREMENT':
      console.log('DECREMENT');
  case 'REMOVE_TIMER':
      console.log(action.id);
    default:
      return state;
  }
}


//
// const timerBoxReducer = function(
//   state =
//    { timeArray: [100],
//      idArray: [1],
//      titleArray: [''],
//    },
//    action) {
//       const lastArrayValue = (arr) => arr[arr.length - 1];
//       function removeItemFromArray(array, itemToRemove) {
//         var indexToRemove = array.indexOf(itemToRemove);
//         const copyArray = array.slice();
//         copyArray.splice(indexToRemove, 1);
//         return copyArray;
//       }
//       const nextId = lastArrayValue(state.idArray);
//
//     switch (action.type) {
//       case 'REMOVE_TIMER':
//       // add another array item to the end of timeArray, incremented by one.
//
//       const newIdArray = removeItemFromArray(state.idArray, action.id);
//           console.log(newIdArray);
//         console.log(action);
//             return Object.assign({}, state, {
//               timerCount: state.timerCount - 1,
//               timeArray: [...state.timeArray, (lastArrayValue(state.timeArray) - 1)],
//               idArray: newIdArray
//             });
//
//       case 'SET_TITLE':
//       const oldArrayCopy = state.titleArray.slice();
//       oldArrayCopy.splice(action.id, 1, action.text);
//
//       return Object.assign({}, state, {
//         titleArray: oldArrayCopy
//       });
//       case 'RESET':
//       return Object.assign({}, state, {
//         time: 0,
//       });
//       case 'INCREMENT':
//       return Object.assign({}, state, {
//         time: state.time + 1,
//       });
//       case 'DECREMENT':
//       return Object.assign({}, state, {
//         time: state.time - 1,
//       });
//       case 'PAUSEPLAY':
//       return state;
//
//       /* should simply return
//       the current time, and then clearInterval (stop ticking). */
//
//       case 'SET_TIME':
//       return Object.assign({}, state, {
//         time: Number(action.time),
//       });
//       default:
//       return state;
//     }
//
//   };
//
//

module.exports = timerBoxReducer;
