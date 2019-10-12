import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        if(e.keyCode === 13){
            console.log(e.target.value);
            this.props.add();
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleInput} type="text"/>
            </div>
        )
    }
}
