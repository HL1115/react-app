import React, { Component } from 'react'
import Portal from './Portal';
export default class ParentPortal extends Component {
    handleClick = ()=>{
        console.log('PrentPortalClick');
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <Portal/>
            </div>
        )
    }
}
