import { createStore } from 'redux';
import reducer from './_Reducer';

const store = createStore(reducer);
export default store;
