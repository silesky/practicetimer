import boardReducer from './boardReducer';

const timerBoxReducer = function(
  state = [{ id: 1, time: 10, title: 'shop' }, { id: 2, time: 5, title: 'work' }], action) {


    // copy the state array
    const stateCopyArr = state.slice(0);



    const util = {
      getState_replaceElByIndex: (index, el) => {
        console.log('getState_replace...');
        return [
          ...state.slice(0, index),
          state[index] =  el,
          ...state.slice(index + 1)
        ];

      },
      getState_removeElByIndex: (index) => {
                console.log('getState_remove...');
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      },
      getNextId: (arr) => {
        return Math.max(...arr.map(el => el['id'])) + 1;
      },
      getCurrentIndex: () => {

        const foundObj = state.find((el) => el.id === action.id);
        const foundIndex = state.indexOf(foundObj);
        return foundIndex;
      },
      getCurrentObj: () => {
        console.log('getCurrentObj...');
         return state.find((el) => el.id === action.id);
       },
    };
    switch (action.type) {
      case 'SET_TITLE':
      return state;
      case 'ADD_TIMER':
      return [...state, { id: util.getNextId, time: 10, title: 'new timer' }];

      case 'INCREMENT':
      console.log('INCREMENT');
      return state;

      case 'DECREMENT':
      console.log('INCREMENT');
      return state;

      case 'REMOVE_TIMER':
      return util.getState_removeElByIndex(util.getCurrentIndex());

      default:
      return state;
    }
  };

  module.exports = timerBoxReducer;
