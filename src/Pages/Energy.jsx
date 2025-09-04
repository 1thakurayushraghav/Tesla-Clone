import React, { useState } from 'react';

const Energy = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', action: '', details: '' });

  const energyProducts = [
    {
      id: 1,
      title: "Solar Panels",
      image: "https://images.pexels.com/photos/9799700/pexels-photo-9799700.jpeg",
      actions: ["Learn", "Order"],
      details: {
        Learn: "Discover how Tesla Solar Panels can power your home with clean energy from the sun.",
        Order: "Start your order for Tesla Solar Panels and begin your journey to energy independence."
      }
    },
    {
      id: 2,
      title: "Solar Roof",
      image: "https://images.pexels.com/photos/30440447/pexels-photo-30440447.jpeg",
      actions: ["Learn", "Order"],
      details: {
        Learn: "Learn about Tesla Solar Roof - beautiful solar tiles that replace your existing roof.",
        Order: "Order your Tesla Solar Roof and transform your home with integrated solar technology."
      }
    },
    {
      id: 3,
      title: "Powerwall",
      image: "https://images.pexels.com/photos/2480315/pexels-photo-2480315.jpeg",
      actions: ["Learn", "Order"],
      details: {
        Learn: "Explore Tesla Powerwall - home battery storage for energy independence day and night.",
        Order: "Order Tesla Powerwall to store your solar energy and power your home 24/7."
      }
    },
    {
      id: 4,
      title: "Megapack",
      image: "https://images.pexels.com/photos/29547356/pexels-photo-29547356.jpeg",
      actions: ["Learn","Order"],
      details: {
        Learn: "Discover Tesla Megapack - utility-scale energy storage for large-scale renewable energy projects."
      }
    }
  ];

  const sidebarLinks = [
    "Schedule a Consultation",
    "Why Solar",
    "Incentives", 
    "Support",
    "Partner with Tesla",
    "Commercial",
    "Utilities"
  ];

  const handleButtonClick = (productTitle, action, details) => {
    setModalContent({ title: productTitle, action, details });
    setShowModal(true);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100 p-5">
        {/* Energy Page Content */}
        <div className="bg-secondary" style={{ minHeight: '60vh' }}>
          <div className="container-fluid p-4">
            <div className="row g-4 h-100">
              
              {/* Left Section - 70% width */}
              <div className="col-lg-8">
                <div className="row g-3">
                  {energyProducts.map((product) => (
                    <div key={product.id} className="col-auto">
                      <div 
                        className="card h-100 shadow-sm hover-shadow"
                        style={{ height: '230px', width: '175px' }}
                      >
                        {/* Product Image */}
                        <div className="position-relative" style={{ height: '123px' }}>
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="card-img-top w-100 h-100"
                            style={{ objectFit: 'cover', width: '175px', height: '123px' }}
                          />
                        </div>
                        
                        {/* Card Content */}
                        <div className="card-body d-flex flex-column justify-content-between p-3" style={{ height: '107px' }}>
                          <h5 className="card-title fw-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>
                            {product.title}
                          </h5>
                          
                          {/* Action Buttons */}
                          <div className="d-flex gap-2">
                            {product.actions.map((action, index) => (
                              <button
                                key={index}
                                onClick={() => handleButtonClick(product.title, action, product.details[action])}
                                className="btn btn-primary btn-sm fw-medium"
                                style={{ fontSize: '0.875rem' }}
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Section - 30% width */}
              <div className="col-lg-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex flex-column gap-3">
                      {sidebarLinks.map((link, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <button className="btn btn-link text-start fw-semibold text-dark p-0 text-decoration-none">
                            {link}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-bold">{modalContent.title} - {modalContent.action}</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-3">{modalContent.details}</p>
                  {modalContent.action === 'Order' && (
                    <div className="alert alert-info">
                      <strong>Ready to order?</strong> Contact our team to get started with your Tesla energy solution.
                    </div>
                  )}
                  {modalContent.action === 'Learn' && (
                    <div className="alert alert-success">
                      <strong>Want to learn more?</strong> Explore detailed specifications and benefits.
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => setShowModal(false)}
                  >
                    {modalContent.action === 'Order' ? 'Continue Order' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transition: box-shadow 0.3s ease-in-out;
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
        
        .btn-link:hover {
          color: #000 !important;
          transition: color 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Energy;