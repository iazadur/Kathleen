import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../assert/slider1.png'

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = () => {
    return (
        <div className="container m-auto">
            <div className="grid grid-cols-3">
                <div className="flex justify-center items-center">
                    <div className="">
                        <h1 className='text-5xl font-semibold'>Lorem Ipsum is simply dummy Lorem </h1>
                        <p className='text24'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sin</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        pagination={{ clickable: true }}

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {Array.from({ length: 7 }).map((_, id) =>
                            <SwiperSlide>
                                <img src={slider} alt="" />
                            </SwiperSlide>
                        )}


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider