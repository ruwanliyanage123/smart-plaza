import React from 'react'
import { categorySelector } from '../../Store/ReduxSlice/categorySlice';
import { useSelector } from 'react-redux';

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  console.log(category)
  return (
    <div className=' px-5p py-1 pt-[100px] w-full h-screen overflow-y-scroll' >
        category Items
    </div>
  )
}

export default CategoryItems