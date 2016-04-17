
const boardReducer =  (state = { timerCount: 1 }, action) => {
    switch (action.type) {
      case 'INCREMENT_TIMERCOUNT':
      // add another array item to the end of timeArray, incremented by one.
        console.log('increment-- reducer');
        return state.timerCount + 1;
      case 'DECREMENT_TIMERCOUNT':
            console.log('decrement--reducer');
        return state.timerCount - 1;
     default:
        return state;
      }
  };
export default boardReducer;























/*
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
*/
