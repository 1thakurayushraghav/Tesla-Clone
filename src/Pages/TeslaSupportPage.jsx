import React, { useState, useEffect } from 'react';
import { Search, Phone, MessageCircle, Mail, Car, Zap, Bot, Wrench, CreditCard, AlertCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeslaSupportPage = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const supportCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Car className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
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
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
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
      icon: <Bot className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
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
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
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
      icon: <CreditCard className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-500',
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
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16" data-aos="fade-down">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Tesla Support</h1>
            <p className="text-xl text-gray-300">Get help with your Tesla vehicle, charging, account, and more</p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-16 pr-6 py-5 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:ring-4 focus:ring-white/20 focus:border-white/40 outline-none transition-all"
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24" data-aos="fade-right">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {supportCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="flex-1">
            <div className="mb-8" data-aos="fade-left">
              <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${currentCategory.color} text-white rounded-full mb-4`}>
                {currentCategory.icon}
                <h2 className="text-2xl font-bold">{currentCategory.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCategory.articles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => handleArticleClick(article.title)}
                  className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <button className="text-blue-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">Still Need Help?</h2>
              <p className="text-gray-300 mt-2">Our support team is here to assist you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <button
                  onClick={() => handleContactAction('Phone Support')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  Call Now
                </button>
              </div>

              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team</p>
                <button
                  onClick={() => handleContactAction('Live Chat')}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold"
                >
                  Start Chat
                </button>
              </div>

              <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <button
                  onClick={() => handleContactAction('Email Support')}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeslaSupportPage;