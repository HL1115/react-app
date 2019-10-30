import React, { Component } from 'react'
import store from '../store';
export default class Todoinput extends Component {
    addItem = (e)=>{
        if(e.keyCode === 13){
            let action = {
                type: 'add_todo_item',
                value: e.target.value
            }
            store.dispatch(action);
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.addItem} type="text"/>
            </div>
        )
    }
}
