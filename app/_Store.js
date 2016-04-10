import { createStore } from 'redux';
import reducer from './reducers/_Reducer';

const store = createStore(reducer);
export default store;
