import React,{Component,useState,useEffect} from 'react';
import {render} from 'react-dom';

// hooks(代替类组件的一些功能)
// 声明组件(两种方式)
// 函数组件（无状态组件，没有生命周期，适合做UI组件）
// 属性（props）是只读的，不能修改
// function Title(props){
//     return <h1>hello{props.hook}</h1>;
// }

// 声明一个类组件（state是类组件特有的，只能在当前组件用，存储当前组件的数据）
// 声明一个组件，点击按钮，实现加1的功能
// class Counter extends Component{
//     constructor(){
//         super();
//         this.state={
//             num:0
//         }
//     }
//     add = ()=>{
//         // Object.assign({},{name:1},{name:2})
//         // for(var i=0;i<10;i++){
//             this.setState((state)=>{
//                 return {
//                     num: state.num + 1
//                 }
//             })
//         // }
//     }
//     render(){
//         return (
//             <div>
//                 <p>{this.state.num}</p>
//                 <button onClick={this.add}>点击按钮+1</button>
//             </div>
//         )
//     }
    
// }

// hook只能在函数组件内用
// useState
function Counter(){
    let [num,setNum] = useState(0);
    function add(){
        // for(var i=0;i<10;i++){
            setNum((n)=>{
                return n+1
            });
        // }
    }
    return (
        <div>
            <p>{num}</p>
            <button onClick={add}>点击按钮+1</button>
        </div>
    )
}

// function ShowTime(){

// }
class ShowTime extends Component{
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    // didMount只执行一次
    componentDidMount() {
        this.id = setInterval(()=>{
            this.setState({
                    time: new Date().toLocaleString()
                }
            )
        },1000)
    }
    componentDidUpdate(){

    }
    componentWillMount(){
        clearInterval(this.id)
    }
    render(){
        return <div>
            {this.state.time}
        </div>
    }
}

render(
    <ShowTime/>,
    document.getElementById('root')
)