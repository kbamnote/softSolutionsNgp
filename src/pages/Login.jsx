import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // --- NAYA FUNCTION: Social Login handles ---
  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}...`);
    
    // Yahan popup ki simulation ho rahi hai
    alert(`${platform} login processing...`);
    
    // Click karne par 1 second baad Home page par bhej dega
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    navigate('/'); 
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Logo & Header */}
        <div className="text-center">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div className="w-14 h-14 bg-[#00cde5] rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-cyan-100">
              $
            </div>
            <span className="text-3xl font-black text-[#1c2c52] tracking-tighter">easilon</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1c2c52]">Welcome Back</h2>
          <p className="mt-2 text-sm text-[#828282]">
            Sign in to access your account and manage your loans
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-[#1c2c52] mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-[#828282] group-focus-within:text-[#00cde5] transition-colors" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-4 bg-[#f6f6f8] border-2 border-transparent rounded-xl text-[#1c2c52] placeholder-[#828282] focus:outline-none focus:bg-white focus:border-[#00cde5] transition-all"
                  placeholder="zee@gmail.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-[#1c2c52] mb-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-[#828282] group-focus-within:text-[#00cde5] transition-colors" />
                </div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-12 py-4 bg-[#f6f6f8] border-2 border-transparent rounded-xl text-[#1c2c52] placeholder-[#828282] focus:outline-none focus:bg-white focus:border-[#00cde5] transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#828282] hover:text-[#00cde5]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-[#00cde5] border-gray-300 rounded focus:ring-[#00cde5]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#828282] font-medium">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" element="sm" className="text-sm font-bold text-[#00cde5] hover:text-[#1c2c52] transition-colors">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-[#00cde5] hover:bg-[#1c2c52] shadow-lg shadow-cyan-100 transition-all duration-300"
          >
            Sign In 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Sign Up Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-[#828282]">
              Don't have an account?{' '}
              <Link to="/signup" className="font-bold text-[#00cde5] hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </form>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-3 bg-white text-[#828282] font-semibold">Or continue with</span>
          </div>
        </div>

        {/* Social Login Buttons - UPDATED WITH ONCLICK */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center px-4 py-3 border-2 border-[#f6f6f8] rounded-xl hover:bg-[#f6f6f8] transition-colors font-bold text-sm text-[#1c2c52]"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5 mr-2" alt="Google" />
            Google
          </button>
          <button 
            type="button"
            onClick={() => handleSocialLogin('Facebook')}
            className="flex items-center justify-center px-4 py-3 border-2 border-[#f6f6f8] rounded-xl hover:bg-[#f6f6f8] transition-colors font-bold text-sm text-[#1c2c52]"
          >
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="h-5 w-5 mr-2" alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;