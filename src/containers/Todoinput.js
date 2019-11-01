import React, { Component } from 'react'
import store from '../store';
import {changeValue,addItem} from '../actions';
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            value: store.getState().changeValue
        }
    }
    addItem = (e)=>{
        if(e.keyCode === 13){
            // let action = {
            //     type: 'add_todo_item',
            //     value: e.target.value
            // }
            store.dispatch(addItem(e.target.value));
        }
    }
    // 2、监听state的变化，变化时执行当前组件的setState
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                value: store.getState().changeValue
            })
        })
    }
    handleChange = (e)=>{
        // 1、输入时派发action，改变store里的state
        store.dispatch(changeValue(e.target.value))
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.value} onKeyDown={this.addItem} type="text"/>
            </div>
        )
    }
}
