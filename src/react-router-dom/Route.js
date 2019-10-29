import React, { Component } from 'react'
import {Consumer} from './context';

export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        let {path,component:Component} = this.props
                        let {pathname} = value.location;
                        if(path === pathname){
                            return <Component />
                        }
                        return  null;
                    }
                } 
            </Consumer>
        )
    }
}
