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
    addItem = (data)=>{
        // this.state.todo.push(data);
        this.setState({
            todo: [...this.state.todo,data]
        })
    }
    delItem = (idx)=>{
        let todo = [...this.state.todo];
        todo.splice(idx,1);
        this.setState({
            todo: todo
        })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
