
import React from 'react';
import { FileText, Calendar, Clock, Award, Download, BookOpen, Users } from 'lucide-react';

const SocraticSeriesExamsPage = () => {
  const examSeries = [
    {
      title: "Socratic Series 1",
      date: "March 2025",
      status: "Upcoming",
      subjects: ["Geography", "History", "Civics"],
      duration: "3 hours",
      fee: "15,000 TSh"
    },
    {
      title: "Socratic Series 2",
      date: "June 2025",
      status: "Registration Open",
      subjects: ["Geography", "History", "Civics"],
      duration: "3 hours",
      fee: "15,000 TSh"
    },
    {
      title: "Socratic Series 3",
      date: "September 2025",
      status: "Coming Soon",
      subjects: ["Geography", "History", "Civics"],
      duration: "3 hours",
      fee: "15,000 TSh"
    }
  ];

  const examFeatures = [
    {
      icon: FileText,
      title: "Comprehensive Coverage",
      description: "All topics from the national curriculum are covered in our examinations"
    },
    {
      icon: Award,
      title: "Quality Assessment",
      description: "Professional marking and detailed feedback for student improvement"
    },
    {
      icon: Users,
      title: "Competitive Environment",
      description: "Students compete with peers from schools across Tanzania"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to study materials and past papers for better preparation"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Socratic Series</span> Examinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional examination services designed to enhance student performance and 
            provide comprehensive assessment in Geography, History, and Civics.
          </p>
        </div>

        {/* Exam Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examSeries.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{exam.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exam.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                    exam.status === 'Registration Open' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {exam.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{exam.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award size={16} className="mr-2" />
                    <span>{exam.fee}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exam.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-md"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors ${
                    exam.status === 'Registration Open'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                  disabled={exam.status !== 'Registration Open'}
                >
                  {exam.status === 'Registration Open' ? 'Register Now' : 'Registration Closed'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Examinations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Register Your School?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join hundreds of schools across Tanzania in our comprehensive examination series. 
            Contact us today to register your students.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={() => window.open('https://chat.whatsapp.com/FVJNhBkmAcgFR3loBxekXH?mode=r_c', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Users className="mr-2" size={24} />
              Register via WhatsApp
            </button>
            <button
              onClick={() => window.open('tel:+255752837561')}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg rounded-full transition-all duration-300"
            >
              Call to Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocraticSeriesExamsPage;
