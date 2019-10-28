import React, { Component } from 'react'
// 数据请求：Axios
import Axios from 'axios';
// import {fetch} from 'whatwg-fetch';
export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        console.log(fetch)
        let url = 'https://api.apiopen.top/musicRankingsDetails?type=1'
        // 默认是get请求，可配置第二个参数，配置请求的信息
        fetch(url,{method:'post'})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.result
                })
            })
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        //     .then((res)=>{
        //         console.log(res);
        //         this.setState({
        //             data: res.data.result
        //         })
        //     })
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
