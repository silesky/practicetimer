import { createStore, applyMiddleware } from 'redux';
import { storeStateInLS, getStateFromLS } from './util';
import thunk from 'redux-thunk';
import reducer from './reducers/_Reducer';
// middleware - the functions that intercept an action upon dispatch, before it reaches the reducer
// applyMiddleware - the function that helps you make your replacement for createStore;
// thunk function -  a function that wraps some behavior for execution (e.g. logger)... it's
// let store = applyMiddleware(thunk)(createStore)(reducer);
/*  e.g. let createStoreMW = applyMiddleware(logger, crashReporter)(createStore);
*   todoApp = combineReducers(reducers)
*   let store= createStoreMW(todoApp)
*/

let store = createStore(reducer, applyMiddleware(thunk));

// without anon function, I get error 'expected listener to be a function'
store.subscribe(() => storeStateInLS(store.getState()));

export default store;
