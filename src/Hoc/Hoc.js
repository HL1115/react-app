import React, { Component } from 'react'
let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
function hoc(Com,url){
    class Fetch extends Component{
        constructor(){
            super();
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            fetch(url,{method:'post'})
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data: res.result
                    })
                })
        }
        render(){
            return <Com data={this.state.data}/>
        }
    }
    return Fetch;
}
class Music extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map(
                        (item)=><li>{item.title}</li>
                    )
                }
            </ul>
        )
    }
}
class Music2 extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map(
                        (item)=><p>{item.title}</p>
                    )
                }
            </ul>
        )
    }
}
let Mymusic = hoc(Music,url);
let Mymusic2 = hoc(Music2,url);
export default class Hoc extends Component {
    render() {
        return (
            <div>
               <Mymusic/> 
               <Mymusic2/> 
            </div>
        )
    }
}
