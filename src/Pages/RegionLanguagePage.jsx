import React, { useState, useMemo, useEffect } from 'react';
import { Search, Globe, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegionLanguagePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      countries: [
        { code: 'US', name: 'United States', languages: ['English'], flag: '🇺🇸' },
        { code: 'CA', name: 'Canada', languages: ['English', 'Français'], flag: '🇨🇦' },
        { code: 'MX', name: 'México', languages: ['Español'], flag: '🇲🇽' }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: [
        { code: 'DE', name: 'Deutschland', languages: ['Deutsch'], flag: '🇩🇪' },
        { code: 'FR', name: 'France', languages: ['Français'], flag: '🇫🇷' },
        { code: 'GB', name: 'United Kingdom', languages: ['English'], flag: '🇬🇧' },
        { code: 'IT', name: 'Italia', languages: ['Italiano'], flag: '🇮🇹' },
        { code: 'ES', name: 'España', languages: ['Español'], flag: '🇪🇸' },
        { code: 'NL', name: 'Nederland', languages: ['Nederlands'], flag: '🇳🇱' },
        { code: 'NO', name: 'Norge', languages: ['Norsk'], flag: '🇳🇴' },
        { code: 'SE', name: 'Sverige', languages: ['Svenska'], flag: '🇸🇪' },
        { code: 'DK', name: 'Danmark', languages: ['Dansk'], flag: '🇩🇰' },
        { code: 'BE', name: 'België', languages: ['Nederlands', 'Français'], flag: '🇧🇪' }
      ]
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      countries: [
        { code: 'CN', name: '中国', languages: ['中文'], flag: '🇨🇳' },
        { code: 'JP', name: '日本', languages: ['日本語'], flag: '🇯🇵' },
        { code: 'KR', name: '대한민국', languages: ['한국어'], flag: '🇰🇷' },
        { code: 'AU', name: 'Australia', languages: ['English'], flag: '🇦🇺' },
        { code: 'NZ', name: 'New Zealand', languages: ['English'], flag: '🇳🇿' },
        { code: 'SG', name: 'Singapore', languages: ['English'], flag: '🇸🇬' },
        { code: 'HK', name: '香港', languages: ['中文', 'English'], flag: '🇭🇰' }
      ]
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: [
        { code: 'AE', name: 'الإمارات العربية المتحدة', languages: ['العربية', 'English'], flag: '🇦🇪' },
        { code: 'IL', name: 'ישראל', languages: ['עברית', 'English'], flag: '🇮🇱' },
        { code: 'TR', name: 'Türkiye', languages: ['Türkçe'], flag: '🇹🇷' }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <Globe className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select Your Region
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your country or region to see local pricing, incentives, and delivery options
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
            />
          </div>
        </div>

        {/* Popular Regions */}
        {!searchTerm && (
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Regions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {regions.flatMap(region =>
                region.countries.filter(c => popularCountries.includes(c.code))
              ).map((country, index) => (
                <div
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {country.flag}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{country.name}</h3>
                  <p className="text-sm text-gray-500">{country.languages.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Regions */}
        <div className="space-y-12">
          {filteredRegions.map((region, regionIndex) => (
            <div key={region.id} data-aos="fade-up" data-aos-delay={regionIndex * 100}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{region.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {region.countries.map((country, countryIndex) => (
                  <div
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between"
                    data-aos="fade-right"
                    data-aos-delay={countryIndex * 30}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {country.flag}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{country.name}</h3>
                        <p className="text-sm text-gray-500">{country.languages.join(', ')}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRegions.length === 0 && (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No regions found</h3>
            <p className="text-gray-600 text-lg">
              Try searching with a different term or browse all available regions above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionLanguagePage;