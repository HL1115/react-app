import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider';
import NoMatch from './NoMatch';
import Content from './Router/Content';
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
                            
                        <Route path='/parent'>
                            <Parent/>
                        </Route>
                        {/* <Redirect from='/old' to='/hoc'/> */}
                        <Route path='/old' render={()=><Redirect to='/hoc'/>}/>
                        <Route path='/content/:id' component={Content}/>
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
