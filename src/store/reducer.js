import {combineReducers} from 'redux';
let todos = [1,2,3];

function todo(state=todos,action){

    switch (action.type) {
        case 'add_todo_item':
            return [...state,action.value]
        default:
            return state;
    }
}
let inputValue = 'todolist';
function changeValue(state=inputValue,action){
    switch(action.type){
        case 'change_input_value' :
            return action.value;
        default :
            return state;
    }
}

let reducer = combineReducers({
    todo,changeValue
})
export default reducer;