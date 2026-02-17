import React, { useState, useEffect } from 'react';
import { X, Zap, Sun, Battery, Building } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Energy = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', action: '', details: '', icon: null });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const energyProducts = [
    {
      id: 1,
      title: "Solar Panels",
      image: "https://images.pexels.com/photos/9799700/pexels-photo-9799700.jpeg",
      icon: <Sun className="w-8 h-8" />,
      actions: ["Learn", "Order"],
      details: {
        Learn: "Discover how Tesla Solar Panels can power your home with clean energy from the sun. Our panels are sleek, durable, and designed to maximize energy production.",
        Order: "Start your order for Tesla Solar Panels and begin your journey to energy independence. Our team will guide you through the process."
      }
    },
    {
      id: 2,
      title: "Solar Roof",
      image: "https://images.pexels.com/photos/30440447/pexels-photo-30440447.jpeg",
      icon: <Zap className="w-8 h-8" />,
      actions: ["Learn", "Order"],
      details: {
        Learn: "Learn about Tesla Solar Roof - beautiful solar tiles that replace your existing roof while generating clean energy for your home.",
        Order: "Order your Tesla Solar Roof and transform your home with integrated solar technology that looks better than a traditional roof."
      }
    },
    {
      id: 3,
      title: "Powerwall",
      image: "https://images.pexels.com/photos/2480315/pexels-photo-2480315.jpeg",
      icon: <Battery className="w-8 h-8" />,
      actions: ["Learn", "Order"],
      details: {
        Learn: "Explore Tesla Powerwall - home battery storage for energy independence day and night. Store solar energy and use it anytime.",
        Order: "Order Tesla Powerwall to store your solar energy and power your home 24/7, even during grid outages."
      }
    },
    {
      id: 4,
      title: "Megapack",
      image: "https://images.pexels.com/photos/29547356/pexels-photo-29547356.jpeg",
      icon: <Building className="w-8 h-8" />,
      actions: ["Learn", "Order"],
      details: {
        Learn: "Discover Tesla Megapack - utility-scale energy storage for large-scale renewable energy projects and grid stabilization.",
        Order: "Contact us to order Tesla Megapack for your commercial or utility-scale energy storage needs."
      }
    }
  ];

  const sidebarLinks = [
    { name: "Schedule a Consultation", icon: "📅" },
    { name: "Why Solar", icon: "☀️" },
    { name: "Incentives", icon: "💰" },
    { name: "Support", icon: "🛠️" },
    { name: "Partner with Tesla", icon: "🤝" },
    { name: "Commercial", icon: "🏢" },
    { name: "Utilities", icon: "⚡" }
  ];

  const handleButtonClick = (product, action) => {
    setModalContent({ 
      title: product.title, 
      action, 
      details: product.details[action],
      icon: product.icon
    });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tesla Energy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Power your home with clean, renewable energy from the sun
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {energyProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      {product.icon}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h3>
                    
                    <div className="flex gap-2">
                      {product.actions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleButtonClick(product, action)}
                          className={`flex-1 px-4 py-2 rounded-xl transition-all duration-200 font-medium text-sm
                            ${action === 'Order' 
                              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {action}
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
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 sticky top-24"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-5">Resources</h3>
              <ul className="space-y-2">
                {sidebarLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium flex items-center gap-3 group"
                      onClick={() => alert(`Navigating to ${link.name}`)}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
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
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-5 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3 text-white">
                {modalContent.icon}
                <div>
                  <h2 className="text-2xl font-bold">{modalContent.title}</h2>
                  <p className="text-blue-100 text-sm">{modalContent.action}</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {modalContent.details}
              </p>
              
              {modalContent.action === 'Order' && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-6">
                  <p className="font-semibold text-blue-900 mb-1">Ready to order?</p>
                  <p className="text-blue-700 text-sm">Contact our team to get started with your Tesla energy solution.</p>
                </div>
              )}
              
              {modalContent.action === 'Learn' && (
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-6">
                  <p className="font-semibold text-green-900 mb-1">Want to learn more?</p>
                  <p className="text-green-700 text-sm">Explore detailed specifications and benefits.</p>
                </div>
              )}

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
                  {modalContent.action === 'Order' ? 'Continue Order' : 'Learn More'}
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

export default Energy;