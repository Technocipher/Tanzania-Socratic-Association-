
import React, { useState } from 'react';
import { FileText, Calendar, Clock, Award, Download, BookOpen, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const SocraticSeriesExamsPage = () => {
  const [selectedSeries, setSelectedSeries] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    numberOfStudents: ''
  });

  const examSeries = [
    {
      title: "Socratic Series 1",
      date: "July 2025",
      status: "Marking process ongoing",
      subjects: ["Geography"],
      duration: "3 hours"
    },
    {
      title: "Socratic Series 2",
      date: "Later in 2025",
      status: "Coming Soon",
      subjects: ["Geography"],
      duration: "3 hours"
    },
    {
      title: "Socratic Series 3",
      date: "End of 2025",
      status: "Coming Soon",  
      subjects: ["Geography"],
      duration: "3 hours"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = (seriesTitle: string) => {
    setSelectedSeries(seriesTitle);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { schoolName, contactPerson, phoneNumber, email, numberOfStudents } = formData;
    
    const message = `*EXAM REGISTRATION REQUEST*\n\n` +
      `Series: ${selectedSeries}\n` +
      `School Name: ${schoolName}\n` +
      `Contact Person: ${contactPerson}\n` +
      `Phone Number: ${phoneNumber}\n` +
      `Email: ${email}\n` +
      `Number of Students: ${numberOfStudents}\n\n` +
      `Please process our registration for the ${selectedSeries}.`;

    const whatsappUrl = `https://wa.me/255752837561?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close dialog
    setFormData({
      schoolName: '',
      contactPerson: '',
      phoneNumber: '',
      email: '',
      numberOfStudents: ''
    });
    setIsDialogOpen(false);
  };

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
            provide comprehensive assessment in Geography.
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
                    exam.status === 'Registration Going' ? 'bg-green-100 text-green-800' :
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
                  onClick={() => handleRegister(exam.title)}
                  className="w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors bg-green-600 hover:bg-green-700 text-white"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">
                Register for {selectedSeries}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                  School Name *
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter school name"
                />
              </div>
              
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter contact person name"
                />
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label htmlFor="numberOfStudents" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Students *
                </label>
                <input
                  type="number"
                  id="numberOfStudents"
                  name="numberOfStudents"
                  value={formData.numberOfStudents}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter number of students"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Send to WhatsApp
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

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
