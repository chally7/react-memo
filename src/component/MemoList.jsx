import React from 'react'

function MemoList({data}) {
  return (
    <div className='list'>
        {
            data.map((item)=>
                <div key={item.id}>
                    <div>{item.date}</div>
                    <b>{item.subject}</b>
                    <p>{item.content}</p>
                </div>
            )
        }
    </div>
  )
}

export default MemoList
