import React,{Fragment,Component} from 'react';
// 类定义组件
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            a: 100,
            b: 200
        }
        console.log('constructor')
        setTimeout(()=>{
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }
        return false;
    }
    componentDidUpdate(preProps,preState,data){
        console.log('didupdate');
        console.log(preState)
        console.log(this.state.time)
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');
        return {name: this.state.a}
    }
    componentDidMount(){
        console.log('didmount');
    }
    render(){
        console.log('render');
        var {name,age} = this.props;
        return (
            <Fragment>
                {/* 条件渲染 */}
                {name.length>5?<div>姓名：{name}</div>:''}
                {name.length>5&&<div>姓名：{name}</div>}
                <div>{this.state.time}</div>
                {/* 循环渲染 */}
                <div>
                    {
                        age.map((item,index)=>{
                            if(index%2 === 0){
                                return <p key={index}>{item}</p>
                            }
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
// 默认导出：只能导出一次，被引入时可以重命名
// export default ShowTime;

// 命名导出：可以导出多个，被引入时与导出的名一致
// export {ShowTime};