import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulation: Real email sending process (backend call yahan hoti hai)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      console.log(`Reset link sent to: ${email}`);
      
      // 3 seconds baad success message hatane ke liye
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
        
        {/* Success State UI */}
        {isSent ? (
          <div className="py-6 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-[#1c2c52]">Link Sent!</h2>
            <p className="mt-2 text-sm text-[#828282]">
              Check your inbox. We've sent password reset instructions to <b>{email}</b>
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="mt-8 text-sm font-bold text-[#00cde5] hover:underline"
            >
              Didn't get it? Try again
            </button>
          </div>
        ) : (
          <>
            {/* Initial Form UI */}
            <div>
              <div className="w-16 h-16 bg-[#00cde5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={30} className="text-[#00cde5]" />
              </div>
              <h2 className="text-3xl font-bold text-[#1c2c52]">Forgot Password?</h2>
              <p className="mt-2 text-sm text-[#828282] px-4">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form className="mt-8 space-y-6 text-left" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-[#1c2c52] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-[#828282]" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-[#f6f6f8] border-2 border-transparent rounded-xl text-[#1c2c52] focus:outline-none focus:bg-white focus:border-[#00cde5] transition-all"
                    placeholder="zee@gmail.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-[#00cde5] hover:bg-[#1c2c52] shadow-lg shadow-cyan-100 transition-all disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>
          </>
        )}

        <div className="mt-8">
          <Link to="/login" className="inline-flex items-center text-sm font-bold text-[#828282] hover:text-[#00cde5] transition-colors">
            <ChevronLeft size={18} className="mr-1" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;