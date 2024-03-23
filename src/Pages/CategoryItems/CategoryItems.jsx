import React from 'react'
import { categorySelector } from '../../Store/ReduxSlice/categorySlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IconButton, Rating } from '@mui/material';

const categoryItemArr = [
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 1' 
  },
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 2'

  },
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 3'
  },
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 4'
  },
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 5'
  },
  {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s',
      title:'Category Title 6'
  }
]

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const {categoryId} = useParams(); 
  const [categoryTitle] = category.filter((ele)=>ele.id===categoryId)
  return (
    <div className=' px-5 py-[100px] w-full h-screen overflow-y-scroll' >
        <h1 className='text-lg  mt-2 ml-2 mb-3'>{categoryTitle.title}</h1> 
        <div className='w-full grid grid-cols-3 grid-rows-[auto] gap-4'>
            {
              categoryItemArr.map(({url, title}, index) => (
                 <CategoryItemUnit key={index} imageUrl={url} title={title}/>
              ))
            }
        </div>
    </div>
  )
}

export default CategoryItems;

const CategoryItemUnit = ({imageUrl, title})=>(
  <IconButton sx={{color:"gray", padding: "1px", borderRadius: "6px"}}>
    <div style={{boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"}} className="w-full ">
      <img src={imageUrl} alt={title} className=' w-full object-contain'/>
      <h3 className=' text-sm font-bold text-black'>{title}</h3>
      <Rating 
          name={imageUrl}
          value={3.5}
          precision={0.1}
          size='small'
          readOnly/>
    </div>
  </IconButton>
)

