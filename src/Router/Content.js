import React from 'react';
// 无状态组件
export default function Content(props){
    console.log(props)
    return (
        <div>
            Content{props.match.params.id}
        </div>
    )
}
