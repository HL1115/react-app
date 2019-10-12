import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <Todoinput />
                <Todoing />
            </div>
        )
    }
}
