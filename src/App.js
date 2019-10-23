import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">

                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </Router>
        )
    }
}
