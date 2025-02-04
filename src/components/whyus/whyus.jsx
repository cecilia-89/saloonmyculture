import React from 'react';
import './whyus.css';

const WhyUs = () => {
  return (
    <section className="why-us" id="whyus">
      <h2>Why Choose Us?</h2>
      <div className="why-us-container">
        <div className="why-us-item">
          <img src="/images/hd3-icon-1.png" alt="Quality" className="why-us-icon" />
          <h3>Top-Notch Quality</h3>
          <p>We prioritize premium quality in every service, ensuring you get the best results every time.</p>
        </div>
        <div className="why-us-item">
          <img src="/images/hd3-icon-2.png" alt="Experience" className="why-us-icon" />
          <h3>Expert Stylists</h3>
          <p>Our experienced professionals are dedicated to providing you with the latest trends and personalized care.</p>
        </div>
        <div className="why-us-item">
          <img src="/images/hd3-icon-4.png" alt="Customer Service" className="why-us-icon" />
          <h3>Outstanding Service</h3>
          <p>We pride ourselves on excellent customer service, ensuring your comfort and satisfaction at all times.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
