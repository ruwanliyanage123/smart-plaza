import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const imgArray = [
    {
        url:'https://static.toiimg.com/thumb/msid-104960488,width-400,resizemode-4/104960488.jpg', 
    }
]

const Ads = () => {
  return (
    <div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-lg overflow-hidden"
        >
            <SwiperSlide>
                <AddUnit imgUrl={imgArray[0].url} alt={1} />
            </SwiperSlide>
            <SwiperSlide>
                <AddUnit imgUrl={imgArray[0].url} alt={1} />
            </SwiperSlide>
            <SwiperSlide>
                <AddUnit imgUrl={imgArray[0].url} alt={1} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Ads;

const AddUnit = ({imgUrl, id}) =>(
    <img src={imgUrl} alt={id}/>
)