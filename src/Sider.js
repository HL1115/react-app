import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Sider extends Component {
    render() {
        let style = {float: 'left'}
        return (
            <ul style={style}>
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
