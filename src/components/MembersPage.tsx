
import React, { useState } from 'react';
import { Users, School, Search, MapPin, User, Award } from 'lucide-react';

const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const members = [
    { id: 1, name: 'Mwl. Daudi Musula Manumba', schools: 'Nyankumbu Girls SS & Janeth Magufuli Girls SS' },
    { id: 2, name: 'Mwl. Baluhya Mbonge', schools: 'Muungano Boys SS' },
    { id: 3, name: 'Mwl. Mapambano Muhike', schools: 'Nyankumbu Girls SS' },
    { id: 4, name: 'Mwl. Hassan L', schools: 'Chato Technical SS' },
    { id: 5, name: 'Mwl. Lameck Mubilizi', schools: 'Muungano Boys SS' },
    { id: 6, name: 'Jastine J', schools: 'Muungano Boys SS' },
    { id: 7, name: 'Lazaro Wilson', schools: 'Dr Olsen SS' },
    { id: 8, name: 'Nestory Ernest', schools: 'Kagango SS' },
    { id: 9, name: 'Dalton Kawiche', schools: 'Carmel Mount Girls SS' },
    { id: 10, name: 'Kastory Epimack Maligite', schools: 'Lucas Malia SS' },
    { id: 11, name: 'John Mgina', schools: 'Mpemba SS' },
    { id: 12, name: 'Omary Jalali Mombo', schools: 'Arusha Science SS' },
    { id: 13, name: 'Elizabeth Justine Mlazi', schools: 'Kifungilo Girls SS' },
    { id: 14, name: 'Shukuru Sizya Kadondo', schools: 'Chato Technical SS' },
    { id: 15, name: 'Winfrida Daudi Kirai', schools: 'Chato Technical SS' },
    { id: 16, name: 'Fr. Prophilius', schools: 'Rubya Seminary' },
    { id: 17, name: 'Makame Mwadini', schools: 'High View School of Zanzibar' },
    { id: 18, name: 'Pontien Tushabe', schools: 'Bukama SS' },
    { id: 19, name: 'Samson Paulo Kususiya', schools: 'Geita Adventist SS & Mwatulole SS' },
    { id: 20, name: 'Juma J.', schools: 'Jikomboe High School' },
    { id: 21, name: 'Jimmy Mrema', schools: 'Korona SS' },
    { id: 22, name: 'Dk. Mmari', schools: 'Korona SS' },
    { id: 23, name: 'Fidelis Ngowi', schools: 'Marangu SS' },
    { id: 24, name: 'Amos A', schools: 'Beroya SS' },
    { id: 25, name: 'Flourece Kahima', schools: 'Nyantakara SS' },
    { id: 26, name: 'Jonas Bichwa', schools: 'Mwilamvya SS' },
    { id: 27, name: 'Mussa Choyo', schools: 'Dr. Samia Suluhu Hassan Girls SS' },
    { id: 28, name: 'Abdulasaid Bashiru', schools: 'Laureate School of Zanzibar' },
    { id: 29, name: 'Detrick Buberwa', schools: 'Rugambwa Girls SS' },
    { id: 30, name: 'Theodory Fulgence', schools: 'Mwisi SS' }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.schools.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statistics = [
    {
      icon: Users,
      title: 'Total Members',
      value: '30',
      description: 'Active TASSA members'
    },
    {
      icon: School,
      title: 'Schools Represented',
      value: '25+',
      description: 'Secondary schools'
    },
    {
      icon: Award,
      title: 'Excellence Network',
      value: '100%',
      description: 'Committed to quality education'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Users className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              TASSA <span className="text-green-600">Members</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our dedicated members who are committed to advancing Geography education 
            and academic excellence across Tanzania's secondary schools.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {/* Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by member name or school..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Members List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Member Directory</h2>
            <p className="text-gray-600">Complete list of TASSA members and their affiliated schools</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Member Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">School(s)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">#{member.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                          <User className="text-white" size={16} />
                        </div>
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <School className="text-gray-400 mr-2" size={16} />
                        <div className="text-sm text-gray-900">{member.schools}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No members found matching your search.</p>
            </div>
          )}
        </div>

        {/* Join Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Become a TASSA member and connect with fellow Geography educators across Tanzania. 
            Together, we can enhance the quality of Geography education in our schools.
          </p>
          <button
            onClick={() => window.location.hash = '#register'}
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users className="mr-2" size={24} />
            Register as Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
