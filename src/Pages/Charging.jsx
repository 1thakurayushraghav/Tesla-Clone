import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Charging = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', action: '' });

  const handleButtonClick = (cardTitle, action) => {
    setModalContent({ title: cardTitle, action });
    setShowModal(true);
  };

  const chargingCards = [
    {
      title: "Charging",
      subtitle: "Learn",
      image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=300&h=200&fit=crop&crop=center",
      buttons: ["Learn", "Order"]
    },
    {
      title: "Home Charging",
      subtitle: "Learn • Shop",
      image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=300&h=200&fit=crop&crop=center",
      buttons: ["Learn", "Order"]
    },
    {
      title: "Supercharging",
      subtitle: "Learn • Find",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center",
      buttons: ["Learn", "Order"]
    },
    {
      title: "for Business",
      subtitle: "Learn • Order",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&h=200&fit=crop&crop=center",
      buttons: ["Learn", "Order"]
    }
  ];

  const sidebarLinks = [
    "Help Me Charge",
    "Charging Calculator",
    "Charging With NACS",
    "Supercharger Voting",
    "Host a Supercharger"
  ];

  return (
    <div className="container-fluid p-4 pt-5 mt-4 bg-secondary">
      <div className="row">
        {/* Cards Section */}
        <div className="col-12 col-lg-8 mb-4">
          <div className="row g-4">
            {chargingCards.map((card, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-6 col-xl-3">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top img-fluid rounded-top"
                    style={{ objectFit: 'cover', height: '140px', }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="fw-bold mb-1">{card.title}</h6>
                      <p className="text-muted small">{card.subtitle}</p>
                    </div>
                    <div className="d-flex gap-2 mt-2 flex-wrap">
                      {card.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          className="btn btn-primary btn-sm"
                          onClick={() => handleButtonClick(card.title, button)}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="col-12 col-lg-4 ">
          <div className="card bg-secondary text-light shadow-sm h-100 border-0">
            <div className="card-body ms-5 ps-5">
              <h5 className="mb-3">Resources</h5>
              <div className="d-flex flex-column gap-3">
                {sidebarLinks.map((link, index) => (
                  <button
                    key={index}
                    className="btn btn-link text-light text-start p-0 text-decoration-none fw-semibold"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalContent.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>You clicked on <strong>{modalContent.action}</strong> for <strong>{modalContent.title}</strong>.</p>
                <p>This would typically redirect to the <strong>{modalContent.action.toLowerCase()}</strong> page or perform the requested action.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary">Continue to {modalContent.action}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Charging;
