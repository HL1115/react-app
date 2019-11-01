
import * as types from './actionTypes';

export function addItem(value){
    return {
        type: types.ADD_TODO_ITEM,
        value
    }
}
export function delItem(index){
    return {
        type: types.DEL_ITEM,
        index
    }
}
export const changeValue = value=>(
    {
        type: types.CHANGE_INPUT_VALUE,
        value
    }
)