import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showLearnModal, setShowLearnModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleLearnClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowLearnModal(true);
  };

  const handleOrderClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowOrderModal(true);
  };

  const closeModals = () => {
    setShowLearnModal(false);
    setShowOrderModal(false);
    setSelectedVehicle(null);
  };

  const vehicleCards = [
    {
      name: 'Model S',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-homepage-desktop.jpg',
      buttons: ['Learn', 'Order'],
    },
    {
      name: 'Model 3',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-homepage-desktop.jpg',
      buttons: ['Learn', 'Order'],
    },
    {
      name: 'Model Y',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-homepage-desktop.jpg',
      buttons: ['Learn', 'Order'],
    },
    {
      name: 'Model X',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-homepage-desktop.jpg',
      buttons: ['Learn', 'Order'],
    },
    {
      name: 'Cybertruck',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg',
      buttons: ['Learn', 'Order'],
    },
    {
      name: 'Inventory',
      image:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD.jpg',
      buttons: ['Learn', 'Order'],
    },
  ];

  const VehicleCard = ({ vehicle }) => (
    <div className="card shadow-sm mb-4" style={{ width: '14rem' }}>
      <img
        src={vehicle.image}
        className="card-img-top"
        alt={vehicle.name}
        style={{ height: '8rem', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{vehicle.name}</h5>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {vehicle.buttons.map((btn, i) => {
            const btnClass =
              btn === 'Order' || btn === 'New'
                ? 'btn btn-primary btn-sm'
                : btn === 'Used'
                ? 'btn btn-dark btn-sm'
                : 'btn btn-secondary btn-sm';

            return (
              <button
                key={i}
                className={btnClass}
                onClick={() =>
                  btn === 'Learn'
                    ? handleLearnClick(vehicle)
                    : btn === 'Order'
                    ? handleOrderClick(vehicle)
                    : null
                }
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid pt-5 bg-secondary text-light" style={{ height: '80vh' }}>
      <div className="row h-100">
        {/* Left Section: Cards */}
        <div className="col-md-8 overflow-auto d-flex flex-wrap justify-content-center align-content-start py-3 gap-3">
          {vehicleCards.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>

        {/* Right Section: Sidebar Links */}
        <div className="col-md-4 bg-secondary text-light px-4 py-3 border-start" style={{ height: '70vh' }} >
          
          <div className="list-group ">
            {[
              'Help Me Choose',
              'Demo Drive',
              'Trade-in',
              'Compare',
              'Workshops',
              'Help Me Charge',
              'Fleet',
              'Semi',
              'Roadster',
              'Federal Tax Credit',
            ].map((item, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action "
                onClick={() => alert(`You clicked "${item}"`)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal 1: Learn Modal */}
      {showLearnModal && selectedVehicle && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedVehicle.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModals}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                <p>
                  Learn more about{' '}
                  <strong>{selectedVehicle.name}</strong> and explore specs,
                  features, and performance.
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModals}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Order Modal with Form Table */}
      {showOrderModal && selectedVehicle && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order {selectedVehicle.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModals}
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="name">Full Name</label>
                      </td>
                      <td>
                        <input type="text" id="name" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="email">Email</label>
                      </td>
                      <td>
                        <input type="email" id="email" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="phone">Phone</label>
                      </td>
                      <td>
                        <input type="tel" id="phone" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="model">Model</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="model"
                          className="form-control"
                          value={selectedVehicle.name}
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="quantity">Quantity</label>
                      </td>
                      <td>
                        <input
                          type="number"
                          id="quantity"
                          className="form-control"
                          min="1"
                          defaultValue="1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="delivery">Delivery Date</label>
                      </td>
                      <td>
                        <input type="date" id="delivery" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Submit Order</button>
                <button className="btn btn-secondary" onClick={closeModals}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
