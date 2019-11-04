import {createStore} from 'redux';
import todo from './reducer';
// redux react-redux redux-thunk
// redux:状态管理的容器，action、Reducer、store

let store = createStore(todo);
export default store;