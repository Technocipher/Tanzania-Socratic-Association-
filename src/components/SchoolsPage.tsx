
import React from 'react';
import { School, MapPin, Users } from 'lucide-react';

const SchoolsPage = () => {
  const schools = [
    'CHATO TECH SS',
    'JANETH MAGUFULI GIRLS SS',
    'MUUNGANO BOYS SS',
    'JIKOMBOE GIRLS SS',
    'RUBYA SEMINARY',
    'MPEMBA SS',
    'DR OLSEN SS',
    'NYANTAKARA SS',
    'KAGANGO SS',
    'MWILAMVYA SS',
    'NYARUBANDA SS',
    'DAREDA HIGH SCHOOL',
    'ARUSHA SCIENCE SS',
    'KORONA SS',
    'HIGH VIEW SCHOOL OF ZANZIBAR',
    'MWINYI SS',
    'NASIBUGANI SS',
    'KORONA SS',
    'CAMEL MOUNT GIRLS SS',
    'BEROYA SS',
    'RUGAMBWA SS',
    'DR SAMIA SULUHU HASSAN GIRLS SS',
    'NYANKUMBU GIRLS HIGH SCHOOL'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Registered Schools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our growing network of educational institutions across Tanzania that are part of the 
            Tanzania Advanced Schools Socratic Association.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center bg-green-100 px-6 py-3 rounded-full">
              <School className="text-green-600 mr-2" size={24} />
              <span className="text-green-800 font-semibold">{schools.length} Schools</span>
            </div>
            <div className="flex items-center bg-blue-100 px-6 py-3 rounded-full">
              <MapPin className="text-blue-600 mr-2" size={24} />
              <span className="text-blue-800 font-semibold">Nationwide Coverage</span>
            </div>
            <div className="flex items-center bg-yellow-100 px-6 py-3 rounded-full">
              <Users className="text-yellow-600 mr-2" size={24} />
              <span className="text-yellow-800 font-semibold">Growing Community</span>
            </div>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {schools.map((school, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <School className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{school}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    <span>Tanzania</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Your School Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Become part of our growing network of schools committed to excellence in Geography education. 
            Benefit from our examination services, educational resources, and collaborative community.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={() => window.open('https://chat.whatsapp.com/FVJNhBkmAcgFR3loBxekXH?mode=r_c', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Users className="mr-2" size={24} />
              Join Our Association
            </button>
            <button
              onClick={() => window.open('tel:+255752837561')}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg rounded-full transition-all duration-300"
            >
              Contact Us Directly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;
