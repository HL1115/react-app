import React from 'react';

export default function Button(props){
    function login(){
        props.log();
        // redux-thunk允许dispatch一个函数，
        // 在函数里可以执行异步的操作，函数的参数是dispatch
        // props.dispatch(logFetch());
    }
    return (
        <button onClick={login}>登录</button>
    )
}