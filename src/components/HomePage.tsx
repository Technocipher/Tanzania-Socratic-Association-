import React from 'react';
import { ExternalLink, Users, BookOpen, Award, UserPlus } from 'lucide-react';

const HomePage = () => {
  const handleJoinAssociation = () => {
    window.open('https://chat.whatsapp.com/FVJNhBkmAcgFR3loBxekXH?mode=r_c', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to Tanzania Advanced Schools 
                <span className="text-yellow-300"> Socratic Association</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Empowering Students Through Quality Geography Education Across Tanzania
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleJoinAssociation}
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Users className="mr-2" size={24} />
                  Join WhatsApp Group
                  <ExternalLink className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => window.location.hash = '#register'}
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white/30"
                >
                  <UserPlus className="mr-2" size={24} />
                  Register as Member
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
                  <img
                    src="/lovable-uploads/3d961545-8411-4450-be9e-c107ce883cdc.png"
                    alt="Mr. Daudi Musula Manumba - Founder"
                    className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg">
                  <p className="font-semibold text-sm">Mr. Daudi Musula Manumba</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TASSA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to improving Geography education standards across Tanzania through innovative teaching methods and comprehensive examination services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Education</h3>
              <p className="text-gray-600">
                Expert-designed Geography curriculum and examination materials to enhance student performance.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">23+ Schools</h3>
              <p className="text-gray-600">
                A growing network of registered schools across Tanzania benefiting from our programs.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Improved academic performance and better examination results for participating students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Educational Community?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Connect with fellow educators and students. Access quality Geography materials and examinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleJoinAssociation}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Users className="mr-2" size={24} />
              Join Our WhatsApp Group
              <ExternalLink className="ml-2" size={20} />
            </button>
            <button
              onClick={() => window.location.hash = '#register'}
              className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
            >
              <UserPlus className="mr-2" size={24} />
              Become a Member
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
