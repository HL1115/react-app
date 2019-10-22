import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';
export default class Sider extends Component {
    render() {
        let style = {float: 'left'}
        return (
            <ul style={style}>
                <Button type="primary" block>按钮</Button>
                <li>
                    <NavLink activeStyle={{background:'red',color:'#fff'}} to={
                        {pathname:'/hoc',
                        state:{id:100},
                        search:'?user=zhangsan'}
                    }>Hoc</NavLink>
                </li> 
                <li>
                    <NavLink activeStyle={{background:'red',color:'#fff'}} to='/parent'>parent</NavLink>
                </li>
                {
                    [1,2,3,4,5,6,7,8].map((item)=>(
                        <li key={item}>
                            <NavLink activeStyle={
                                {background:'red',
                                color:'#fff'}
                            } to={'/content/'+item}>帖子{item}</NavLink>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
