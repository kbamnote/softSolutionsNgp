import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, Users, TrendingUp, Heart, Target, Eye, ShieldCheck, Milestone, Globe, Handshake } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50K+', label: 'Happy Clients', icon: Heart },
    { number: '200+', label: 'Expert Advisors', icon: Users },
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

  // Updated Timeline to align with 15+ years (Starting 2010/2011)
  const milestones = [
    { year: '2010', title: 'The Foundation', desc: 'Easilon was established with a focus on personalized financial consulting.' },
    { year: '2015', title: 'Digital Transformation', desc: 'Launched our proprietary digital platform to streamline loan approvals.' },
    { year: '2020', title: 'Market Resilience', desc: 'Supported over 10,000 SMEs with emergency credit during global shifts.' },
    { year: '2026', title: 'Fintech Leadership', desc: 'Recognized as a top-tier national leader in accessible credit solutions.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="About background"
          />
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
                Building Financial Dreams Since 2010
              </h2>
              <p className="text-easilon-gray text-lg mb-8 leading-relaxed">
                We started with a simple vision: to make credit accessible to everyone. Over the last 15+ years, we have grown from a local Nagpur office to a national leader in financial empowerment.
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

            <div className="relative p-12 bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center min-h-[400px]">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-easilon-cyan/5 rounded-full"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-easilon-navy/5 rounded-full"></div>
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

      {/* --- REFINED TIMELINE --- */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-easilon-cyan font-bold uppercase tracking-widest text-xs">Our Roadmap</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy mt-2">The Journey Of Success</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {milestones.map((item, i) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-xl shadow-md border-t-4 border-easilon-cyan group hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 bg-easilon-navy text-white rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-easilon-cyan transition-colors">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-easilon-navy mb-2">{item.title}</h3>
                <p className="text-easilon-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-easilon-navy rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Target size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-easilon-cyan" /> Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide seamless, transparent, and innovative financial solutions that empower individuals and businesses to achieve their maximum potential.
              </p>
            </div>
            <div className="p-12 bg-easilon-cyan rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                <Eye size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye /> Our Vision
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To become the most trusted financial partner globally, recognized for our commitment to ethical lending and customer-centric technology.
              </p>
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

      {/* Global Standards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-easilon-cyan">
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-easilon-navy mb-2">Global Standards</h3>
                <p className="text-easilon-gray">We follow international best practices in financial security and data privacy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-easilon-cyan">
                <Handshake size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-easilon-navy mb-2">Strategic Partners</h3>
                <p className="text-easilon-gray">Collaborating with top-tier banks to provide you with the lowest possible interest rates.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-easilon-cyan">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-easilon-navy mb-2">Secure Processing</h3>
                <p className="text-easilon-gray">Your financial documents are handled with end-to-end encryption and strict confidentiality.</p>
              </div>
            </div>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-easilon-cyan">
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

      {/* Trust & Security Info Section */}
      <section className="py-20 bg-easilon-navy text-white">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <ShieldCheck size={40} className="text-easilon-cyan" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Your Security is Our Priority</h3>
              <p className="text-gray-400">256-bit encryption for all your financial data and transactions.</p>
            </div>
          </div>
          <Link
            to="/privacy-policy"
            className="px-10 py-4 bg-easilon-cyan hover:bg-white hover:text-easilon-navy transition-all font-bold uppercase tracking-widest text-sm rounded-lg inline-block"
          >
            View Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;