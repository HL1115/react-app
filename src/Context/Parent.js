import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    render() {
        return (
            <div>
                Parent组件
                <Child /> 
            </div>
        )
    }
}
