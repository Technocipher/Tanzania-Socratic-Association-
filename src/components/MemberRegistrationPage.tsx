
import React, { useState } from 'react';
import { UserPlus, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MemberRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    schoolName: '',
    inWhatsAppGroup: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    
    if (!formData.inWhatsAppGroup) {
      newErrors.inWhatsAppGroup = 'Please select if you are in the WhatsApp group';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Prepare email content
    const emailSubject = encodeURIComponent('New Member Registration - TASSA');
    const emailBody = encodeURIComponent(`
New Member Registration for Tanzania Advanced Schools Socratic Association

Full Name: ${formData.fullName}
Phone Number: ${formData.phoneNumber}
Location: ${formData.location}
School Name: ${formData.schoolName}
Already in WhatsApp Group: ${formData.inWhatsAppGroup}

Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}
    `);

    // Prepare WhatsApp message
    const whatsappMessage = encodeURIComponent(`Hello, I am registering as a member of the Tanzania Advanced Schools Socratic Association.

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Location: ${formData.location}
School: ${formData.schoolName}
Already in WhatsApp Group: ${formData.inWhatsAppGroup}`);

    // Open email client
    window.open(`mailto:manumbadaudi@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(`https://wa.me/255752837561?text=${whatsappMessage}`, '_blank');
    }, 1000);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Registration Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering! We've received your details on email and WhatsApp. 
              Our team will review your application and get back to you soon.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  phoneNumber: '',
                  location: '',
                  schoolName: '',
                  inWhatsAppGroup: ''
                });
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Register Another Member
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-6">
            <UserPlus className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Member Registration</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the Tanzania Advanced Schools Socratic Association. Fill out the form below to become a registered member.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && (
                <p className="text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                Phone Number (with country code) *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="e.g., +255752837561"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className={errors.phoneNumber ? 'border-red-500' : ''}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                Location (District/Region) *
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter your district or region"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className={errors.location ? 'border-red-500' : ''}
              />
              {errors.location && (
                <p className="text-sm text-red-600">{errors.location}</p>
              )}
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <Label htmlFor="schoolName" className="text-sm font-medium text-gray-700">
                School Name *
              </Label>
              <Input
                id="schoolName"
                type="text"
                placeholder="Enter your school name"
                value={formData.schoolName}
                onChange={(e) => handleInputChange('schoolName', e.target.value)}
                className={errors.schoolName ? 'border-red-500' : ''}
              />
              {errors.schoolName && (
                <p className="text-sm text-red-600">{errors.schoolName}</p>
              )}
            </div>

            {/* WhatsApp Group Status */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Are you already in the WhatsApp Group? *
              </Label>
              <Select 
                value={formData.inWhatsAppGroup} 
                onValueChange={(value) => handleInputChange('inWhatsAppGroup', value)}
              >
                <SelectTrigger className={errors.inWhatsAppGroup ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              {errors.inWhatsAppGroup && (
                <p className="text-sm text-red-600">{errors.inWhatsAppGroup}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Submit Registration</span>
                  <MessageCircle className="h-5 w-5 ml-2" />
                </div>
              </Button>
            </div>

            {/* Information Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Upon submission, your registration details will be sent via email to our administration 
                and you'll be redirected to WhatsApp to complete the registration process.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistrationPage;
