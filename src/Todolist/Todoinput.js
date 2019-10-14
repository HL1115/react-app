import React, { Component } from 'react'
// 受控组件：value值被react控制的表单元素
// 可以实时获取表单元素的值（表单验证）/写法相对麻烦
// 
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a:'',
            b:'',
            c:''
        }
    }
    handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input name="a" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text"/>
                =
                <p></p>
                <button>提交</button>
            </div>
        )
    }
}
