import React from 'react';
import Teslanav from './Teslanav';

const Energysection = () => {
  const energyImages = [
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      alt: "Solar Panels",
      name: "Solar Panels"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Solar Roof",
      name: "Solar Roof"
    },
    {
      image: "https://frontend-cdn.solarreviews.com/tesla-powerwall-3-garage.jpg",
      alt: "Powerwall",
      name: "Powerwall"
    },
    {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      alt: "Megapack",
      name: "Megapack"
    },
    {
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop",
      alt: "Solar Installation",
      name: "Solar Installation"
    },
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      alt: "Energy Storage",
      name: "Energy Storage"
    },
    {
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=600&fit=crop",
      alt: "Solar Farm",
      name: "Solar Farm"
    }
  ];

  return (
    <>
    <Teslanav/>
    <section className="py-5" style={{background: 'linear-gradient(135deg, #e1f5fe, #f3e5f5)'}}>
      <div className="container-fluid px-0">
        <div className="position-relative">
          <div className="d-flex" style={{overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', gap: '20px', padding: '0 20px'}}>
            <style jsx>{`
              .energy-scroller::-webkit-scrollbar {
                display: none;
              }
            `}</style>
                     
            {energyImages.map((item, index) => (
              <div key={index} className="position-relative card-hover" style={{minWidth: '550px', height: '300px'}}>
                <img 
                  src={item.image}
                  className="w-100 h-100 rounded-4 shadow-lg"
                  alt={item.alt}
                  style={{objectFit: 'cover'}}
                />
                <div 
                  className="position-absolute text-white fw-bold"
                  style={{
                    top: '15px',
                    left: '15px',
                    fontSize: '1.2rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    zIndex: 2
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Energysection;