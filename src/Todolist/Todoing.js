import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <ul>
                {
                    todo.map((item,idx)=><li key={idx}>{item}</li>)
                }
            </ul>
        )
    }
}
