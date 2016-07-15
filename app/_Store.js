import { createStore, applyMiddleware } from 'redux';
// stores the state... hydration happens in _Reducer
import { storeStateInLS } from './util';
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

const compose = ((a, b) => (c) => a(b(c)));

const configureStore = () => {
    const store = createStore(reducer, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
  };

const store = configureStore();

// without anon function, I get error 'expected listener to be a function'
store.subscribe(() => storeStateInLS(store.getState()));

export default store;
