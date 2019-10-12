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
    addItem(){
        console.log(123);
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing todo={this.state.todo}/>
            </div>
        )
    }
}
