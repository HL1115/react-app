import React,{Component,useState,useEffect} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
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
    // useState可以写多个,写在函数组件的最顶层，不能写在条件语句
    let [num,setNum] = useState(0);
    let [str,setStr] = useState('a');
    let [arr,setArr] = useState([]);

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
// class ShowTime extends Component{
//     constructor(){
//         super();
//         this.state = {
//             time: new Date().toLocaleString()
//         }
//     }
//     // didMount只执行一次
//     componentDidMount() {
//         this.id = setInterval(()=>{
//             this.setState({
//                     time: new Date().toLocaleString()
//                 }
//             )
//         },1000)
//     }
//     componentDidUpdate(){

//     }
    
//     componentWillUnmount(){
//         clearInterval(this.id)
//     }
//     render(){
//         return <div>
//             {this.state.time}
//         </div>
//     }
// }



function ShowTime(props){
    let [time,setTime] = useState(0)
    // let [topic,setTopic] = useState([])
    // useEffect能代替componentDidMount和componentDidUpdate
    // 还能代替componentWillUnmount
    // useEffect可以写多个,按需求分开
    let page = props.match.params.page
    // useEffect(()=>{
    //     fetch('https://cnodejs.org/api/v1/topics?page='+page)
    //         .then(res=>res.json())
    //         .then(res=>{
    //             setTopic(res.data);
    //             console.log(res);
    //         })
    // },[page]);

    let topic = useFetch('https://cnodejs.org/api/v1/topics?page='+page,[page]);

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime( time=>time+1 )
        },1000)

        return ()=>{
            console.log('unmount')
            clearInterval(id)
        }
    },[])

    return <div>
        {time}
        {
            topic.map((item)=><p>{item.title}</p>)
        }
    </div>
}

// 自定义hook
// HOC高阶组件

function useFetch(url,d){
    let [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setData(res.data)
            })
    },[...d])
    return data;
}

render(
    <Router>
        <div>
            <ul>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/showtime/1'>Showtime1</Link></li>
                <li><Link to='/showtime/2'>Showtime2</Link></li>
            </ul>
            <div>
                <Route path='/counter' component={Counter} />
                <Route path='/showtime/:page' component={ShowTime} />
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)