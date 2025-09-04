import React from 'react';
import Teslanav from './Teslanav';

const Comparesection = () => {
  return (
    <>
    <Teslanav/>
    <section className="py-5">
      <div className="container-fluid px-0">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="position-relative h-100 card-hover fade-in-up d-flex" style={{minHeight: '30vh', padding: '20px', background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)'}}>
              {/* Text Section - 70% width */}
              <div className="d-flex align-items-center justify-content-center" 
                   style={{width: '70%', background: 'white'}}>
                <div className="text-center text-dark p-4">
                  <h2 className="h3 fw-bold mb-3">Compare Models</h2>
                  <p className="mb-3">Find the perfect Tesla for your lifestyle. Compare range, performance, and features across our vehicle lineup.</p>
                  <button className="btn btn-lg px-4 py-2" 
                          style={{backgroundColor: 'white', color: 'black', border: '1px solid #ddd', transition: 'all 0.3s ease'}}
                          onMouseOver={(e) => {e.target.style.backgroundColor = '#f8f9fa'; e.target.style.transform = 'translateY(-2px)'}}
                          onMouseOut={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.transform = 'translateY(0)'}}>
                    Compare Models
                  </button>
                </div>
              </div>
              
              {/* Image Section - 30% width */}
              <div className="position-relative" style={{width: '30%'}}>
                <img src="https://images.pexels.com/photos/30479291/pexels-photo-30479291.jpeg" 
                     className="w-100 h-100" alt="Compare Models" style={{objectFit: 'cover'}} />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative h-100 card-hover fade-in-up d-flex" style={{minHeight: '30vh', padding: '20px', background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)'}}>
              {/* Text Section - 70% width */}
              <div className="d-flex align-items-center justify-content-center" 
                   style={{width: '70%', background: 'white'}}>
                <div className="text-center text-dark p-4">
                  <h2 className="h3 fw-bold mb-3">American Heroes</h2>
                  <p className="mb-3">Supporting those who serve. Special pricing and programs for military, first responders, and educators.</p>
                  <button className="btn btn-lg px-4 py-2" 
                          style={{backgroundColor: 'white', color: 'black', border: '1px solid #ddd', transition: 'all 0.3s ease'}}
                          onMouseOver={(e) => {e.target.style.backgroundColor = '#f8f9fa'; e.target.style.transform = 'translateY(-2px)'}}
                          onMouseOut={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.transform = 'translateY(0)'}}>
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Image Section - 30% width */}
              <div className="position-relative" style={{width: '30%'}}>
                <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=800&fit=crop" 
                     className="w-100 h-100" alt="American Heroes" style={{objectFit: 'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  );
};

export default Comparesection;