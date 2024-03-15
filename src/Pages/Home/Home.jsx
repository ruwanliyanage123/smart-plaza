import React from 'react'
import Ads from './Ads'
import Product from './Product'

const Home = () => {
  return (
    <div className=' px-5p py-1 pt-[100px] w-full h-screen overflow-y-scroll' >

       <Ads />
       <Product title="trending products" rowsCount={1} slidesPerView={2}/>
       <Product title="Eletric Items" rowsCount={1} slidesPerView={2}/>
       <Product title="Computer Items" rowsCount={1} slidesPerView={2}/>
    </div>
  )
}

export default Home