import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const imgArray = [
    {
        url : 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg',
    },
    {
        url : 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg',
    },
    {
        url : 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg',
    },
    {
        url : 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg',
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
                <AddUnit imgUrl={imgArray[1].url} alt={1} />
            </SwiperSlide>
            <SwiperSlide>
                <AddUnit imgUrl={imgArray[2].url} alt={1} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Ads;

const AddUnit = ({imgUrl, id}) =>(
    <img src={imgUrl} alt={id}/>
)