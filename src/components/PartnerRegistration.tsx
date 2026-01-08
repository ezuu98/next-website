import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Building, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Download,
  ExternalLink,
  Home,
  ArrowLeft
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  companyName: string;
  businessType: string;
  role: string;
  experience: string;
  countries: string[];
  source: string;
  consent: boolean;
}

const PartnerRegistration = () => {
  const [currentStep, setCurrentStep] = useState<'form' | 'thank-you'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    phone: '',
    companyName: '',
    businessType: '',
    role: '',
    experience: '',
    countries: [],
    source: '',
    consent: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const businessTypes = [
    'Education Consultant',
    'Recruitment Agency',
    'Freelance Agent',
    'Other'
  ];

  const roles = [
    'Owner',
    'CEO',
    'Manager',
    'Counselor',
    'Other'
  ];

  const experienceOptions = [
    '1 year',
    '2 years',
    '3 years',
    '4 years',
    '5+ years'
  ];

  const countriesOfInterest = [
    'United Kingdom',
    'USA',
    'Canada',
    'Australia',
    'Europe',
    'UAE',
    'Cyprus'
  ];

  const sourceOptions = [
    'Referral',
    'Social Media',
    'Website',
    'Event',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.businessType) newErrors.businessType = 'Business type is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (formData.countries.length === 0) newErrors.countries = 'Please select at least one country';
    if (!formData.source) newErrors.source = 'Please select how you heard about us';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCountryToggle = (country: string) => {
    const updatedCountries = formData.countries.includes(country)
      ? formData.countries.filter(c => c !== country)
      : [...formData.countries, country];
    handleInputChange('countries', updatedCountries);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit to backend API endpoint
      const response = await fetch('/api/register-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          country: formData.country,
          city: formData.city,
          phone: formData.phone,
          companyName: formData.companyName,
          businessType: formData.businessType,
          role: formData.role,
          experience: formData.experience,
          countries: formData.countries,
          source: formData.source,
          consent: formData.consent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Registration failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      setCurrentStep('thank-you');
      
    } catch (error) {
      console.error('Registration error:', error);
      
      // Show detailed error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Registration failed: ${errorMessage}\n\nPlease ensure the backend server is running and try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goHome = () => {
    window.location.href = '/';
  };

  if (currentStep === 'thank-you') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white flex items-center justify-center p-6">
        <motion.div
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="h-10 w-10 text-teal-500" />
          </motion.div>

          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            🎉 Thank You for Registering with ApplyNext!
          </motion.h1>

          <motion.p
            className="text-xl text-navy-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your application has been received successfully.
          </motion.p>

          <motion.div
            className="bg-gray-50 rounded-2xl p-6 mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-semibold text-navy-900 mb-4">What happens next:</h3>
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">🔧 Debug Information</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>Supabase URL: {import.meta.env.VITE_SUPABASE_URL ? '✅ Configured' : '❌ Missing'}</p>
                <p>Supabase Key: {import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Configured' : '❌ Missing'}</p>
                <p>Registration will submit directly to Supabase database</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-navy-800">Profile Review</h4>
                  <p className="text-navy-600 text-sm">Our team verifies your details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-navy-800">Welcome Onboarding</h4>
                  <p className="text-navy-600 text-sm">You'll receive login instructions if approved</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-navy-800">Start Recruiting</h4>
                  <p className="text-navy-600 text-sm">Connect students with 500+ institutions and earn up to 80% commissions</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-navy-100 hover:bg-navy-200 text-navy-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Partner Guide</span>
              </button>
              <button className="flex-1 bg-teal-100 hover:bg-teal-200 text-teal-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Explore Institutions</span>
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-navy-600 mb-2">Questions? Contact us at:</p>
              <a href="mailto:partners@applynext.com" className="text-teal-600 font-medium hover:text-teal-700">
                partners@applynext.com
              </a>
            </div>
          </motion.div>

          <motion.button
            onClick={goHome}
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center space-x-2 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={goHome}
            className="flex items-center space-x-2 text-navy-600 hover:text-teal-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Become a Partner
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Join our global network of recruitment specialists and start connecting students with world-class institutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-6 w-6 text-teal-500" />
                <h2 className="text-2xl font-bold text-navy-900">Personal Details</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your country"
                  />
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your city"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building className="h-6 w-6 text-teal-500" />
                <h2 className="text-2xl font-bold text-navy-900">Company Details</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Type of Business *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.businessType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.role ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select experience level</option>
                    {experienceOptions.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>
              </div>
            </div>

            {/* Interest */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-6 w-6 text-teal-500" />
                <h2 className="text-2xl font-bold text-navy-900">Countries of Interest</h2>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-4">
                  Which countries are you interested in recruiting for? *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {countriesOfInterest.map(country => (
                    <label key={country} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.countries.includes(country)}
                        onChange={() => handleCountryToggle(country)}
                        className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-navy-700">{country}</span>
                    </label>
                  ))}
                </div>
                {errors.countries && <p className="text-red-500 text-sm mt-2">{errors.countries}</p>}
              </div>
            </div>

            {/* Source */}
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-2">
                How did you hear about us? *
              </label>
              <select
                value={formData.source}
                onChange={(e) => handleInputChange('source', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                  errors.source ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select source</option>
                {sourceOptions.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
              {errors.source && <p className="text-red-500 text-sm mt-1">{errors.source}</p>}
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
                />
                <span className="text-navy-700">
                  I agree to the{' '}
                  <a href="/terms" target="_blank" className="text-teal-600 hover:text-teal-700 underline">
                    terms and conditions
                  </a>{' '}
                  *
                </span>
              </label>
              {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Register Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerRegistration;