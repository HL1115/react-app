import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sider/>
                    <div style={
                        {float:'left',
                        border:'2px solid red',
                        marginLeft: 100}
                    }>
                        <Route path='/hoc' component={Hoc} />
                        <Route path='/parent' component={Parent} />
                    </div>
                </div>  
            </Router>
        )
    }
}
