import React from 'react';
import ReactDOM from 'react-dom';

// react技术栈
// jsx语法
// var ele = <h1 class="tit">hello <p>react</p></h1>;
// babel编译，返回一个对象
// var ele = React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'p',
//         {id:'t',class:'tit'},
//         'react')
// );
// ReactDOM.render(ele, document.getElementById('root'));
// 自己封装render函数
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: [
            'hello',
            'react',
            {
                type: 'h1',
                props: {
                    id: 'tit',
                    class: 'tit',
                    children: [
                        'title',
                        'react'
                    ]
                }
            }
        ]
    }
}
function render(obj,container){
    var {type,props} = obj;
    // 文档碎片
    var fragment = document.createDocumentFragment();

    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item]
        }else if(item === 'children'){
            for(var i=0;i<props.children.length;i++){
                // ele.innerHTML += props.children[i];
                if(typeof props.children[i] === 'object'){
                    render(props.children[i],ele);
                }else{
                    var txt = document.createTextNode(props.children[i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fragment.appendChild(ele);
    container.appendChild(fragment);
}
// render(obj,document.getElementById('root'));
// 页面回流（重排reflow）：DOM结构变化、内容变化、大小、位置的变化
// 页面重绘（repaint）：颜色的变化（背景色、字体颜色、边框颜色）
console.time('time');
for(var i=0;i<1000;i++){
    document.getElementById('root').innerHTML += '<p>'+i+'</p>';
}
console.timeEnd('time');