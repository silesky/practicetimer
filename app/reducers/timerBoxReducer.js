import boardReducer from './boardReducer';

const timerBoxReducer = function(
  state = [{ id: 1, time: 10, title: 'shop' }, { id: 2, time: 5, title: 'work' }], action) {


    // copy the state array
    const stateCopyArr = state.slice(0);
    // search in the array, return the object w/ the id that belongs to the clicked element
    const foundObj = stateCopyArr.find((el) => el.id === action.id);
    // grab the index of the object to remove
    const foundIndex = stateCopyArr.indexOf(foundObj);

    const util = {
      replaceElByIndex: (array, index, el) => {
        return [
          ...array.slice(0, index),
          array[index] =  el,
          ...array.slice(index + 1)
        ];
      },
      removeElByIndex: (array, index) => {
        return [
          ...array.slice(0, index),
          ...array.slice(index + 1)
        ];
      },
      getNextId: (arr) => {
        return Math.max(...arr.map(el => el['id'])) + 1;
      }
    };

    // copy the array and remove the found element, and replace it with the new element
    switch (action.type) {
      case 'SET_TITLE':
      // grab the node
      console.log(state);
      const newText = action.text;
      stateCopyArr[foundIndex].title = newText;
      return stateCopyArr;

      case 'ADD_TIMER':
      console.log('add!');
      return [...stateCopyArr, { id: util.getNextId, time: 10, title: 'shop' }];

      case 'INCREMENT':
      console.log('INCREMENT');

      case 'DECREMENT':
      console.log('DECREMENT');

      case 'REMOVE_TIMER':

      return util.removeElByIndex(state, foundIndex);
      // now that you know where it is in the array, remove the old object
      // stateCopyArr.splice(foundIndex, 1);

      default:
      return state;
    }
  };

  module.exports = timerBoxReducer;
