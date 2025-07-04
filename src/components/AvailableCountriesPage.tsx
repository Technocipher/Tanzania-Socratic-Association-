
import React from 'react';
import { Globe } from 'lucide-react';

const AvailableCountriesPage = () => {
  const countries = [
    { name: 'Tanzania', flag: '🇹🇿', status: 'Available' },
    { name: 'Kenya', flag: '🇰🇪', status: 'Available' },
    { name: 'Uganda', flag: '🇺🇬', status: 'Available' },
    { name: 'Rwanda', flag: '🇷🇼', status: 'Available' },
    { name: 'Congo', flag: '🇨🇩', status: 'Available' },
    { name: 'South Africa', flag: '🇿🇦', status: 'Available' },
    { name: 'Malawi', flag: '🇲🇼', status: 'Available' },
    { name: 'United States of America (USA)', flag: '🇺🇸', status: 'Available' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Globe className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Available Countries</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our services are currently available in the following countries:
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="text-center">
                {/* Flag */}
                <div className="text-6xl mb-4">
                  {country.flag}
                </div>
                
                {/* Country Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {country.name}
                </h3>
                
                {/* Status */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {country.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Expanding Our Reach
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              The Tanzania Advanced Schools Socratic Association is committed to providing quality Geography education 
              and examination services across multiple countries. We continue to expand our services to reach more 
              students and educational institutions worldwide.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300">
              <Globe className="h-5 w-5 mr-2" />
              Join Our Global Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCountriesPage;
