import {creareStore} from 'redux';
import todo from './reducer';

let store = creareStore(todo);
export default store;