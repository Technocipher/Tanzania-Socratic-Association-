import React, { useState } from 'react';
import { Search, Download, Trophy, TrendingUp, Users, Award, FileText, Calendar, ExternalLink, Clock } from 'lucide-react';

const SocraticSeriesResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('all');

  const resultsSeries = [
    {
      id: 'series1-2024',
      title: 'Socratic Series 1 - 2024',
      date: 'March 2024',
      participants: 2500,
      status: 'Pending'
    },
    {
      id: 'series2-2024',
      title: 'Socratic Series 2 - 2024',
      date: 'June 2024',
      participants: 3200,
      status: 'Pending'
    },
    {
      id: 'series3-2024',
      title: 'Socratic Series 3 - 2024',
      date: 'September 2024',
      participants: 2800,
      status: 'Pending'
    }
  ];

  const statistics = [
    {
      icon: Users,
      title: 'Total Participants',
      value: '8,500+',
      description: 'Students participated in 2024'
    },
    {
      icon: Trophy,
      title: 'Average Performance',
      value: '78.5%',
      description: 'Overall average score'
    },
    {
      icon: TrendingUp,
      title: 'Improvement Rate',
      value: '15%',
      description: 'Year-over-year improvement'
    },
    {
      icon: Award,
      title: 'Excellence Awards',
      value: '250+',
      description: 'Students awarded for excellence'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Animated Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse mb-4">
              SOCRATIC SERIES RESULTS
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
          </div>
          <div className="relative inline-block mt-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent animate-pulse">
              & SCHOOL PERFORMANCE
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-lg blur-lg opacity-25 animate-pulse"></div>
          </div>
        </div>

        {/* Original Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Comprehensive</span> Academic Excellence
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access comprehensive examination results, performance analytics, and recognition 
            for outstanding achievements across all participating schools.
          </p>
        </div>

        {/* Access Results Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Access Complete Results
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Download the complete Socratic Series examination results including all participating schools, 
            rankings, and detailed performance analytics.
          </p>
          <button
            onClick={() => window.open('https://gofile.io/d/BQC8o2', '_blank')}
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="mr-2" size={24} />
            Download Complete Results
            <ExternalLink className="ml-2" size={20} />
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by school name or student ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Series</option>
              {resultsSeries.map((series) => (
                <option key={series.id} value={series.id}>
                  {series.title}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Search className="mr-2" size={16} />
              Search Results
            </button>
            <button
              onClick={() => window.open('https://gofile.io/d/BQC8o2', '_blank')}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Download className="mr-2" size={16} />
              Download Complete Results
            </button>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-700 mb-1">{stat.title}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Available Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Results</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-orange-500 mb-4">
              <Clock size={48} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Results Pending</h3>
            <p className="text-gray-600 mb-6">
              Examination results are currently being processed and will be available soon. 
              Please check back later for updates.
            </p>
            <button
              onClick={() => window.open('https://gofile.io/d/BQC8o2', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <Download className="mr-2" size={16} />
              Download Complete Results
            </button>
          </div>
        </div>

        {/* Top Performers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Performing Schools</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-orange-500 mb-4">
              <Clock size={48} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rankings Pending</h3>
            <p className="text-gray-600 mb-6">
              Top performing schools rankings are currently being processed and will be available soon.
            </p>
            <button
              onClick={() => window.open('https://gofile.io/d/BQC8o2', '_blank')}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <Download className="mr-2" size={16} />
              Download Complete Results
            </button>
          </div>
        </div>

        {/* Contact for Results */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Finding Your Results?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Can't find your school's results or need assistance? Contact our support team 
            for personalized help with accessing your examination results.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={() => window.open('https://chat.whatsapp.com/FVJNhBkmAcgFR3loBxekXH?mode=r_c', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Users className="mr-2" size={24} />
              Contact Support
            </button>
            <button
              onClick={() => window.open('tel:+255752837561')}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg rounded-full transition-all duration-300"
            >
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocraticSeriesResultsPage;
