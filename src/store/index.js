import {createStore,applyMiddleware,compose} from 'redux';
import todo from './reducer';
import thunk from 'redux-thunk';
// redux react-redux redux-thunk
// redux:状态管理的容器，action、Reducer、store
// npm i redux-thunk --save
// let store = createStore(todo,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
let store = createStore(todo,applyMiddleware(thunk));
export default store;