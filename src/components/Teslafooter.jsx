import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Teslafooter = () => {
  return (
    <footer className="bg-transparent text-black pt-5">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row">
          {/* Vehicles */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Vehicles</h5>
            <ul className="list-unstyled">
              {['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster', 'Semi', 'Used Vehicles', 'Trade-In', 'Test Drive'].map((item, i) => (
                <li key={i}><a href="#" className="text-decoration-none text-black d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Energy */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Energy</h5>
            <ul className="list-unstyled">
              {['Solar Panels', 'Solar Roof', 'Powerwall', 'Megapack', 'Commercial', 'Utilities'].map((item, i) => (
                <li key={i}><a href="#" className="text-decoration-none text-black d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Charging */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Charging</h5>
            <ul className="list-unstyled">
              {['Charging', 'Home Charging', 'Supercharging', 'Destination Charging'].map((item, i) => (
                <li key={i}><a href="#" className="text-decoration-none text-black d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Discover</h5>
            <ul className="list-unstyled">
              {['Resources', 'Mobile App', 'Support', 'Investor Relations', 'Shop', 'Account', 'News', 'Careers'].map((item, i) => (
                <li key={i}><a href="#" className="text-decoration-none text-black d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-top pt-4 mt-4">
          <h5>Stay Connected</h5>
          <p>Get the latest Tesla news and updates</p>
          <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="form-control me-2" />
            <button className="btn btn-dark text-white">Subscribe</button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-top pt-4 mt-4 d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="mb-2 mb-lg-0 d-flex align-items-center gap-2">
            <span className="fw-bold fs-5">TESLA</span>
            <small>© 2025 Tesla, Inc. All rights reserved.</small>
          </div>

          <div className="d-flex flex-wrap gap-3">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Contact', 'Recall'].map((link, i) => (
              <a key={i} href="#" className="text-decoration-none text-black small">{link}</a>
            ))}
          </div>
        </div>

        {/* Address and Socials */}
        <div className="border-top pt-4 mt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div className="small text-center text-sm-start mb-3 mb-sm-0">
            Tesla, Inc. • 1 Tesla Road, Austin, Texas 78730
          </div>
          <div className="d-flex gap-3">
            <a href="#"><i className="bi bi-twitter text-black"></i></a>
            <a href="#"><i className="bi bi-facebook text-black"></i></a>
            <a href="#"><i className="bi bi-github text-black"></i></a>
            <a href="#"><i className="bi bi-instagram text-black"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Teslafooter;
