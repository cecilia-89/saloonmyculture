import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "./hero.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Wear your beauty with pride</h1>
        <p>At Salon My-Culture, we believe in embracing your unique style and expressing your individuality through the artistry of your hair and nails.</p>
      </div>
      
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: true}}
      >
        <SwiperSlide>
          <div className="hero-image">
            <img src="/images/WhatsApp Image 2025-02-04 at 19.37.15_e3aa8ca3.jpg"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-image">
            <img src="/images/8ddfc54557334e96a2eac37ab491e1c5.avif"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;