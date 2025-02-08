import React from 'react'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { services } from '../../../utils/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import "./services.css";


const Services = () => {
  return (
    <section className="services">
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: true}}
            className="gallery-mySwiper"
        >
            <div className='service-object-wrapper'>
                {services.map((service) => (
                        <SwiperSlide key={service.title}>
                            <div className='service-object'>
                                <div>
                                    <h1>{service.title}</h1>
                                    <p>{service.header}</p>
                                    <Link to={`services/${service.slug}`}><button>SEE PRICE LIST</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
            </div>
         </Swiper>
    </section>
  )
}

export default Services