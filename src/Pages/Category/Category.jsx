import React from 'react'

const Category = () => {
  return (
    <div className=' px-5p py-1 pt-[100px] w-full h-screen overflow-y-scroll' >
        <div style={{
            boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px"
        }} className=' w-full p-2 grid grid-cols-3 grid-rows-[auto] gap-5'>
           <CategoryItems />
           <CategoryItems />
           <CategoryItems />
           <CategoryItems />
           <CategoryItems />
           <CategoryItems />
        </div>
    </div>
  )
}

export default Category;

const CategoryItems = () =><div className=' w-full rounded-md border-2 border-pink-600 flex flex-col items-center'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s' alt='category item'/>
    <h2>Category Name</h2>
</div>