
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Open email client with pre-filled content
    const subject = encodeURIComponent(`Message from ${formData.name} - TASSA Contact Form`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`);
    
    const mailtoLink = `mailto:manumbadaudi@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our association, need more information about our services, 
            or want to register your school? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                  <a 
                    href="tel:+255752837561"
                    className="text-green-600 hover:text-green-700 font-medium text-lg"
                  >
                    +255752837561
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Available Monday - Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                  <a 
                    href="mailto:manumbadaudi@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    manumbadaudi@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700 font-medium">Nyankumbu Girls High School</p>
                  <p className="text-gray-600 text-sm mt-1">Tanzania</p>
                </div>
              </div>
            </div>

            {/* Join WhatsApp Group */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <MessageCircle className="mr-2" size={24} />
                Join Our WhatsApp Group
              </h3>
              <p className="mb-4 text-green-100">
                Connect with other educators and stay updated with the latest news and resources.
              </p>
              <button
                onClick={() => window.open('https://chat.whatsapp.com/FVJNhBkmAcgFR3loBxekXH?mode=r_c', '_blank')}
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                This will open your email client to send the message directly to us.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can my school join the association?
              </h3>
              <p className="text-gray-600">
                Contact us directly via phone or email, or join our WhatsApp group to get started. 
                We'll guide you through the registration process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What services do you provide?
              </h3>
              <p className="text-gray-600">
                We provide Geography examinations, study materials, educational resources, 
                and a platform for schools to collaborate and share best practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are there any membership fees?
              </h3>
              <p className="text-gray-600">
                Contact us for detailed information about membership requirements and any 
                associated costs. We strive to keep our services accessible to all schools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I purchase study materials?
              </h3>
              <p className="text-gray-600">
                Visit our Store page to browse available materials. You can purchase them 
                online using various payment methods including M-Pesa and Visa cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
