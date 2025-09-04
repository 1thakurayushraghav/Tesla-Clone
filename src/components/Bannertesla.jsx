import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Bannertesla.css';

const Bannertesla = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerModels = [
    {
      tagline: "Plaid",
      subtitle: "Beyond Ludicrous",
      image: " https://images.pexels.com/photos/26957121/pexels-photo-26957121.jpeg",
      range: "405 mi",
      speed: "1.99s",
      topSpeed: "200 mph",
    },
   
    {
      tagline: "Long Range",
      subtitle: "7-Seat Configuration",
      image: "https://images.pexels.com/photos/27038707/pexels-photo-27038707.jpeg",
      range: "330 mi",
      speed: "4.8s",
      topSpeed: "135 mph",
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out-cubic', once: true });
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerModels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
       className="tesla-banner"
  style={{
    backgroundImage: `url(${bannerModels[currentSlide].image})`,
    width: '100%',
    height: '80vh',
  }}
      data-aos="fade"
    >
      <div className="overlay" />
      <div className="content  mb-5" data-aos="fade-up" data-aos-delay="300">
        <h2 className="tagline" data-aos="fade-up" data-aos-delay="400">
          {bannerModels[currentSlide].tagline}
        </h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="500">
          {bannerModels[currentSlide].subtitle}
        </p>

        <div className="stats" data-aos="fade-up" data-aos-delay="600">
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="800">
            <div className="stat-value">{bannerModels[currentSlide].range}</div>
            <div className="stat-label">Range</div>
          </div>
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="900">
            <div className="stat-value">{bannerModels[currentSlide].speed}</div>
            <div className="stat-label">0-60 mph</div>
          </div>
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="1000">
            <div className="stat-value">{bannerModels[currentSlide].topSpeed}</div>
            <div className="stat-label">Top Speed</div>
          </div>
        </div>

        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="1100">
          <button className="btn-primary-tesla" data-aos="zoom-in" data-aos-delay="1200">
            <span>Order Now</span>
            <div className="btn-overlay" />
          </button>
          <button className="btn-secondary-tesla" data-aos="zoom-in" data-aos-delay="1300">
            <span>Learn More</span>
            <div className="btn-overlay" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bannertesla;
