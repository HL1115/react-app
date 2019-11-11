import React,{useState,useEffect} from 'react';

export default function Topic(props){
    let [data,setData] = useState('');
    useEffect(()=>{
        let url = 'https://cnodejs.org/api/v1/topic/'+props.match.params.id
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setData(res.data.content)
            })
    },[])
    return <div dangerouslySetInnerHTML={{__html:data}}></div>
}