
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
export const log = (value)=>(
    {
        type: types.LOGIN_SUCCESS,
        value
    }
)
// 异步action
export const logFetch = (value)=>{
    return (dispatch)=>{
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                let userInfor = {
                    loginname: res.data.loginname,
                    score: res.data.score
                }
                // dispatch(log(userInfor))
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    value:userInfor
                })
                // props.history.push('/');
            })
    }
}