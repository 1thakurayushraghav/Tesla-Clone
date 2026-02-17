import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showLearnModal, setShowLearnModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    delivery: ''
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const vehicleCards = [
    {
      name: 'Model S',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-homepage-desktop.jpg',
      specs: { range: '405 mi', speed: '1.99s', topSpeed: '200 mph' }
    },
    {
      name: 'Model 3',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-homepage-desktop.jpg',
      specs: { range: '358 mi', speed: '3.1s', topSpeed: '162 mph' }
    },
    {
      name: 'Model Y',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-homepage-desktop.jpg',
      specs: { range: '330 mi', speed: '3.5s', topSpeed: '155 mph' }
    },
    {
      name: 'Model X',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-homepage-desktop.jpg',
      specs: { range: '348 mi', speed: '2.5s', topSpeed: '175 mph' }
    },
    {
      name: 'Cybertruck',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg',
      specs: { range: '340 mi', speed: '2.6s', topSpeed: '130 mph' }
    },
    {
      name: 'Inventory',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD.jpg',
      specs: { range: 'Varies', speed: 'Varies', topSpeed: 'Varies' }
    },
  ];

  const sidebarLinks = [
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
  ];

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
    setOrderForm({ name: '', email: '', phone: '', quantity: 1, delivery: '' });
  };

  const handleFormChange = (e) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert(`Order submitted for ${selectedVehicle.name}!`);
    closeModals();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Section: Vehicle Cards */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" data-aos="fade-right">
              Tesla Vehicles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicleCards.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{vehicle.name}</h3>
                    
                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500">Range</p>
                        <p className="font-semibold text-sm">{vehicle.specs.range}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500">0-60 mph</p>
                        <p className="font-semibold text-sm">{vehicle.specs.speed}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500">Top Speed</p>
                        <p className="font-semibold text-sm">{vehicle.specs.topSpeed}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLearnClick(vehicle)}
                        className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        Learn
                      </button>
                      <button
                        onClick={() => handleOrderClick(vehicle)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Sidebar */}
          <div className="lg:w-80">
            <div 
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 sticky top-24"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {sidebarLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium"
                      onClick={() => alert(`Navigating to ${link}`)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learn Modal */}
      {showLearnModal && selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedVehicle.name}</h2>
              <button
                onClick={closeModals}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-500 text-sm mb-1">Range</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedVehicle.specs.range}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-500 text-sm mb-1">0-60 mph</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedVehicle.specs.speed}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-500 text-sm mb-1">Top Speed</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedVehicle.specs.topSpeed}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Learn more about <strong>{selectedVehicle.name}</strong> and explore its cutting-edge features, 
                exceptional performance, and innovative technology that sets it apart from the rest.
              </p>

              <button
                onClick={closeModals}
                className="w-full px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {showOrderModal && selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Order {selectedVehicle.name}</h2>
              <button
                onClick={closeModals}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmitOrder} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={orderForm.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={orderForm.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={orderForm.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  value={selectedVehicle.name}
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={orderForm.quantity}
                    onChange={handleFormChange}
                    min="1"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date</label>
                  <input
                    type="date"
                    name="delivery"
                    value={orderForm.delivery}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit Order
                </button>
                <button
                  type="button"
                  onClick={closeModals}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Vehicles;