import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Globe, User, HelpCircle, X } from 'lucide-react';

const Teslanav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // Navigation items configuration
  const navItems = [
    { 
      label: 'Vehicles', 
      url: '/vehicles',
      hasDropdown: true
    },
    { 
      label: 'Energy', 
      url: '/energy',
      hasDropdown: true
    },
    { 
      label: 'Charging', 
      url: '/charging',
      hasDropdown: false
    },
    { 
      label: 'Discover', 
      url: '/discover',
      hasDropdown: true
    },
    { 
      label: 'Shop', 
      url: '/shop',
      hasDropdown: false
    },
  ];

  // Vehicles dropdown data
  const vehiclesData = {
    vehicles: [
      { 
        name: 'Model S', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.jpg',
      },
      { 
        name: 'Model 3', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg',
      },
      { 
        name: 'Model Y', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.jpg',
      },
      { 
        name: 'Model X', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Main-Hero-Desktop-LHD.jpg',
      },
      { 
        name: 'Cybertruck', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Main-Hero-Desktop-LHD.jpg',
      },
      { 
        name: 'Inventory', 
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/pre-owned-model-s.jpg',
      },
    ],
    menuLinks: [
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
    ]
  };

  // Discover dropdown data
  const discoverData = {
    columns: [
      {
        title: 'RESOURCES',
        links: [
          'Demo Drive',
          'Insurance',
          'American Heroes',
          'Learn',
          'Video Guides',
          'Customer Stories',
          'Events',
          'Workshops'
        ]
      },
      {
        title: 'LOCATION SERVICES',
        links: [
          'Find Us',
          'Find a Collision Center',
          'Find a Certified Installer'
        ]
      },
      {
        title: 'COMPANY',
        links: [
          'About',
          'Careers',
          'Investor Relations'
        ]
      }
    ]
  };

  // Energy dropdown data
  const energyData = {
    products: [
      {
        name: 'Solar Panels',
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-panels-hero-desktop.jpg',
        hasOrder: true
      },
      {
        name: 'Solar Roof',
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-roof-hero-desktop.jpg',
        hasOrder: true
      },
      {
        name: 'Powerwall',
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powerwall-hero-desktop.jpg',
        hasOrder: true
      },
      {
        name: 'Megapack',
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/megapack-hero-desktop.jpg',
        hasOrder: false
      }
    ],
    menuLinks: [
      'Schedule a Consultation',
      'Why Solar',
      'Incentives',
      'Support',
      'Partner with Tesla',
      'Commercial',
      'Utilities'
    ]
  };

  const handleNavClick = (item) => {
    if (item.hasDropdown) {
      setActiveDropdown(activeDropdown === item.label ? null : item.label);
    } else {
      navigate(item.url);
      setActiveDropdown(null);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm border-b border-gray-200 py-3 z-[1050]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center min-h-[40px]">

            {/* Logo */}
            <Link 
              to="/" 
              className="font-bold text-3xl no-underline text-black"
              onClick={closeDropdown}
            >
              <span className="bg-gradient-to-r from-[#d00000] to-[#ff6f00] bg-clip-text text-transparent">
                TESLA
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-4 list-none m-0 p-0">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className="group"
                  data-aos="fade-down"
                  data-aos-delay={i * 100}
                >
                  <span
                    onClick={() => handleNavClick(item)}
                    className={`relative no-underline text-gray-900 cursor-pointer px-1 py-1.5 inline-block transition-colors duration-300 
                      ${activeDropdown === item.label || location.pathname === item.url ? 'font-bold !text-[#d00000]' : 'hover:text-[#d00000]'}
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                      after:bg-[#d00000] after:transition-[width] after:duration-300 
                      ${activeDropdown === item.label || location.pathname === item.url ? 'after:w-full' : 'group-hover:after:w-full'}`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Desktop Icons */}
            <div className="hidden md:flex gap-3 items-center">
              <button
                className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                  ${location.pathname === '/region-language' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                title="Region"
                onClick={() => navigate('/region-language')}
              >
                <Globe size={20} className="stroke-[#333] transition-[stroke] duration-300" />
              </button>

              <button
                className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                  ${location.pathname === '/support' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                title="Support"
                onClick={() => navigate('/support')}
              >
                <HelpCircle size={20} className="stroke-[#333] transition-[stroke] duration-300" />
              </button>

              <button
                className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                  ${location.pathname === '/account' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                title="Account"
                onClick={() => navigate('/account')}
              >
                <User size={20} className="stroke-[#333] transition-[stroke] duration-300" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden bg-transparent border-none text-2xl p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span className="inline-block w-6 h-0.5 bg-black relative
                before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-black before:-top-2 before:left-0 before:transition-all before:duration-300
                after:content-[''] after:absolute after:w-6 before:h-0.5 before:bg-black after:top-2 after:left-0 after:transition-all after:duration-300"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden list-none mt-3 p-3 rounded shadow-sm bg-white border border-[#ddd]" data-aos="fade-down">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className="py-2 border-b border-[#eee] last:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <span
                    onClick={() => {
                      handleNavClick(item);
                      if (!item.hasDropdown) {
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`no-underline block py-2 px-3 text-[#333] font-medium cursor-pointer
                      ${location.pathname === item.url ? 'font-bold !text-[#d00000]' : ''}`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}

              {/* Mobile Divider */}
              <li className="h-px bg-[#ccc] my-3"></li>

              {/* Mobile Icons */}
              <li className="flex gap-3 justify-start mt-2 pt-2">
                <Link to="/region-language">
                  <button 
                    className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                      ${location.pathname === '/region-language' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                  >
                    <Globe size={20} className="stroke-[#444] transition-[stroke] duration-300" />
                  </button>
                </Link>
                <Link to="/support">
                  <button 
                    className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                      ${location.pathname === '/support' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                  >
                    <HelpCircle size={20} className="stroke-[#444] transition-[stroke] duration-300" />
                  </button>
                </Link>
                <Link to="/account">
                  <button 
                    className={`bg-transparent border-none cursor-pointer p-1.5 transition-transform duration-200 hover:scale-110
                      ${location.pathname === '/account' ? '[&>svg]:!stroke-[#d00000]' : ''}`}
                  >
                    <User size={20} className="stroke-[#444] transition-[stroke] duration-300" />
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>

      {/* Dropdown Overlay - Transparent to show home page */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-[1045] bg-black/5"
          onClick={closeDropdown}
        >
          {/* Vehicles Dropdown */}
          {activeDropdown === 'Vehicles' && (
            <div 
              className="fixed top-[70px] left-0 right-0 bg-white shadow-xl animate-slideDown overflow-y-auto max-h-[calc(100vh-70px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
                {/* Close Button */}
                <button
                  onClick={closeDropdown}
                  className="absolute top-4 right-4 md:right-8 text-gray-600 hover:text-gray-900 transition-colors duration-200 z-10"
                >
                  <X size={24} strokeWidth={2} />
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Vehicle Cards Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vehiclesData.vehicles.map((vehicle, idx) => (
                      <div
                        key={idx}
                        className="text-center cursor-pointer group"
                        onClick={() => {
                          navigate(`/vehicles/${vehicle.name.toLowerCase().replace(' ', '-')}`);
                          closeDropdown();
                        }}
                      >
                        <div className="mb-4 overflow-hidden">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{vehicle.name}</h3>
                        <div className="flex gap-3 justify-center text-sm">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/vehicles/${vehicle.name.toLowerCase().replace(' ', '-')}/learn`);
                              closeDropdown();
                            }}
                            className="text-gray-600 hover:text-gray-900 underline font-medium transition-colors"
                          >
                            Learn
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/vehicles/${vehicle.name.toLowerCase().replace(' ', '-')}/order`);
                              closeDropdown();
                            }}
                            className="text-gray-600 hover:text-gray-900 underline font-medium transition-colors"
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Side Menu - Hidden on mobile, visible on large screens */}
                  <div className="hidden lg:block w-64 border-l border-gray-200 pl-8">
                    <ul className="space-y-2">
                      {vehiclesData.menuLinks.map((link, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              navigate(`/vehicles/${link.toLowerCase().replace(/\s+/g, '-')}`);
                              closeDropdown();
                            }}
                            className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors duration-200 text-sm font-medium py-2"
                          >
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Menu Links - Below cards on mobile */}
                  <div className="lg:hidden grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200">
                    {vehiclesData.menuLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          navigate(`/vehicles/${link.toLowerCase().replace(/\s+/g, '-')}`);
                          closeDropdown();
                        }}
                        className="px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Energy Dropdown */}
          {activeDropdown === 'Energy' && (
            <div 
              className="fixed top-[70px] left-0 right-0 bg-white shadow-xl animate-slideDown overflow-y-auto max-h-[calc(100vh-70px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
                {/* Close Button */}
                <button
                  onClick={closeDropdown}
                  className="absolute top-4 right-4 md:right-8 text-gray-600 hover:text-gray-900 transition-colors duration-200 z-10"
                >
                  <X size={24} strokeWidth={2} />
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Energy Products Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {energyData.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="text-center cursor-pointer group"
                        onClick={() => {
                          navigate(`/energy/${product.name.toLowerCase().replace(' ', '-')}`);
                          closeDropdown();
                        }}
                      >
                        <div className="mb-4 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                        <div className="flex gap-3 justify-center text-sm">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/energy/${product.name.toLowerCase().replace(' ', '-')}/learn`);
                              closeDropdown();
                            }}
                            className="text-gray-600 hover:text-gray-900 underline font-medium transition-colors"
                          >
                            Learn
                          </button>
                          {product.hasOrder && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/energy/${product.name.toLowerCase().replace(' ', '-')}/order`);
                                closeDropdown();
                              }}
                              className="text-gray-600 hover:text-gray-900 underline font-medium transition-colors"
                            >
                              Order
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Side Menu - Hidden on mobile, visible on large screens */}
                  <div className="hidden lg:block w-64 border-l border-gray-200 pl-8">
                    <ul className="space-y-2">
                      {energyData.menuLinks.map((link, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              navigate(`/energy/${link.toLowerCase().replace(/\s+/g, '-')}`);
                              closeDropdown();
                            }}
                            className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors duration-200 text-sm font-medium py-2"
                          >
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Menu Links */}
                  <div className="lg:hidden grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200">
                    {energyData.menuLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          navigate(`/energy/${link.toLowerCase().replace(/\s+/g, '-')}`);
                          closeDropdown();
                        }}
                        className="px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Discover Dropdown */}
          {activeDropdown === 'Discover' && (
            <div 
              className="fixed top-[70px] left-0 right-0 bg-white shadow-xl animate-slideDown overflow-y-auto max-h-[calc(100vh-70px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
                {/* Close Button */}
                <button
                  onClick={closeDropdown}
                  className="absolute top-4 right-4 md:right-8 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <X size={24} strokeWidth={2} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {discoverData.columns.map((column, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">
                        {column.title}
                      </h3>
                      <ul className="space-y-2">
                        {column.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <button
                              onClick={() => {
                                navigate(`/discover/${link.toLowerCase().replace(/\s+/g, '-')}`);
                                closeDropdown();
                              }}
                              className="block w-full text-left text-gray-900 hover:text-gray-600 transition-colors duration-200 text-sm font-medium py-2"
                            >
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Teslanav;