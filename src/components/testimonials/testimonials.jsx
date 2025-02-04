import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./testimonials.css";

const testimonialsData = [
  {
    image: "https://source.unsplash.com/1600x900/?person1",
    comment:
      "This is the best service I have ever used! Highly recommended to anyone looking for quality work.",
    name: "John Doe",
    role: "Client",
  },
  {
    image: "https://source.unsplash.com/1600x900/?person2",
    comment:
      "Absolutely amazing! The team is professional, and my hair has never looked better.",
    name: "Jane Smith",
    role: "Customer",
  },
  {
    image: "https://source.unsplash.com/1600x900/?person3",
    comment:
      "I trust them completely with my hair care. Always delivering beyond expectations!",
    name: "Sam Wilson",
    role: "Banker",
  },
  {
    image: "https://source.unsplash.com/1600x900/?person4",
    comment:
      "Best decision I ever made! They really listen to your needs and deliver a custom experience.",
    name: "Mia Lee",
    role: "Receptionist",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <h2>What Our Clients Are Saying</h2>
        <p>Read the experiences of some of our happy clients.</p>
      </div>

      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        className="testimonial-slider"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src='/images/IMG_0458.jpg' alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <p className="testimonial-name">&mdash; {testimonial.name}, {testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
