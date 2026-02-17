import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Teslafooter = () => {
  const vehicles = [
    { name: "Model S", path: "/models" },
    { name: "Model 3", path: "/model3" },
    { name: "Model X", path: "/modelx" },
    { name: "Model Y", path: "/modely" },
    { name: "Cybertruck", path: "/cybertruck" },
    { name: "Roadster", path: "/roadster" },
    { name: "Semi", path: "/semi" },
    { name: "Used Vehicles", path: "/used" },
    { name: "Trade-In", path: "/trade-in" },
    { name: "Test Drive", path: "/test-drive" },
  ];

  const energy = [
    { name: "Solar Panels", path: "/solar-panels" },
    { name: "Solar Roof", path: "/solar-roof" },
    { name: "Powerwall", path: "/powerwall" },
    { name: "Megapack", path: "/megapack" },
    { name: "Commercial", path: "/commercial" },
    { name: "Utilities", path: "/utilities" },
  ];

  const charging = [
    { name: "Charging", path: "/charging" },
    { name: "Home Charging", path: "/home-charging" },
    { name: "Supercharging", path: "/supercharging" },
    { name: "Destination Charging", path: "/destination-charging" },
  ];

  const discover = [
    { name: "Resources", path: "/resources" },
    { name: "Mobile App", path: "/mobile-app" },
    { name: "Support", path: "/support" },
    { name: "Investor Relations", path: "/investors" },
    { name: "Shop", path: "/shop" },
    { name: "Account", path: "/account" },
    { name: "News", path: "/news" },
    { name: "Careers", path: "/careers" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Contact", path: "/contact" },
    { name: "Recall", path: "/recall" },
  ];

  return (
    <footer className="bg-transparent text-black pt-5">
      <div className="container">
        {/* Main Footer */}
        <div className="row">
          {[ 
            { title: "Vehicles", data: vehicles },
            { title: "Energy", data: energy },
            { title: "Charging", data: charging },
            { title: "Discover", data: discover },
          ].map((section, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <h5 className="text-uppercase mb-3">{section.title}</h5>
              <ul className="list-unstyled">
                {section.data.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="text-decoration-none text-black d-block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-top pt-4 mt-4">
          <h5>Stay Connected</h5>
          <p>Get the latest Tesla news and updates</p>
          <form
            className="d-flex mb-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-dark text-white">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-top pt-4 mt-4 d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="mb-2 mb-lg-0 d-flex align-items-center gap-2">
            <span className="fw-bold fs-5">TESLA</span>
            <small>© 2025 Tesla, Inc. All rights reserved.</small>
          </div>

          <div className="d-flex flex-wrap gap-3">
            {bottomLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-decoration-none text-black small"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Address & Social */}
        <div className="border-top pt-4 mt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div className="small text-center text-sm-start mb-3 mb-sm-0">
            Tesla, Inc. • 1 Tesla Road, Austin, Texas 78730
          </div>

          <div className="d-flex gap-3">
            <a
              href="https://twitter.com/tesla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-decoration-none"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/tesla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-decoration-none"
            >
              Facebook
            </a>
            <a
              href="https://github.com/tesla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-decoration-none"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/teslamotors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-decoration-none"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Teslafooter;