import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/_Reducer';
// middleware - the functions that intercept an action upon dispatch, before it reaches the reducer
// applyMiddleware - the function that helps you make your replacement for createStore;
// thunk function -  a function that wraps some behavior for execution (e.g. logger)... it's
// let store = applyMiddleware(thunk)(createStore)(reducer);
let store = createStore(reducer, applyMiddleware(thunk));

/*  e.g. let createStoreMW = applyMiddleware(logger, crashReporter)(createStore);
*   todoApp = combineReducers(reducers)
*   let store= createStoreMW(todoApp)
*/
// if dispatch recieves an action object, redux thunk will do nothing,
//... the reducers will get called with action as usual and change the state synchronously
// if instead dispatch recieves a thunk function, redux thunk will
export default store;
