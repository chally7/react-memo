import React, { useEffect, useState } from 'react'
import MemoInsert from '../component/MemoInsert';
import MemoList from '../component/MemoList';
import axios from 'axios';

function Memo() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/memo`,
      {headers: { "Content-Type": "application/json" }}
    )
    .then(res=>{
      setData(res.data);
    })
  },[]);

  return (
    <div>        
        <MemoInsert data={data} setData={setData} />
        <MemoList data={data}/>
    </div>
  )
}

export default Memo