import React, { useState } from 'react';

const TeslaSupportPage = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚗',
      articles: [
        { title: 'Taking Delivery of Your Tesla', description: 'Everything you need to know about your delivery day' },
        { title: 'First Drive Checklist', description: 'Essential steps before your first drive' },
        { title: 'Mobile App Setup', description: 'Download and configure the Tesla mobile app' },
        { title: 'Charging Basics', description: 'Learn about home and public charging options' }
      ]
    },
    {
      id: 'charging',
      title: 'Charging',
      icon: '⚡',
      articles: [
        { title: 'Supercharger Network', description: 'Find and use Tesla Superchargers worldwide' },
        { title: 'Home Charging Installation', description: 'Set up charging at your residence' },
        { title: 'Charging Speed and Time', description: 'Understanding charging rates and duration' },
        { title: 'Third-Party Charging', description: 'Using non-Tesla charging networks' }
      ]
    },
    {
      id: 'autopilot',
      title: 'Autopilot',
      icon: '🤖',
      articles: [
        { title: 'Autopilot Features', description: 'Overview of available Autopilot capabilities' },
        { title: 'Full Self-Driving (FSD)', description: 'Advanced autonomous driving features' },
        { title: 'Safety Guidelines', description: 'Best practices for using Autopilot safely' },
        { title: 'Updates and Improvements', description: 'How Autopilot evolves over time' }
      ]
    },
    {
      id: 'maintenance',
      title: 'Service & Maintenance',
      icon: '🔧',
      articles: [
        { title: 'Service Scheduling', description: 'Book service appointments through the app' },
        { title: 'Routine Maintenance', description: 'Keep your Tesla in optimal condition' },
        { title: 'Software Updates', description: 'Automatic over-the-air improvements' },
        { title: 'Warranty Information', description: 'Understanding your Tesla warranty coverage' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: '💳',
      articles: [
        { title: 'Tesla Account Management', description: 'Manage your Tesla account and profile' },
        { title: 'Payment Methods', description: 'Add or update payment information' },
        { title: 'Supercharger Billing', description: 'Understanding charging costs and billing' },
        { title: 'Insurance Options', description: 'Tesla Insurance and other coverage options' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: '🛠️',
      articles: [
        { title: 'Common Issues', description: 'Solutions to frequently encountered problems' },
        { title: 'Touchscreen Problems', description: 'Resolving display and interface issues' },
        { title: 'Connectivity Issues', description: 'Fixing Wi-Fi and cellular connection problems' },
        { title: 'Emergency Procedures', description: 'What to do in emergency situations' }
      ]
    }
  ];

  const currentCategory = supportCategories.find(cat => cat.id === activeCategory);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleContactAction = (action) => {
    alert(`${action} feature would be implemented here`);
  };

  const handleArticleClick = (articleTitle) => {
    alert(`Opening article: ${articleTitle}`);
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {/* Hero Section */}
      <div className="container-fluid py-5 text-center" style={{ borderBottom: '1px solid #333' }}>
        <h1 className="display-4 fw-bold">Tesla Support</h1>
        <p className="lead text-muted">Get help with your Tesla vehicle, charging, account, and more</p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  backgroundColor: '#333', 
                  color: '#fff',
                  border: '1px solid #555'
                }}
              />
              <button 
                className="btn btn-outline-light" 
                onClick={handleSearch}
                style={{ borderColor: '#555' }}
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 col-lg-3 mb-4">
            <div className="list-group">
              {supportCategories.map(category => (
                <button
                  key={category.id}
                  className={`list-group-item list-group-item-action text-white border-0 ${
                    activeCategory === category.id ? 'bg-primary' : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ 
                    backgroundColor: activeCategory === category.id ? '#0d6efd' : '#333',
                    borderColor: '#555'
                  }}
                >
                  {category.icon} {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="col-md-8 col-lg-9">
            <div className="mb-4">
              <h2 className="fw-bold">{currentCategory.icon} {currentCategory.title}</h2>
            </div>
            <div className="row">
              {currentCategory.articles.map((article, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div 
                    className="card h-100" 
                    style={{ 
                      backgroundColor: '#333', 
                      borderColor: '#555',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    onClick={() => handleArticleClick(article.title)}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-white">{article.title}</h5>
                      <p className="card-text text-muted">{article.description}</p>
                      <button 
                        className="btn btn-outline-light btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleArticleClick(article.title);
                        }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="container py-5">
        <div className="card" style={{ backgroundColor: '#333', borderColor: '#555' }}>
          <div 
            className="card-header text-white" 
            style={{ backgroundColor: '#555' }}
          >
            <h4 className="mb-0">Still Need Help?</h4>
          </div>
          <div className="card-body">
            <div className="row text-center">
              {[
                { icon: '📞', label: 'Phone Support', desc: 'Call us for immediate assistance', btn: 'Call Now', action: 'Phone Support' },
                { icon: '💬', label: 'Live Chat', desc: 'Chat with our support team', btn: 'Start Chat', action: 'Live Chat' },
                { icon: '📧', label: 'Email Support', desc: 'Send us a detailed message', btn: 'Send Email', action: 'Email Support' }
              ].map((option, i) => (
                <div className="col-md-4 mb-3" key={i}>
                  <div className="p-4">
                    <div style={{ fontSize: '3rem' }} className="mb-2">{option.icon}</div>
                    <h5 className="text-white">{option.label}</h5>
                    <p className="text-muted">{option.desc}</p>
                    <button 
                      className="btn btn-outline-light"
                      onClick={() => handleContactAction(option.action)}
                      style={{ borderColor: '#555' }}
                    >
                      {option.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="py-4" 
        style={{ 
          backgroundColor: '#333', 
          borderTop: '1px solid #555' 
        }}
      >
        <div className="container text-center">
          <p className="text-muted mb-0">&copy; 2025 Tesla, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TeslaSupportPage;