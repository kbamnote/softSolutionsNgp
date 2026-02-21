import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, User, Briefcase, IndianRupee, FileText, Send } from 'lucide-react';
import { ToastContainer, useToast } from '../components/Toast';

const ApplyForLoan = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toasts, addToast, removeToast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    panNumber: '', // Changed from SSN
    address: '',
    city: '',
    state: '',
    pincode: '', // Changed from Zip
    // Employment
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    yearsEmployed: '',
    monthlyIncome: '',
    // Loan Details
    loanType: '',
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    // Additional
    hasCoSigner: false,
    coSignerName: '',
    agreeTerms: false,
  });

  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validation function for each step
  const validateStep = (step) => {
    const errors = [];
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) errors.push('First Name is required');
        if (!formData.lastName.trim()) errors.push('Last Name is required');
        if (!formData.email.trim()) errors.push('Email is required');
        if (!formData.phone.trim()) errors.push('Phone Number is required');
        if (!formData.dob) errors.push('Date of Birth is required');
        if (!formData.panNumber.trim()) errors.push('PAN Number is required');
        if (!formData.address.trim()) errors.push('Address is required');
        if (!formData.city.trim()) errors.push('City is required');
        if (!formData.state) errors.push('State is required');
        if (!formData.pincode.trim()) errors.push('Pincode is required');
        break;
      case 2:
        if (!formData.employmentStatus) errors.push('Employment Status is required');
        if (!formData.monthlyIncome.trim()) errors.push('Monthly Income is required');
        break;
      case 3:
        if (!formData.loanType) errors.push('Loan Type is required');
        if (!formData.loanAmount.trim()) errors.push('Loan Amount is required');
        if (!formData.loanTerm) errors.push('Loan Term is required');
        break;
      case 4:
        if (!formData.agreeTerms) errors.push('You must agree to the Terms and Conditions');
        break;
      default:
        break;
    }
    
    return errors;
  };

  const nextStep = () => {
    const errors = validateStep(currentStep);
    if (errors.length > 0) {
      addToast(errors[0], 'error');
      return;
    }
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all steps before final submission
    const allErrors = [];
    for (let i = 1; i <= totalSteps; i++) {
      const stepErrors = validateStep(i);
      allErrors.push(...stepErrors);
    }
    
    if (allErrors.length > 0) {
      addToast('Please fill in all required fields before submitting.', 'error');
      return;
    }
    
    addToast('Thank you for your loan application! We have received your details and our team will contact you within 24-48 hours for further processing.', 'success');
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Employment', icon: Briefcase },
    { number: 3, title: 'Loan Details', icon: IndianRupee },
    { number: 4, title: 'Review', icon: FileText },
  ];

  const indianStates = [
    "Maharashtra", "Delhi", "Karnataka", "Gujarat", "Tamil Nadu", 
    "Uttar Pradesh", "West Bengal", "Rajasthan", "Punjab", "Haryana"
  ];

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div>
        {/* Hero Section */}
      <section className="relative py-24 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Apply background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Apply For Loan</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Apply For Loan</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        currentStep >= step.number
                          ? 'bg-easilon-cyan text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <Check size={20} />
                      ) : (
                        <step.icon size={20} />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-easilon-navy' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-1 mx-4 ${
                        currentStep > step.number ? 'bg-easilon-cyan' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-easilon-navy mb-6">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="Rahul"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="rahul@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">PAN Card Number *</label>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        maxLength={10}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan uppercase"
                        placeholder="ABCDE1234F"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Residential Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="Flat No, Building, Street Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="Mumbai"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-easilon-navy mb-2">State *</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        >
                          <option value="">Select</option>
                          {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-easilon-navy mb-2">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          maxLength={6}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                          placeholder="400001"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Employment Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-easilon-navy mb-6">Employment Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Employment Status *</label>
                      <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                      >
                        <option value="">Select Status</option>
                        <option value="employed">Salaried</option>
                        <option value="selfemployed">Self-employed / Business</option>
                        <option value="retired">Retired</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Employer/Business Name</label>
                      <input
                        type="text"
                        name="employerName"
                        value={formData.employerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Monthly Take-home Salary *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          name="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={handleChange}
                          required
                          className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                          placeholder="50,000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Loan Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-easilon-navy mb-6">Loan Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Loan Type *</label>
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                      >
                        <option value="">Select Loan Type</option>
                        <option value="personal">Personal Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="auto">Car Loan</option>
                        <option value="bike">Two Wheeler Loan</option>
                        <option value="business">Business Loan</option>
                        <option value="education">Education Loan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Loan Amount Required *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleChange}
                          required
                          className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                          placeholder="1,00,000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-easilon-navy mb-2">Preferred Term (Months) *</label>
                      <select
                        name="loanTerm"
                        value={formData.loanTerm}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-easilon-cyan"
                      >
                        <option value="">Select Term</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                        <option value="36">36 Months</option>
                        <option value="60">60 Months</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-easilon-navy mb-6">Review Your Application</h2>
                <div className="space-y-6">
                  {/* Personal Info Box */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-easilon-navy mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p><span className="text-easilon-gray">Name:</span> {formData.firstName} {formData.lastName}</p>
                      <p><span className="text-easilon-gray">Email:</span> {formData.email}</p>
                      <p><span className="text-easilon-gray">Phone:</span> {formData.phone}</p>
                      <p><span className="text-easilon-gray">PAN Number:</span> {formData.panNumber}</p>
                      <p><span className="text-easilon-gray">Address:</span> {formData.address}, {formData.city}, {formData.state} {formData.pincode}</p>
                    </div>
                  </div>

                  {/* Employment Box */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-easilon-navy mb-4">Employment</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p><span className="text-easilon-gray">Status:</span> {formData.employmentStatus}</p>
                      <p><span className="text-easilon-gray">Employer:</span> {formData.employerName || 'N/A'}</p>
                      <p><span className="text-easilon-gray">Monthly Income:</span> ₹{formData.monthlyIncome}</p>
                    </div>
                  </div>

                  {/* Loan Details Box */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-easilon-navy mb-4">Loan Details</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p><span className="text-easilon-gray">Type:</span> {formData.loanType}</p>
                      <p><span className="text-easilon-gray">Amount:</span> ₹{formData.loanAmount}</p>
                      <p><span className="text-easilon-gray">Purpose:</span> {formData.loanPurpose}</p>
                      <p><span className="text-easilon-gray">Term:</span> {formData.loanTerm} Months</p>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 mt-0.5 text-easilon-cyan border-gray-300 rounded focus:ring-easilon-cyan"
                    />
                    <label className="text-sm text-easilon-gray">
                      I agree to the <a href="#" className="text-easilon-cyan hover:underline">Terms and Conditions</a> and{' '}
                      <a href="#" className="text-easilon-cyan hover:underline">Privacy Policy</a>. I confirm that all information provided is accurate.
                    </label>
                  </div>
                </div>
              </div>
            )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-8 pt-6 border-t gap-3 sm:gap-0">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-semibold rounded-lg w-full sm:w-auto ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-easilon-navy hover:bg-gray-300'
                  }`}
                >
                  <ChevronLeft size={18} />
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </button>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-easilon-cyan text-white font-semibold rounded-lg hover:bg-easilon-navy transition-colors w-full sm:w-auto"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.agreeTerms}
                    className={`flex items-center justify-center gap-2 px-4 sm:px-8 py-3 font-semibold rounded-lg w-full sm:w-auto ${
                      formData.agreeTerms
                        ? 'bg-easilon-cyan text-white hover:bg-easilon-navy'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span className="hidden sm:inline">Submit Application</span>
                    <span className="sm:hidden">Submit</span>
                    <Send size={18} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ApplyForLoan;