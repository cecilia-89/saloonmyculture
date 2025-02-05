import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./services.css";


import {Pagination} from 'swiper/modules';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Gallery</h2>
      </div>

      <div className="services-images"> 
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="services-mySwiper"
        >
          <SwiperSlide>
            <img src="/images/WhatsApp Image 2025-02-04 at 19.37.28_53d94060_1.jpg"/>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/WhatsApp Image 2025-02-04 at 19.37.29_a7b5764d_1(1).jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <video src="/images/IMG_0234.MP4" autoPlay muted loop></video>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0090.jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0393.JPG" alt=""/>
          </SwiperSlide>

           <SwiperSlide>
            <video src="/images/WhatsApp Video 2025-02-04 at 19.38.25_68c51a55.mp4" autoPlay muted loop></video>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0207.jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0268.jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0178.jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <video src="/images/WhatsApp Video 2025-02-04 at 19.40.06_5a8eddac.mp4" autoPlay muted loop></video>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0020.jpg" alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/IMG_0283.JPG" alt=""/>
          </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Services;
