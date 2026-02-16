import React from 'react';
import { Check, Award, Users, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50K+', label: 'Happy Clients', icon: Heart },
    { number: '200+', label: 'Team Members', icon: Users },
    { number: '₹2B+', label: 'Loans Processed', icon: TrendingUp },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We believe in transparent and honest dealings with all our clients and partners.',
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving our financial products to meet modern needs.',
    },
    {
      title: 'Customer First',
      description: 'Your financial goals are at the center of everything we do.',
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service standards.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">About Us</span>
          </div>
        </div>
      </section>

              {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                    <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                  </div>
                  <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy leading-tight mb-6">
                  Building Financial Dreams Since 2008
                </h2>
                <p className="text-easilon-gray text-lg mb-8 leading-relaxed">
                  We started with a simple vision: to make credit accessible to everyone. Over the last 15 years, we have grown from a small office in Nagpur to a national leader.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Licensed & Regulated', '24/7 Support', 'Flexible Repayment', 'No Hidden Fees'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={18} className="text-easilon-cyan" />
                      <span className="font-semibold text-easilon-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - This replaces the deleted image with a professional card */}
              <div className="relative p-12 bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center min-h-[400px]">
                {/* Background decorative circles */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-easilon-cyan/5 rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-easilon-navy/5 rounded-full"></div>
                
                {/* The 15+ Years Card */}
                <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl text-center border border-gray-100 max-w-xs">
                  <div className="w-16 h-16 bg-easilon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-easilon-cyan" />
                  </div>
                  <p className="text-5xl font-black text-easilon-navy mb-1">15+</p>
                  <p className="text-gray-500 font-bold uppercase tracking-tighter text-xs">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
              {/* Stats Section */}
              <section className="py-20 bg-easilon-navy">
                <div className="container mx-auto max-w-7xl px-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center text-white">
                        <stat.icon size={40} className="mx-auto mb-4 text-easilon-cyan" />
                        <p className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.number}</p>
                        <p className="text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Our Values</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-easilon-cyan/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-extrabold text-easilon-cyan">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-easilon-navy mb-3">{value.title}</h3>
                <p className="text-easilon-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;