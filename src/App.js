import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider';
import NoMatch from './NoMatch';
export default class App extends Component {
    render() {
        return (
            <Router basename="/build">
                <div>
                    <Sider/>
                    <div style={
                        {float:'left',
                        border:'2px solid red',
                        marginLeft: 100}
                    }>
                    <Switch>
                        <Route exact path='/hoc' component={Hoc} />
                            
                        <Route path='/parent' component={Parent} />
                        <Route>
                            <NoMatch/>
                        </Route>
                    </Switch>
                    </div>
                </div>  
            </Router>
        )
    }
}
