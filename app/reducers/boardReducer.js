import timerBoxReducer from './timerBoxReducer';


const boardReducer =  (state = {}, action) => {
  const timerBoxState = timerBoxReducer(undefined, action);
  const timerCount = timerBoxState.length;
        console.log(state);
    switch (action.type) {
      case 'INCREMENT_TIMERCOUNT':
        return Object.assign({}, state, {
            timerCount: timerCount + 1
              });
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
