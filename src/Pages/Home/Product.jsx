import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { IconButton, Rating } from '@mui/material';
import './style.css';

const productArray = [
    {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaeRIzP4QwBkSDK3fsuxjmlRn0EOu5WFLNPCOwgjcGw&s', 
        price:100, 
        producTitle:'product title', 
    },
]

const Product = ({title, rowsCount, slidesPerView}) => {
  return (
    <section style={{
      boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}>
        <h1 className=' text-lg font-bold ml-2 mt-2 mb-5'>{title}</h1>
        <Swiper
            slidesPerView={Number(slidesPerView)}
            grid={{
            rows: Number(rowsCount),
            }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            mousewheel={true}
            modules={[Grid, Pagination]}
            className="mySwiper"
        > 
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
        <SwiperSlide>
           <ProductUnit imageUrl={productArray[0].imageUrl} price={productArray[0].price} producTitle={productArray[0].producTitle} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Product

const ProductUnit = ({imageUrl, price, producTitle, id})=>(
    <IconButton sx={{
        padding: '4px',
        borderRadius: '5px',
        margin: "3px",
        marginBottom: "30px"
     }}>
        <div className=' w-full'>
            <img src={imageUrl} alt={`product_unit_${id}`}/>
            <h3 className='text-sm font-semibold text-stone'>{producTitle}</h3>
            <Rating name={imageUrl} value={3} precision={0.5} size='small' readOnly/>
            <h3 className='text-sm font-semibold text-stone'>Rs.{price}/-</h3>
        </div>
    </IconButton>
)