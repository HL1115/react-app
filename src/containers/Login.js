import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logFetch} from '../actions';
import Button from './Button';
function Login(props){
    // let newLog = bindActionCreators(
    //     logFetch,
    //     props.dispatch
    // )
    return(
        <div>   
            <input type="text"/>
            <input type="password"/>
            <Button log={props.newLog}/>
        </div>
    )
}
let mapStateToProps = (state)=>{}
let mapDispatchToProps = (dispatch)=>{
    return {
        newLog:bindActionCreators(logFetch,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);