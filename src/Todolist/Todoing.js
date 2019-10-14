import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
Todoing.propTypes = {
    todo: PropTypes.array,
    del: PropTypes.func
}
Todoing.defaultProps = {
    todo: [1,2,3,4,4]
}