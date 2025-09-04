import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Energyproductsec = () => {
  const [currentEnergySlide, setCurrentEnergySlide] = useState(0);

  const energyProducts = [
    {
      name: "Solar Panels",
      image: "https://images.pexels.com/photos/9800030/pexels-photo-9800030.jpeg",
      description: "Generate clean energy for your home",
      features: ["25-year warranty", "Sleek design", "Weather resistant"]
    },
    {
      name: "Solar Roof",
      image: "https://images.pexels.com/photos/30440447/pexels-photo-30440447.jpeg",
      description: "Beautiful solar glass tiles",
      features: ["Durable glass", "Weather protection", "Elegant design"]
    },
    {
      name: "Powerwall",
      image: "https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg",
      description: "Store your solar energy",
      features: ["13.5 kWh capacity", "App control", "Backup power"]
    },
    {
      name: "Megapack",
      image: "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg",
      description: "Utility-scale energy storage",
      features: ["3 MWh capacity", "Grid stabilization", "Renewable integration"]
    }
  ];

  const nextEnergySlide = () => {
    setCurrentEnergySlide((prev) => (prev + 1) % energyProducts.length);
  };

  const prevEnergySlide = () => {
    setCurrentEnergySlide((prev) => (prev - 1 + energyProducts.length) % energyProducts.length);
  };

  return (
    <section id="energy" className="py-5" style={{background: 'linear-gradient(135deg,rgba(251, 252, 253, 0.69),rgba(241, 237, 237, 0.94))'}}>
      <div className="container">
        
        <div className="position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="energy-card rounded-4 p-5 fade-in-up">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img src={energyProducts[currentEnergySlide].image} 
                         className="img-fluid rounded-3 image-hover" 
                         alt={energyProducts[currentEnergySlide].name} 
                         style={{height: '300px', width: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="col-lg-6">
                    <h3 className="display-5 fw-bold mb-3" style={{color: '#2c3e50'}}>{energyProducts[currentEnergySlide].name}</h3>
                    <p className="lead mb-4" style={{color: '#495057'}}>{energyProducts[currentEnergySlide].description}</p>
                    <ul className="list-unstyled mb-4">
                      {energyProducts[currentEnergySlide].features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-center mb-2" style={{color: '#495057'}}>
                          <ArrowRight size={16} className="text-primary me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-tesla">Order Now</button>
                      <button className="btn btn-outline-primary">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y" 
                  style={{left: '-50px'}} onClick={prevEnergySlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y" 
                  style={{right: '-50px'}} onClick={nextEnergySlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Energyproductsec;