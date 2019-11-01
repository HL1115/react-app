import {combineReducers} from 'redux';
import {DEL_ITEM,ADD_TODO_ITEM,CHANGE_INPUT_VALUE} from '../actions/actionTypes';


let todos = [1,2,3];

function todo(state=todos,action){
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state,action.value];
        case DEL_ITEM:
            return state.filter((item,idx)=>{
                return action.index !== idx;
            })
            // let newState = [...state];
            // newState.splice(action.index,1);
            // return newState;
        default:
            return state;
    }
}
let inputValue = 'todolist';
function changeValue(state=inputValue,action){
    switch(action.type){
        case CHANGE_INPUT_VALUE :
            return action.value;
        default :
            return state;
    }
}

let reducer = combineReducers({
    todo,changeValue
})
export default reducer;