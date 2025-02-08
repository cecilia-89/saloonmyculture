import React from "react";
import { testimonialsData } from "../../../utils/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./testimonials.css";



const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <h2>What Our Clients Are Saying</h2>
        <p>Read the experiences of some of our happy clients.</p>
      </div>

      <Swiper
        effect="fade"
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        className="testimonial-swiper"
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-wrapper">
            <SwiperSlide key={index}  className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
                  <p className="testimonial-name">&mdash; {testimonial.name}, {testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
