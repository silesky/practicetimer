import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import timerBoxReducer from './timerBoxReducer';

/*

  stateTree = {
   timerCount: 3 // boardReducer
    timeArray: [10, 20, 30],
    idArray: [1, 2, 3],
    titleArray: ['shop', 'read', 'study'],
  }
*/


/* basically, it's saying to grab these items  */

/* assign these two objects to */
// keys -> properties of the state object
const reducer = combineReducers({
  boardReducer,
  timerBoxReducer
});

export default reducer;
