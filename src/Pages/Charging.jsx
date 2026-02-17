import React, { useState, useEffect } from 'react';
import { X, Zap, Home, MapPin, Briefcase, Calculator, Vote, Building2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Charging = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', action: '', subtitle: '' });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const chargingCards = [
    {
      title: "Charging",
      subtitle: "Learn",
      icon: <Zap className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=400&h=300&fit=crop",
      buttons: ["Learn", "Order"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Home Charging",
      subtitle: "Learn • Shop",
      icon: <Home className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=400&h=300&fit=crop",
      buttons: ["Learn", "Order"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Supercharging",
      subtitle: "Learn • Find",
      icon: <MapPin className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      buttons: ["Learn", "Order"],
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "for Business",
      subtitle: "Learn • Order",
      icon: <Briefcase className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
      buttons: ["Learn", "Order"],
      gradient: "from-purple-400 to-indigo-500"
    }
  ];

  const sidebarLinks = [
    { name: "Help Me Charge", icon: <Zap className="w-5 h-5" /> },
    { name: "Charging Calculator", icon: <Calculator className="w-5 h-5" /> },
    { name: "Charging With NACS", icon: <Zap className="w-5 h-5" /> },
    { name: "Supercharger Voting", icon: <Vote className="w-5 h-5" /> },
    { name: "Host a Supercharger", icon: <Building2 className="w-5 h-5" /> }
  ];

  const handleButtonClick = (card, action) => {
    setModalContent({ title: card.title, action, subtitle: card.subtitle });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tesla Charging
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, convenient charging at home and on the road
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Charging Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {chargingCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      {card.icon}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{card.subtitle}</p>
                    
                    <div className="flex gap-2">
                      {card.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleButtonClick(card, button)}
                          className={`flex-1 px-4 py-2 rounded-xl transition-all duration-200 font-medium text-sm
                            ${button === 'Order' 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-6 sticky top-24"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-6">Resources</h3>
              <ul className="space-y-2">
                {sidebarLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-200 font-medium flex items-center gap-3 group"
                      onClick={() => alert(`Navigating to ${link.name}`)}
                    >
                      <span className="group-hover:scale-110 transition-transform text-blue-400">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{modalContent.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{modalContent.action}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                You clicked on <strong>{modalContent.action}</strong> for <strong>{modalContent.title}</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                This would typically redirect to the <strong>{modalContent.action.toLowerCase()}</strong> page 
                or perform the requested action.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Close
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                  Continue to {modalContent.action}
                </button>
              </div>
            </div>
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

export default Charging;