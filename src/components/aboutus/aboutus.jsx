import React from "react";
import 'swiper/css';
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h2>Welcome to Salon my culture</h2>
        <p>
          We are a passionate team dedicated to providing the best services to
          our clients. Our goal is to help you achieve success with our expert
          solutions, innovative ideas, and personalized support. Whether you are
          a business, individual, or organization, we are here to help you grow.
        </p>
        <p>
          With years of experience in our industry, we have built a reputation
          for delivering high-quality results. Our mission is to make your
          experience exceptional and leave you with lasting value.
        </p>
      </div>
      <div className="about-video">
        <video autoPlay muted loop>
            <source src="/images/IMG_0234.MP4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default AboutUs;
