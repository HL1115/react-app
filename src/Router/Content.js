import React from 'react';
// 无状态组件
export default function Content(props){
    console.log(props)
    return (
        <div>
            {props.children}
            Content
            {/* {props.match.params.id} */}
        </div>
    )
}
