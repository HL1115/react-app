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
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
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
                {
                    this.state.data.map((item)=>(
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
