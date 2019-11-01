import React, { Component } from 'react'
import store from '../store';
import {DEL_ITEM} from '../actions/actionTypes';

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
    delItem = (index)=>{
        store.dispatch({
            type: DEL_ITEM,
            index
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.todos.map((item,idx)=>(
                        <li key={idx}>
                            {item}----
                            <button onClick={()=>{this.delItem(idx)}}>删除</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
