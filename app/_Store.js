import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/_Reducer';


let store = applyMiddleware(thunk)(createStore)(reducer);

export default store;
