import React, { Component } from 'react'
import store from '../store';

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            todos: store.getState().todo
        }
    }
    componentDidMount() {
        this.subid = store.subscribe(()=>{
            console.log('toding')
            this.setState({
                todos: store.getState().todo
            })
        })
    }
    componentWillUnmount(){
        this.subid();
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
