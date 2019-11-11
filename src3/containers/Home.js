import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Todoinput/>
                <Todoing/>
            </div>
        )
    }
}
