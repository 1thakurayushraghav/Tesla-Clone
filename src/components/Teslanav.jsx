import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Globe, User, HelpCircle } from 'lucide-react';
import './Teslanav.css';

const Teslanav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navItems = [
    { label: 'Vehicles', url: '/vehicles' },
    { label: 'Energy', url: '/energy' },
    { label: 'Charging', url: '/charging' },
    { label: 'Discover', url: '/discover' },
    { label: 'Shop', url: '/shop' },
  ];

  return (
    <header className="tesla-navbar bg-light shadow-sm fixed-top border-bottom py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* Logo */}
          <Link to="/" className="fw-bold fs-3 text-decoration-none text-black">
            <span className="text-gradient">TESLA</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="d-none d-md-flex gap-4 list-unstyled m-0 p-0">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="nav-item-hover"
                data-aos="fade-down"
                data-aos-delay={i * 100}
                onMouseEnter={() => navigate(item.url)}
              >
                <span
                  className={`text-decoration-none text-dark ${location.pathname === item.url ? 'active' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="d-none d-md-flex gap-3">
            <button
              className={`icon-button ${location.pathname === '/region-language' ? 'active' : ''}`}
              title="Region"
              onMouseEnter={() => navigate('/region-language')}
            >
              <Globe size={20} />
            </button>

            <button
              className={`icon-button ${location.pathname === '/support' ? 'active' : ''}`}
              title="Support"
              onMouseEnter={() => navigate('/support')}
            >
              <HelpCircle size={20} />
            </button>

            <button
              className={`icon-button ${location.pathname === '/account' ? 'active' : ''}`}
              title="Account"
              onMouseEnter={() => navigate('/account')}
            >
              <User size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle-button d-md-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon custom-toggler" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mobile-nav list-unstyled mt-3 p-3 rounded shadow-sm" data-aos="fade-down">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="mobile-item"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <Link
                  to={item.url}
                  className={`text-decoration-none d-block py-2 px-3 ${location.pathname === item.url ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="mobile-divider"></li>

            <li className="mobile-item d-flex gap-3 justify-content-start mt-2">
              <Link to="/region-language">
                <button className={`icon-button ${location.pathname === '/region-language' ? 'active' : ''}`}>
                  <Globe size={20} />
                </button>
              </Link>
              <Link to="/support">
                <button className={`icon-button ${location.pathname === '/support' ? 'active' : ''}`}>
                  <HelpCircle size={20} />
                </button>
              </Link>
              <Link to="/account">
                <button className={`icon-button ${location.pathname === '/account' ? 'active' : ''}`}>
                  <User size={20} />
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Teslanav;
