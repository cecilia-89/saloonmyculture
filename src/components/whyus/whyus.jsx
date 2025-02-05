import React from 'react';
import './whyus.css';

const WhyUs = () => {
  return (
    <section className="why-us" id="whyus">
      <h2>Why Choose Us?</h2>
      <div className="why-us-container">

        <div className="why-us-item">
          <img src="/images/hd3-icon-1.png" alt="Quality" className="why-us-icon" />
          <h3>Premium Services</h3>
          <p>From hair treatments, wig/ hair installations, female haircuts near you to spa treatments, we provide exceptional beauty care.</p>
        </div>

        <div className="why-us-item">
          <img src="/images/hd3-icon-2.png" alt="Experience" className="why-us-icon" />
          <h3>Expert Stylists</h3>
          <p>Our team consists of professional hair stylists, good nail technicians, makeup artists, beautiful spa ladies and barbers in Abuja.</p>
        </div>
        
        <div className="why-us-item">
          <img src="/images/hd3-icon-4.png" alt="Customer Service" className="why-us-icon" />
          <h3>State-of-the-Art Facilities</h3>
          <p>A high-end salon in Wuse 2 designed for your comfort and relaxation.</p>
        </div>

        <div className="why-us-item">
          <img src="/images/hd3-icon-4.png" alt="Customer Service" className="why-us-icon" />
          <h3>Custom-Tailored Beauty Solutions</h3>
          <p>We personalize each service to meet your unique beauty needs.</p>
        </div>

        <div className="why-us-item">
          <img src="/images/hd3-icon-4.png" alt="Customer Service" className="why-us-icon" />
          <h3>Convenience & Accessibility</h3>
          <p>Located centrally in Wuse 2, near Maitama, Asokoro, and Garki, we are easily accessible.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
