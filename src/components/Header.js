import React from 'react';
import {Link} from 'react-router-dom';  
export default function Header(){

    return (
        <div className='header'>
            <header>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                <div style={{float:'right'}}>
                    <Link>首页</Link>
                    <Link>新手入门</Link>
                    <Link>API</Link>
                    <Link>关于</Link>
                    <Link>注册</Link>
                    <Link>登录</Link>
                </div>
            </header>
        </div>
    )
}