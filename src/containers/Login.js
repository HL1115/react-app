import React from 'react';
import {connect} from 'react-redux';
import {logFetch} from '../actions';
function Login(props){
    function login(){
        // redux-thunk允许dispatch一个函数，
        // 在函数里可以执行异步的操作，函数的参数是dispatch
        props.dispatch(logFetch());
    }
    return(
        <div>   
            <input type="text"/>
            <input type="password"/>
            <button onClick={login}>登录</button>
        </div>
    )
}
export default connect()(Login);