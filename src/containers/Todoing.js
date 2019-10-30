import React, { Component } from 'react'
import store from '../store';

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            todos: store.getState()
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                todos: store.getState()
            })
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.todos.map((item,idx)=>(
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul>
        )
    }
}
