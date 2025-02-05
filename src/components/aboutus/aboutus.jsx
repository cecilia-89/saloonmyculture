import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import "./aboutus.css";


import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="about-us">
        <div className="about-content">
          <div>
            <h2>Welcome to Salon My Culture</h2>
            <p>
              Welcome to Salon My-Culture Beauty Salon and Spa, the ultimate destination for luxury beauty and grooming in Abuja. Located in <span>Wuse 2, Abuja</span>, we are a top-rated salon offering a full suite of beauty, hair, spa, and grooming services for men and women.
            </p>
            <p>
             Whether you need a professional hair/wig installation in Abuja, a nail or a professional nail, beauty salon near you, expert makeup artists in Abuja, or a serene spa experience, we offer unmatched services designed for elegance and comfort.
            </p>
          </div>
        </div>

        <div className="about-images">
          <Swiper
            effect={'fade'}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
            modules={[EffectFade, Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img src="/images/WhatsApp Image 2025-02-04 at 19.37.13_78e5ce4a_1.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/WhatsApp Image 2025-02-04 at 19.37.15_e3aa8ca3.jpg"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>
        <h3>Our team of top-tier professionals specializes in:</h3>

        <ul>
          <li> 
            &mdash;
            <div><span>Hair fixing, Wig installation & Styling</span> – From precision men’s haircuts to stylish women’s hair transformations</div>
          </li>

          <li>
            &mdash;
            <div><span>Nail Care</span> – Trendy manicures, pedicures, and nail art at the best nail salon in Abuja</div>
          </li>

          <li>
            &mdash;
            <div><span> Bridal Makeup & Events</span> – Professional makeup artists in Abuja for weddings, photoshoots & special events</div>
            </li> 

          <li>
            &mdash;
            <div><span>Massage & Spa Services</span> – Relaxing spa in Abuja offering deep tissue, Swedish, and hot stone massages</div>
          </li>

          <li>
            &mdash;
            <div><span>Barbing Services</span> – Precision grooming at the best barbing salon in Asokoro, Maitama, and Garki</div>
          </li>

          <li>
            &mdash;
            <div><span>Hair Extensions & Braiding</span> – African hair braiding and premium extensions for all hair types</div>
          </li>
        </ul>
      </div>

      <div className="about-under">
        <p>Our reputation as Abuja’s best beauty salon has earned us a place on <a href="https://ng.worldorgs.com/">NG.WorldOrgs.com</a>, <a href="httpss://2vhair.ng/">2VHair.ng</a>, <a href="https://cybo.com/">Cybo.com</a>, <a href="https://finelib.com/">Finelib.com</a>, <a href="https://BusinessList.com.ng">BusinessList.com.ng</a>, and <a href="https://ConnectNigeria.com">ConnectNigeria.com</a></p>.

        <p>
          Follow us on <a href="https://www.instagram.com/salonmyculture.ng?igsh=Ymozb2hkaWozNGRl&utm_source=qr">Instagram</a> and <a href="https://www.facebook.com/share/14ry2SjJR9/?mibextid=wwXIfr">Facebook</a> to stay updated! Salon My-Culture: The Best Luxury Beauty Salon &Spa in Abuja.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
