import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 函数声明组件
function ShowTime(props){
    console.log(props);
    return (<Fragment>
                <div>{props.name}{props.age}</div>
                <div>
                    {new Date().toLocaleString()}
                </div>
            </Fragment>
        )
}
var num = 100;
ReactDOM.render(
    <ShowTime age={num} name="zhangsan"/>,
    document.getElementById('root')
)





// 显示当前系统时间
// function showTime(){
//     var ele = <div>
//                 <p>当前时间是：</p>
//                 <div>{new Date().toLocaleString()}</div>;
//             </div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// } 
// showTime();
// setInterval(showTime,1000);





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
// 页面渲染过程
// 请求HTML页面、浏览器HTML解析器解析html文件、生成DOM树
// link引入css文件、css解析器解析CSS，生成CSS对象模型，CSSOM和DOM tree结合生成一个render tree，最后浏览器绘制页面

// 页面回流（重排reflow）：DOM结构变化、内容变化、大小、位置的变化、显示的变化
// 页面重绘（repaint）：颜色的变化（背景色、字体颜色、边框颜色）

// 1、先用变量进行dom处理，最后一次渲染
// console.time('time');
// var div = document.getElementById('root');
// var str = ''
// for(var i=0;i<1000;i++){
//     str += '<p>'+i+'</p>';
// }
// div.innerHTML = str;
// console.timeEnd('time');
// 2、对于样式处理,声明一个css类
var div = document.getElementById('root');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.background = 'red';

div.className = 'active';
// 3、offsetLeft、offsetWidth等都会引起回流，要慎用
// console.log(div.offsetLeft);
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid + 'px';
// },100)
// 4、文档碎片（内存中的一个变量）