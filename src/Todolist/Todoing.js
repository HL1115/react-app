import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <ul>
                {
                    todo.map((item,idx)=>
                        <li key={idx}>
                            {item}---<button onClick={()=>this.props.del(idx)}>删除</button>
                        </li>)
                }
            </ul>
        )
    }
}
