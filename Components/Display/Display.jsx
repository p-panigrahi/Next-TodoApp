"use client"
import React from 'react'


const Display = ({mainTask , setMainTask}) => {
  let renderTask = <h1 className='text-center text-white font-semibold text-xl'>No Task Available</h1>
if(mainTask.length > 0){
  renderTask = mainTask.map((item,i)=>{
    return (
      <li key={i} className='flex items-center justify-around mb-8'>
        <div className='flex items-center justify-around w-2/3 mb-5'>
          <h3 className='text-white font-semibold text-xl'>{item.title}</h3>
          <h4 className='text-white font-medium text-sm'>{item.desc}</h4>
        </div>
        <button className='text-white bg-red-500 text-xl px-5 py-3 rounded-lg font-bold' onClick={()=>{
          deleteHandler(i)
        }}>Delete</button>
      </li>
    )
  });
}
const deleteHandler = (i) =>{
let copyTask = [...mainTask];
copyTask.splice(i,1);
setMainTask(copyTask);
}
  return (
    <>
      <div className='p-8 bg-slate-600'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Display