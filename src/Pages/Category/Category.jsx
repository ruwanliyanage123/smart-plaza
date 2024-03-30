import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getDataFromCollection } from '../../Utils/datafetch/getDataFromCollection';
import Loading from '../../components/Loading/Loading';

const Category = () => {
  const [cat, setCat] = useState([]);
  
  useEffect(() => {
    getDataFromCollection("item-categories", setCat); 
  }, []);

  if(cat.length == 0){
    return <Loading />
 }

  return (
    <div className=' px-5p py-1 pt-[100px] w-full h-screen overflow-y-scroll' >
        <div style={{
            boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"
           }} 
           className=' w-full p-2'>
          <h1 className=' text-lg font-bold ml-2 mt-2 mb-5'>Main Categories</h1>
          <div className='grid grid-cols-3 grid-rows-[auto] gap-5'>
            {
             cat.map(({url, title, categoryId}, index)=> (
              <CategoryUnitItems key={index} url={url} title={title} categoryId={categoryId}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Category;

const CategoryUnitItems = ({url, title, categoryId}) =>(
    <Link to={`/category/${categoryId}`}>
    <IconButton sx={{color:'red', padding: '1px', borderRadius:'6px'}}>
        <div style={{
            boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"
        }}
         className=' m-1 w-full py-6 px-3 mt-3 rounded-md border-2 flex flex-col items-center'>
            <img src={url} alt={title} className='rounded-full w-[50px] h-[50px]'/>
            <h2 className='text-xs text-black font-bold'>{title}</h2>
        </div>
    </IconButton>
    </Link>
)
