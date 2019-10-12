import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }
    }
    render() {
        return (
            <div>
                <Todoinput />
                <Todoing todo={this.state.todo}/>
            </div>
        )
    }
}
