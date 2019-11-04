import React from 'react';
import {connect} from 'react-redux';
import {log} from '../actions';
function Login(props){
    function login(){
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                let userInfor = {
                    loginname: res.data.loginname,
                    score: res.data.score
                }
                props.dispatch(log(userInfor))
                // props.history.push('/');
            })
        
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