import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Premium Services</h2>
        <p>Explore our range of professional hair services, designed just for you!</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0268.jpg"
              alt="Wig Making"
            />
          </div>
          <div className="service-details">
            <h3>Nail fixing</h3>
            <p>
              We specialize in fixing beautiful, stylish and durable nail designs, from classic to trendy, ensuring your nails look flawless for any event."
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0393.JPG"
              alt="Installing Human Hair"
            />
          </div>
          <div className="service-details">
            <h3>Human Installment</h3>
            <p>
              Our expert stylists provide flawless human hair installation,
              ensuring that your new look is natural, long-lasting, and stunning.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0207.jpg"
              alt="Dreads"
            />
          </div>
          <div className="service-details">
            <h3>Dreads</h3>
            <p>
              We offer professional dreadlocks maintenance, including a deep
              clean to keep your locks healthy and fresh. Our treatment restores
              shine and bounce to your dreads.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0283.JPG"
              alt="Braiding"
            />
          </div>
          <div className="service-details">
            <h3>Braiding</h3>
            <p>
              Choose from a variety of braided styles—whether it's box braids,
              cornrows, or Ghana weaving, our stylists will give you the perfect
              look.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0178.jpg"
              alt="Plaiting"
            />
          </div>
          <div className="service-details">
            <h3>Plaiting</h3>
            <p>
              Our plaiting services offer beautiful and elegant styles, from
              traditional to trendy plaits, for any occasion.
            </p>
          </div>
        </div>

         <div className="service-card">
          <div className="service-image">
            <img loading="lazy"
              src="/images/IMG_0090.jpg"
              alt="faux locs"
            />
          </div>
          <div className="service-details">
            <h3>Faux locs</h3>
            <p>
             Our faux locs services provide stunning, long-lasting styles that blend traditional and modern techniques, perfect for any occasion."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
