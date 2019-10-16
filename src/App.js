import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/hoc'>Hoc</Link>
                    <Link to='/parent'>parent</Link>
                    <Route path='/hoc' component={Hoc} />
                    <Route path='/parent' component={Parent} />
                </div>  
            </Router>
        )
    }
}
