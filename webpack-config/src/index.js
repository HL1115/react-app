
import './index.less'
import React from 'react';
import {render} from 'react-dom';
import img from './imgs/react.jpg';

let app = <div>
    <img src={require('./imgs/react.jpg')} alt=""/>
    <h1>hello world</h1>
</div>;
render(app,document.getElementById('root'));



// var a = 100;
// console.log(a);
// console.log(a);
