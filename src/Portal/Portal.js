import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Portal extends Component {
    handleClick = ()=>{
        console.log('portalClick');
    }
    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <h1 onClick={this.handleClick}>Portal</h1>
                </div>,
                document.body
            )
        )
    }
}
