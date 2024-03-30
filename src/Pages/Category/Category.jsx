import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getDataFromCollection } from '../../Utils/datafetch/getDataFromCollection';

// const categoryArr = [
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 1',
//         categoryId: 'category1'    },
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 2',
//         categoryId: 'category2',
//     },
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 3',
//         categoryId: 'category3',
//     },
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 4',
//         categoryId: 'category4',
//     },
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 5',
//         categoryId: 'category5',
//     },
//     {
//         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
//         title:'Category Title 6',
//         categoryId: 'category6',
//     }
// ]

const Category = () => {
  const [cat, setCat] = useState([]);

  return (
    <div className=' px-5p py-1 pt-[100px] w-full h-screen overflow-y-scroll' >
        <div style={{
            boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"
           }} 
           className=' w-full p-2'>
          <h1 className=' text-lg font-bold ml-2 mt-2 mb-5'>Main Categories</h1>
          <button onClick={() => getDataFromCollection("item-categories", setCat)}>see more...</button>
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
