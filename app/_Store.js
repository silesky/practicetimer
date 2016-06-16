import { createStore, applyMiddleware } from 'redux';
import { storeStateInLS, getStateFromLS } from './util';
import thunk from 'redux-thunk';
import reducer from './reducers/_Reducer';
// middleware - the functions that intercept an action upon dispatch, before it reaches the reducer
// applyMiddleware - the function that helps you make your replacement for createStore;
// thunk function -  a function that wraps some behavior for execution (e.g. logger)... it's
// let store = applyMiddleware(thunk)(createStore)(reducer);
let store = createStore(reducer, applyMiddleware(thunk));



// I want to be able to populate the state a la
store.subscribe(() => storeStateInLS(store.getState()));
// without anon function, I get error 'expected listener to be a function'
store.subscribe(()=> console.log(getStateFromLS())); // add to initialState


/*  e.g. let createStoreMW = applyMiddleware(logger, crashReporter)(createStore);
*   todoApp = combineReducers(reducers)
*   let store= createStoreMW(todoApp)
*/
// if dispatch recieves an action object, redux thunk will do nothing,

export default store;
