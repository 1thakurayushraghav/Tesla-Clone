import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Teslanav from './Teslanav';

const Experiencesection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const experienceItems = [
    {
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1400&h=800&fit=crop",
      title: "Model S Plaid",
      subtitle: "Beyond Ludicrous"
    },
    {
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&h=800&fit=crop",
      title: "Model 3 Performance",
      subtitle: "Pure Electric Thrill"
    },
    {
      image: "https://images.pexels.com/photos/30479299/pexels-photo-30479299.jpeg",
      title: "Model X",
      subtitle: "Falcon Wing Doors"
    },
    {
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1400&h=800&fit=crop",
      title: "Model Y",
      subtitle: "Maximum Utility"
    },
    {
      image: "https://images.pexels.com/photos/28468161/pexels-photo-28468161.jpeg",
      title: "Cybertruck",
      subtitle: "Built for Anything"
    }
  ];

  return (
    <>
      <Teslanav/>
      <section className="py-5" style={{background: 'linear-gradient(135deg,rgba(251, 252, 253, 0.69),rgba(241, 237, 237, 0.94))'}}>
        <div className="container-fluid px-0">
          <div className="position-relative">
            <div className="d-flex" style={{overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                .d-flex::-webkit-scrollbar {
                  display: none;
                }
                .card-hover {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card-hover:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                }
                
                /* Tesla Button Styles */
                .tesla-btn {
                  font-size: 14px;
                  font-weight: 600;
                  letter-spacing: 0.5px;
                  text-transform: uppercase;
                }
                
                .order-btn:hover {
                  background-color: #0056b3 !important;
                  color: white !important;
                  transform: translateY(-2px);
                  box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
                }
                
                .learn-btn:hover {
                  background-color: #f8f9fa !important;
                  color: black !important;
                  border-color: #f8f9fa !important;
                  transform: translateY(-2px);
                  box-shadow: 0 8px 20px rgba(255,255,255,0.3);
                }
                
                .tesla-btn:active {
                  transform: translateY(0);
                }
              `}</style>
              
              {experienceItems.map((item, index) => (
                <div 
                  key={index} 
                  className="position-relative me-3 card-hover" 
                  style={{
                    height: '80vh', // Full viewport height
                    width: '60vw', // 70% of viewport width
                    minWidth: '70vw', // Ensures consistent width
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  data-aos-duration="1000"
                >
                  <img 
                    src={item.image}
                    className="w-100 h-100 rounded-3" 
                    alt={item.title}
                    style={{objectFit: 'cover'}}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-4"
                    style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'}}
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 300}
                    data-aos-duration="800"
                  >
                    <h4 className="fw-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white-50 mb-4">{item.subtitle}</p>
                    
                    {/* Action Buttons */}
                    <div className="d-flex gap-3">
                      <button 
                        className="btn fw-semibold px-4 py-2 tesla-btn order-btn"
                        style={{
                          borderRadius: '25px',
                          border: 'none',
                          backgroundColor: '#007bff',
                          color: 'white',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Order Now
                      </button>
                      <button 
                        className="btn fw-semibold px-4 py-2 tesla-btn learn-btn"
                        style={{
                          borderRadius: '25px',
                          border: '2px solid white',
                          backgroundColor: 'white',
                          color: 'black',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Learn More
                      </button>
                    </div>
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

export default Experiencesection;