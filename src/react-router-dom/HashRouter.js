import React, { Component } from 'react'
import {Provider} from './context';

export default class HashRouter extends Component {
    constructor(){
        super();
        this.state = {
            location: window.location.hash.slice(1) || '/'
        }
    }
    componentDidMount(){
        window.location.hash = window.location.hash.slice(1) || '/'
        window.addEventListener('hashchange',()=>{
            this.setState({
                location: window.location.hash.slice(1)
            })
        })
        // window.onhashchange = ()=>{
        //     this.setState({
        //         location: window.location.hash.slice(1)
        //     })
        //     console.log(window.location.hash)
        // }
    }
    render() {
        return (
            <Provider value={this.state}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}
