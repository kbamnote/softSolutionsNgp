import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya gaya
import { Eye, EyeOff, Lock, Mail, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate(); // Navigation function initialize kiya
  const [showPassword, setShowPassword] = useState(false);
  
  // Submit function jo user ko login page par bhej dega
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account creating...');
    
    // Account creation logic ke baad login page par redirect
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#00cde5] rounded-full flex items-center justify-center text-white font-black text-xl">$</div>
            <span className="text-2xl font-extrabold text-[#1c2c52] tracking-tight">Soft Solution</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#1c2c52]">Create Account</h2>
          <p className="mt-2 text-sm text-gray-500">Join us to manage your loans easily</p>
        </div>

        {/* Form par handleSubmit lagaya gaya hai */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#1c2c52] mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input type="text" required className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde5]" placeholder="Enter your name" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1c2c52] mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input type="email" required className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde5]" placeholder="Enter your email" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#1c2c52] mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input type={showPassword ? 'text' : 'password'} required className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00cde5]" placeholder="Create a password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Button click par ab Login page open hoga */}
          <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-[#00cde5] hover:bg-[#1c2c52] transition-colors shadow-lg shadow-cyan-100">
            Sign Up <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account? <Link to="/login" className="font-medium text-[#00cde5] hover:text-[#1c2c52] transition-colors">Sign in now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;