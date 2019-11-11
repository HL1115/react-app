import React, { Component } from 'react'
import {Consumer} from './context';
import pathToReg from 'path-to-regexp';

export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        let pathname = value.location.pathname;
                        let children = this.props.children;

                        for(var i=0;i<children.length;i++){
                            let reg = pathToReg(
                                children[i].props.path||'',
                                [],
                                {end:children[i].props.exact||false}
                            )
                            if(reg.test(pathname)){
                                return children[i]
                            }
                        }
                    }
                }
            </Consumer>
        )
    }
}
