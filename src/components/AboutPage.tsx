
import React from 'react';
import { MapPin, Users, BookOpen, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="text-green-600">Association</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our founder, mission, and commitment to advancing Geography education across Tanzania.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    Mr. Daudi Musula Manumba
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Mr. Daudi Musula Manumba is the founder and owner of the Tanzania Advanced Schools 
                    Socratic Association. With years of dedicated service in education, he has established 
                    himself as a leading figure in Geography education across Tanzania.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Current Position</h4>
                      <p className="text-gray-600">Geography Teacher at Nyankumbu Girls High School</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <BookOpen className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Previous Experience</h4>
                      <p className="text-gray-600">Former Geography Teacher at Chato Technical Secondary School and Janeth Magufuli High School</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mission</h4>
                      <p className="text-gray-600">
                        Hosting Geography Examinations to improve students' academic performance across Tanzania
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border-4 border-white/50">
                  <img
                    src="/placeholder.svg"
                    alt="Mr. Daudi Musula Manumba"
                    className="w-72 h-72 rounded-xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To enhance the quality of Geography education in Tanzania by providing comprehensive 
              examination services, educational resources, and fostering a community of dedicated 
              educators and students committed to academic excellence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading educational association in Tanzania, recognized for transforming 
              Geography education standards and creating a network of empowered schools that 
              produce academically excellent students prepared for global challenges.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">23+</div>
              <div className="text-gray-700 font-medium">Registered Schools</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Geography Teachers</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">Students Impacted</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
