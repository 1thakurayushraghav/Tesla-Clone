import React, { useEffect } from 'react';
import { Car, Shield, Users, BookOpen, Video, MessageSquare, Calendar, Wrench, MapPin, Building, Settings, Briefcase, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discover = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sections = [
    {
      title: 'RESOURCES',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Demo Drive', icon: <Car className="w-5 h-5" /> },
        { name: 'Insurance', icon: <Shield className="w-5 h-5" /> },
        { name: 'American Heroes', icon: <Users className="w-5 h-5" /> },
        { name: 'Learn', icon: <BookOpen className="w-5 h-5" /> },
        { name: 'Video Guides', icon: <Video className="w-5 h-5" /> },
        { name: 'Customer Stories', icon: <MessageSquare className="w-5 h-5" /> },
        { name: 'Events', icon: <Calendar className="w-5 h-5" /> },
        { name: 'Workshops', icon: <Wrench className="w-5 h-5" /> }
      ]
    },
    {
      title: 'LOCATION SERVICES',
      icon: <MapPin className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Find Us', icon: <MapPin className="w-5 h-5" /> },
        { name: 'Find a Collision Center', icon: <Settings className="w-5 h-5" /> },
        { name: 'Find a Certified Installer', icon: <Building className="w-5 h-5" /> }
      ]
    },
    {
      title: 'COMPANY',
      icon: <Briefcase className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-500',
      links: [
        { name: 'About', icon: <Users className="w-5 h-5" /> },
        { name: 'Careers', icon: <Briefcase className="w-5 h-5" /> },
        { name: 'Investor Relations', icon: <TrendingUp className="w-5 h-5" /> }
      ]
    }
  ];

  const handleLinkClick = (link) => {
    alert(`Navigating to ${link}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 pt-20">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Tesla
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore resources, services, and information about Tesla
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={sectionIndex * 100}
            >
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.gradient} px-6 py-5 text-white`}>
                <div className="flex items-center gap-3 mb-1">
                  {section.icon}
                  <h2 className="text-lg font-bold tracking-wider">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Links */}
              <div className="p-6">
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleLinkClick(link.name)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 rounded-xl transition-all duration-200 font-medium flex items-center gap-3 group"
                      >
                        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
                          {link.icon}
                        </span>
                        <span className="group-hover:text-gray-900 transition-colors">
                          {link.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Tesla?</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Schedule a demo drive, explore our vehicles, or visit a Tesla location near you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => alert('Scheduling demo drive')}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold text-lg hover:scale-105"
              >
                Schedule Demo Drive
              </button>
              <button 
                onClick={() => alert('Finding location')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg hover:scale-105"
              >
                Find a Location
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-aos="fade-up">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Test Drive</h3>
            <p className="text-gray-600">Experience the future of driving</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600">Industry-leading safety features</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Join Community</h3>
            <p className="text-gray-600">Connect with Tesla owners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;