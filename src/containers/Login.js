import React from 'react';

export default function Login(){
    function login(){
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
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