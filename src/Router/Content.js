import React from 'react';
// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}
