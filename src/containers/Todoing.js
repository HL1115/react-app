import React, { Component } from 'react'
import store from '../store';
import {DEL_ITEM} from '../actions/actionTypes';
import {connect} from 'react-redux';

class Todoing extends Component {
    delItem = (index)=>{
        this.props.dispatch({
            type: DEL_ITEM,
            index
        })
    }
    render() {
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map((item,idx)=>(
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

let mapStateToProps = (state)=>{
    return {
        todos: state.todo
    }
}

export default connect(mapStateToProps)(Todoing);