import { IconButton } from '@mui/material';
import React, { useRef } from 'react'

const itemImageArr = [
  'https://wallpaperaccess.com/full/2676.jpg',
  'https://wallpaperaccess.com/full/2675.jpg',
  'https://wallpaperaccess.com/full/26431.jpg',
  'https://wallpaperaccess.com/full/2674.jpg'
]

const Itempage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  return (
    <div className='px-5 py-[100px] w-full h-screen overflow-y-scroll'>
        <h1 className=' text-lg font-bold px-3'>Item Title</h1>
        <img ref={mainImageRef} src={itemImageArr[0]} alt="main image" className=' w-full object-contain rounded-md'/>
        <div className=' w-full mt-5 grid grid-cols-4 text-center grid-rows-2'>
            {
              itemImageArr.map(
                (ele, index)=>(
                    <IconButton key={index} sx={{padding:'10', borderRadius: '2px'}} 
                    onClick={()=> {
                        subImageRef.current[index].style.border = '3px solid gold';
                        mainImageRef.current.src = subImageRef.current[index].src
                        for(let i=0; i<itemImageArr.length; i++){
                          if(i!==index){
                             subImageRef.current[i].style.border = "none";
                          }
                        }
                      }
                    }>                 
                        <img 
                          ref={(refEle)=>subImageRef.current[index]=refEle}
                          name={`item image ref : ${index}`}
                          src={ele} 
                          key={index} 
                          alt={ele}  
                          className=' w-full object-contain rounded-sm gap-4'/>
                    </IconButton>
                )
              )  
            }
        </div>
    </div>
  )
}

export default Itempage