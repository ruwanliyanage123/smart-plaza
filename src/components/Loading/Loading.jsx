import React from 'react'
import style from './loding.module.css';

const Loading = () => {
  return (
    <div className='relative top-0 left-0 w-screen h-screen bg-white flex justify-center items-center '>
        <div class={style.smart_plazza_dots}></div>
        
    </div>
  )
}

export default Loading