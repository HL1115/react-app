import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css';
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3],
            a:100,
            b:200
        }
        // 深拷贝\浅拷贝
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 = {c:300};
        // var o = {...obj};
        // var o = Object.assign({},obj,obj1);
        // 深拷贝
        // var o = JSON.parse(JSON.stringify(obj));
        // o.b[0] = 200;
        // console.log(o===obj);
        // 遍历对象
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item)
        //     console.log(obj[item])
        // })

    }
    addItem = (data)=>{
        // this.state.todo.push(data);
        this.setState({
            todo: [...this.state.todo,data]
        },()=>{
            localStorage.setItem('',JSON.stringify(this.state.todo))
        })
    }
    delItem = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        
        // 2、setState是异步执行
        this.setState((state,props)=>{
            // let todo = [...state.todo];
            // todo.splice(idx,1);
            console.log(state.todo);
            return {
                todo: state.filter((item,index)=>idx!==index)
            }
        })

        // 在setState里获取state可能会出错，不是你想要的值
        // 可以像上面那样，把第一个参数写成函数，解决该问题
        // this.setState({
        //     todo: this.state.num + 100
        // },()=>{
        //     console.log(this.state.todo)
        // })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
