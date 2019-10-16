import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    componentDidMount(){
        this.timeId = setInterval(()=>{
            console.log(111);
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                Parent组件
                <Child /> 
            </div>
        )
    }
}
