
import React, { useState } from 'react';
import { UserPlus, Mail, Phone, MapPin, School, Users, CheckCircle } from 'lucide-react';

const MemberRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    schoolName: '',
    inWhatsAppGroup: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create email message
    const emailSubject = 'New Member Registration - TASSA';
    const emailBody = `
New member registration for Tanzania Advanced Schools Socratic Association:

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Location: ${formData.location}
School: ${formData.schoolName}
Already in WhatsApp Group: ${formData.inWhatsAppGroup}
`;

    // Create WhatsApp message
    const whatsappMessage = `Hello, I am registering as a member of the Tanzania Advanced Schools Socratic Association.

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Location: ${formData.location}
School: ${formData.schoolName}
Already in WhatsApp Group: ${formData.inWhatsAppGroup}`;

    // Open email client
    const mailtoLink = `mailto:manumbadaudi@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);

    // Open WhatsApp
    const whatsappLink = `https://wa.me/255752837561?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Registration Successful!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for registering! We've received your details via email and WhatsApp. 
              Our team will get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300"
            >
              Register Another Member
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <UserPlus className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Member Registration</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Tanzania Advanced Schools Socratic Association and become part of our educational community.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="flex items-center text-sm font-medium text-foreground mb-2">
                <UserPlus className="h-4 w-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="flex items-center text-sm font-medium text-foreground mb-2">
                <Phone className="h-4 w-4 mr-2" />
                Phone Number (with country code) *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
                placeholder="+255 xxx xxx xxx"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-destructive">{errors.phoneNumber}</p>}
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="flex items-center text-sm font-medium text-foreground mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                Location (District/Region) *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
                placeholder="Enter your district/region"
              />
              {errors.location && <p className="mt-1 text-sm text-destructive">{errors.location}</p>}
            </div>

            {/* School Name */}
            <div>
              <label htmlFor="schoolName" className="flex items-center text-sm font-medium text-foreground mb-2">
                <School className="h-4 w-4 mr-2" />
                School Name *
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
                placeholder="Enter your school name"
              />
              {errors.schoolName && <p className="mt-1 text-sm text-destructive">{errors.schoolName}</p>}
            </div>

            {/* WhatsApp Group Status */}
            <div>
              <label htmlFor="inWhatsAppGroup" className="flex items-center text-sm font-medium text-foreground mb-2">
                <Users className="h-4 w-4 mr-2" />
                Are you already in the WhatsApp Group? *
              </label>
              <select
                id="inWhatsAppGroup"
                name="inWhatsAppGroup"
                value={formData.inWhatsAppGroup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.inWhatsAppGroup && <p className="mt-1 text-sm text-destructive">{errors.inWhatsAppGroup}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Register Now
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-secondary border border-border rounded-lg p-6">
          <p className="text-secondary-foreground text-center">
            <strong>Note:</strong> After submitting this form, your details will be sent via email and WhatsApp. 
            Please ensure all information is accurate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistrationPage;
