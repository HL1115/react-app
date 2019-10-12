import React, { Component } from 'react'

export default class Todoinput extends Component {
    // constructor(){
    //     super();
        // this.handleInput = this.handleInput.bind(this);
    // }
    handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleInput} type="text"/>
            </div>
        )
    }
}
