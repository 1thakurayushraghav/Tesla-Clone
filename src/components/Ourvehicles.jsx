import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Ourvehicles.css";

const Ourvehicles = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const items = [
    {
      name: 'Model S',
      tagline: 'Luxury Performance',
      image: 'https://www.usnews.com/object/image/00000193-c000-d114-afd7-e93724ed0000/models-62.jpg?update-time=1734093054347&size=responsive640',
    },
    {
      name: 'Model 3',
      tagline: 'Electric for Everyone',
      image: 'https://images.pexels.com/photos/23325521/pexels-photo-23325521.jpeg',
    },
    {
      name: 'Model X',
      tagline: 'Immersive Utility',
      image: 'https://images.pexels.com/photos/18977351/pexels-photo-18977351.jpeg',
    },
    {
      name: 'Model Y',
      tagline: 'Versatile and Efficient',
      image: 'https://images.pexels.com/photos/30479291/pexels-photo-30479291.jpeg',
    },
    {
      name: 'Wall Connector',
      tagline: 'Fast Home Charging',
      image: 'https://www.teslarati.com/wp-content/uploads/2021/11/tesla-home-charging-scaled.jpg',
    },
    {
      name: 'Tesla Apparel',
      tagline: 'Official Merchandise',
      image: 'https://hips.hearstapps.com/hmg-prod/images/sim1726-edit-65c3d341a4165.jpg',
    },
  ];

  return (
    <section className="our-vehicles-section">
      <div className="container">
        <div className="vehicles-list">
          {items.map((item, index) => (
            <div
              className="vehicle-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div
                className="vehicle-image"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="vehicle-info">
                <h3>{item.name}</h3>
                <p>{item.tagline}</p>
                <button className="btn-vehicle">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourvehicles;
