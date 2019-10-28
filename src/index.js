import React,{Component} from 'react';
import {render} from 'react-dom';

// hooks(代替类组件的一些功能)
// 声明组件
// 函数组件（无状态组件，没有生命周期，适合做UI组件）
// 属性（props）是只读的，不能修改
function Title(props){
    return <h1>hello{props.hook}</h1>;
}

// 声明一个组件，点击按钮，实现加1的功能
// 声明一个类组件（state是类组件特有的，只能在当前组件用，存储当前组件的数据）
class Counter extends Component{
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    render(){
        return (
            <div>
                <p>{num}</p>
                <button onClick={add}>点击按钮+1</button>
            </div>
        )
    }
    
}


render(
    <Counter/>,
    document.getElementById('root')
)