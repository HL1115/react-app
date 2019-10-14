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
            [e.target.name]: parseInt(e.target.value===''?0:e.target.value)
        })
    }
    componentDidMount(){
        console.log(this.refs.a);
        this.refs.a.focus();
    }
    render() {
        return (
            <div className={this.state.b+this.state.c>10?'box':''}>
                <label htmlFor="inp">请输入第一个数：</label>
                <input id="inp" name="a" onChange={this.handleChange} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text"/>
                =
                <p>{this.state.a+this.state.b+this.state.c}</p>
                {/* 非受控组件:一次性获取或处理表单元素的值 */}
                {/* 以下两种形式，新版本建议第二种 */}
                <input ref="a" type="text"/>
                <input ref={(inp)=>{this.inp=inp}} type="text"/>
                <button 
                    style={ {color: 'red',fontSize: 100} }
                    onClick={()=>{console.log(this.inp.value)}}>
                    提交
                </button>
            </div>
        )
    }
}
// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，
// 在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，
// 给input标签加上name属性,事件处理函数中写：
// setState({[e.target.name]:e.target.value})