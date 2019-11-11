import React, { Component } from 'react'
import {con2} from './Context'

export default class Child extends Component {
    render() {
        // console.log(this.context)
        return (
            <div>
                Child组件
                <div>{this.context}</div>
                {/* <con.Consumer>
                    {
                        (id)=><div>{id}</div>
                    }
                </con.Consumer> */}
            </div>
        )
    }
}
Child.contextType = con2;