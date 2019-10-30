import {createStore} from 'redux';
import todo from './reducer';

let store = createStore(todo);
export default store;