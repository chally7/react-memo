import React, { useState } from 'react'
import axios from 'axios';

function MemoInsert({data,setData}) {
    const [state,setState] = useState(false);

    function insert(e){
        // console.log(e.target.subject.value);
        // console.log(e.target.content.value);
        // console.log(
        //     date.getFullYear(),
        //     date.getMonth(),
        //     date.getDate(),
        //     ["일",'월','화','수','목','금','토'][date.getDay()],

        //     date.getHours(),
        //     date.getMinutes(),
        //     date.getSeconds(),
            
        //     '20'.padStart(2,'0'),

        //     date.toISOString().split('T')[0]
        // )
        e.preventDefault();        

        let date = new Date();
            date = date.toISOString().split('T')[0];

        const formdata = new FormData(e.target);
        formdata.append('id', Date.now()  );
        formdata.append('date',date);

        const entries = Object.fromEntries(formdata)
        
        axios.post("http://localhost:3000/memo",entries)
        .then(res=>{
            setData(res.data);
        })


        e.target.reset();
        e.target.subject.focus();
        setState(false)
    }

  return (
    <>
        <button onClick={()=>{setState(true)}}>글쓰기</button>
        <div className={`insert ${state ? 'active' : ''}`}>
            <form onSubmit={insert}>
                <input type="text" name="subject" />
                <textarea name="content"></textarea>
                <input type="submit" value="저장" />
            </form>
        </div>
    </>
  )
}

export default MemoInsert