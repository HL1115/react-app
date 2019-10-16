import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'antd';
export default class Sider extends Component {
    render() {
        let style = {float: 'left'}
        return (
            <ul style={style}>
                <Button type="primary" block>按钮</Button>
                <li>
                    <Link to='/hoc'>Hoc</Link>
                </li> 
                <li>
                    <Link to='/parent'>parent</Link>
                </li>
            </ul>
        )
    }
}
