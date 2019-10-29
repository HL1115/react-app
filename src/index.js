import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Link,Redirect} from './react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Nomatch from './containers/Nomatch';

ReactDOM.render(
    <Router>
        <div>
            <Link to="/home">首页</Link>
            <Link to="/about">about</Link>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/home/:id' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/nomatch' component={Nomatch}/>
                <Redirect to='/nomatch'/> 
            </Switch>

        </div>
        
    </Router>,
    document.getElementById('root')

)

// ReactDOM.render(
//     <Router>
//         <div>
//             <div>
//                 <Link to='/home'>首页</Link>
//                 <Link to='/about'>about</Link>
//             </div>
//             <div>
//                 <Route path='/home' component={Home}/>
//                 <Route path='/about' component={About}/>
//             </div>
//         </div>
//     </Router>,
//     document.getElementById('root')
// )