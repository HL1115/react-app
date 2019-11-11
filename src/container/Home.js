import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Home extends Component {
    constructor(){
        super();
        this.btns = [
            {title:'全部',tab:'all'},
            {title:'精华',tab:'good'},
            {title:'分享',tab:'share'},
            {title:'招聘',tab:'job'},
            {title:'问答',tab:'ask'},
        ]
        this.tab = 'all'
        this.state = {
            data:[],
            tab:'all'
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                console.log(res.data)
                this.setState({
                    data:res.data
                })
            })
    }
    getData = (tab,page=1)=>{
        this.tab = tab;
        // this.setState({
        //     tab:tab
        // })
        let url = 'https://cnodejs.org/api/v1/topics?tab='+tab+'&page='+page;
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.btns.map((item,index)=>(
                            <button onClick={()=>this.getData(item.tab)} key={index}>{item.title}</button>
                        ))
                    }
                </div>
                <div>
                    {
                        this.state.data.map(item=>(
                            <li key={item.id}>
                                <img style={{width:30}} src={item.author.avatar_url} alt=""/>
                                <span>{item.reply_count}</span>/
                                <span>{item.visit_count}</span>
                                <Link to={'/topic/'+item.id}>{item.title}</Link>
                            </li>
                        ))
                    }
                </div>
                <div>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(item=>(
                            <button 
                                onClick={()=>this.getData(this.tab,item)}
                                style={{width:50}}
                                key={item}>
                                    {item}
                            </button>
                        ))
                    }
                </div>
            </div>
        )
    }
}
