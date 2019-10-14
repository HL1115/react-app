import React, { Component } from 'react'
// 数据请求：Axios
import Axios from 'axios';

export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.data.result
                })
            })
    }
    render() {
        
        return (
            <div>
                <h1>数据请求：</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,idx)=><li key={idx}>
                                    <p>歌名：{item.title}</p>
                                    <p>作者：{item.author}</p>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
