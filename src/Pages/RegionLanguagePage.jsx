import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RegionLanguagePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      countries: [
        { code: 'US', name: 'United States', languages: ['English'] },
        { code: 'CA', name: 'Canada', languages: ['English', 'Français'] },
        { code: 'MX', name: 'México', languages: ['Español'] }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: [
        { code: 'DE', name: 'Deutschland', languages: ['Deutsch'] },
        { code: 'FR', name: 'France', languages: ['Français'] },
        { code: 'GB', name: 'United Kingdom', languages: ['English'] },
        { code: 'IT', name: 'Italia', languages: ['Italiano'] },
        { code: 'ES', name: 'España', languages: ['Español'] },
        { code: 'NL', name: 'Nederland', languages: ['Nederlands'] },
        { code: 'NO', name: 'Norge', languages: ['Norsk'] },
        { code: 'SE', name: 'Sverige', languages: ['Svenska'] },
        { code: 'DK', name: 'Danmark', languages: ['Dansk'] },
        { code: 'BE', name: 'België', languages: ['Nederlands', 'Français'] }
      ]
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      countries: [
        { code: 'CN', name: '中国', languages: ['中文'] },
        { code: 'JP', name: '日本', languages: ['日本語'] },
        { code: 'KR', name: '대한민국', languages: ['한국어'] },
        { code: 'AU', name: 'Australia', languages: ['English'] },
        { code: 'NZ', name: 'New Zealand', languages: ['English'] },
        { code: 'SG', name: 'Singapore', languages: ['English'] },
        { code: 'HK', name: '香港', languages: ['中文', 'English'] }
      ]
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: [
        { code: 'AE', name: 'الإمارات العربية المتحدة', languages: ['العربية', 'English'] },
        { code: 'IL', name: 'ישראל', languages: ['עברית', 'English'] },
        { code: 'TR', name: 'Türkiye', languages: ['Türkçe'] }
      ]
    }
  ];

  const popularCountries = ['US', 'CA', 'DE', 'GB', 'CN', 'AU'];

  const filteredRegions = useMemo(() => {
    if (!searchTerm) return regions;
    return regions
      .map(region => ({
        ...region,
        countries: region.countries.filter(country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.code.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(region => region.countries.length > 0);
  }, [searchTerm]);

  const handleCountrySelect = (country) => {
    alert(`Selected: ${country.name} - ${country.languages[0]}`);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column" >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Tesla</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Model S', 'Model 3', 'Model X', 'Model Y', 'Energy', 'Region & Language'].map((item, i) => (
                <li className="nav-item" key={i}>
                  <a className={`nav-link ${item === 'Region & Language' ? 'active' : ''}`} href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content with max height */}
      <div
        className="container  flex-grow-1 overflow-auto mt-2 bg-secondary"
        style={{ maxHeight: '80vh', maxWidth:'100%' }}
      >
        <div className="text-center mb-5 ">
          <h1 className="display-4 fw-bold text-light">Select Your Region</h1>
          <p className="lead  text-light">Choose your country or region to see local pricing, incentives, and delivery options.</p>
        </div>

        {/* Search */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white">
                <i className="bi bi-search" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Popular Regions */}
        {!searchTerm && (
          <div className="mb-5">
            <h3 className="h4 mb-3 text-light">Popular Regions</h3>
            <div className="row g-3">
              {regions.flatMap(region =>
                region.countries.filter(c => popularCountries.includes(c.code))
              ).map(country => (
                <div key={country.code} className="col-md-4 col-lg-3">
                  <div className="card h-100 shadow-sm" role="button" onClick={() => handleCountrySelect(country)}>
                    <div className="card-body text-center p-4">
                      <div className="display-6 mb-2">
                        {country.code === 'US' && '🇺🇸'}
                        {country.code === 'CA' && '🇨🇦'}
                        {country.code === 'DE' && '🇩🇪'}
                        {country.code === 'GB' && '🇬🇧'}
                        {country.code === 'CN' && '🇨🇳'}
                        {country.code === 'AU' && '🇦🇺'}
                      </div>
                      <h5>{country.name}</h5>
                      <small className="text-muted">{country.languages.join(', ')}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Regions */}
        {filteredRegions.map(region => (
          <div key={region.id} className="mb-5">
            <h3 className="h4 text-light mb-3">{region.name}</h3>
            <div className="row g-3">
              {region.countries.map(country => (
                <div key={country.code} className="col-md-6 col-lg-4">
                  <div className="card shadow-sm h-100" role="button" onClick={() => handleCountrySelect(country)}>
                    <div className="card-body d-flex justify-content-between align-items-center p-3">
                      <div>
                        <h6 className="mb-1 fw-semibold">{country.name}</h6>
                        <small className="text-muted">{country.languages.join(', ')}</small>
                      </div>
                      <i className="bi bi-chevron-right text-muted" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredRegions.length === 0 && (
          <div className="text-center ">
            <div className="display-1 mb-3">🔍</div>
            <h4>No regions found</h4>
            <p className="text-muted">Try searching with a different term or browse all available regions above.</p>
          </div>
        )}
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default RegionLanguagePage;
