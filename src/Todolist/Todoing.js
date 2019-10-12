import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <ul>
                {
                    todo.map(item=><li>{item}</li>)
                }
            </ul>
        )
    }
}
