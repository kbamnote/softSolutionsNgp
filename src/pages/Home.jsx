import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import { Shield, Clock, Zap, Star, Users, Briefcase, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';

import manImage from '../assets/man-office.png';
import piggyImage from '../assets/piggy-bank.png';
import consultingImage from '../assets/consulting.png';
import accountingImage from '../assets/accounting.png';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* --- 1. WELCOME SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-[85%] rounded-lg overflow-hidden border-[10px] border-white shadow-2xl">
              <img src={manImage} alt="Man" className="w-full h-[550px] object-cover" />
            </div>
            <div className="absolute top-10 -left-6 z-30 bg-easilon-cyan p-8 w-48 h-48 flex flex-col items-center justify-center text-white shadow-lg">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-3">
                <div className="ml-1 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
              </div>
              <h3 className="text-4xl font-black italic">15+</h3>
              <p className="text-[10px] font-bold uppercase tracking-tighter text-center">Year Of Experience</p>
              <div className="absolute -bottom-4 left-0 w-0 h-0 border-t-[16px] border-t-easilon-navy border-r-[16px] border-r-transparent"></div>
            </div>
            <div className="absolute -bottom-10 right-0 z-20 w-[55%] rounded-lg overflow-hidden border-[10px] border-white shadow-2xl">
              <img src={piggyImage} alt="Piggy Bank" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Welcome to Easilon</span>
            </div>
            <h2 className="text-5xl lg:text-[60px] font-black text-easilon-navy leading-[1.1] mb-8 tracking-tighter">
              Our Loans Will Fill Your Dreams Come True
            </h2>
            <p className="text-easilon-gray text-lg mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-2 gap-y-4 mb-10">
              {['Quick Loan Process', 'Small Business Loan', 'Very Low Rates', 'Studying Abroad Loan'].map((item) => (
                <div key={item} className="flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-full border-2 border-easilon-cyan flex items-center justify-center text-easilon-cyan text-[10px] font-bold group-hover:bg-easilon-cyan group-hover:text-white transition-all">✓</div>
                  <span className="font-bold text-easilon-navy">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block">
              <button className="group border-2 border-gray-100 px-8 py-4 flex items-center gap-4 hover:border-easilon-cyan transition-all">
                <span className="text-easilon-cyan font-black text-sm uppercase tracking-widest">Know About Us</span>
                <div className="w-10 h-[2px] bg-gray-200 group-hover:bg-easilon-cyan relative">
                  <span className="absolute -right-1 -top-[8px] text-easilon-cyan font-bold text-lg">»</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- NEW: STATS COUNTER SECTION --- */}
      <section className="py-16 bg-easilon-navy">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Happy Clients', value: '12K+', icon: <Users /> },
              { label: 'Loan Approved', value: '1500+', icon: <CheckCircle2 /> },
              { label: 'Expert Advisors', value: '45+', icon: <Shield /> },
              { label: 'Partner Banks', value: '25+', icon: <Building2 /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-easilon-cyan mb-4 opacity-80">{stat.icon}</div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. LOAN SERVICES GRID SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Our Services</span>
              <div className="w-6 h-[2px] bg-easilon-cyan"></div>
            </div>
            <h2 className="text-5xl font-black text-easilon-navy mb-6 tracking-tighter">Loan Solutions For Every Need</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Personal Loan', icon: <Users size={30} />, desc: 'Flexible funding for your personal expenses and dreams.' },
              { title: 'Business Loan', icon: <Briefcase size={30} />, desc: 'Grow your company with our competitive commercial rates.' },
              { title: 'Home Loan', icon: <Shield size={30} />, desc: 'Easy mortgages to help you step into your new family home.' },
              { title: 'Education Loan', icon: <Clock size={30} />, desc: 'Invest in your future with low-interest student financing.' },
              { title: 'Car Loan', icon: <Zap size={30} />, desc: 'Drive your dream car today with instant approval options.' },
              { title: 'Gold Loan', icon: <Star size={30} />, desc: 'Unlock the value of your assets with secure gold financing.' },
            ].map((service, idx) => (
              <div key={idx} className="p-10 border border-gray-100 hover:border-easilon-cyan hover:shadow-xl transition-all group rounded-xl">
                <div className="w-16 h-16 bg-[#f8fbff] text-easilon-cyan rounded-full flex items-center justify-center mb-6 group-hover:bg-easilon-cyan group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-easilon-navy mb-4 group-hover:text-easilon-cyan transition-colors">{service.title}</h3>
                <p className="text-easilon-gray mb-6">{service.desc}</p>
                <Link to="/services" className="text-easilon-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-easilon-cyan">
                  Read More <span className="text-lg">»</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: HOW IT WORKS SECTION --- */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Easy Process</span>
              </div>
              <h2 className="text-5xl font-black text-easilon-navy leading-tight mb-6">Get Your Loan In 3 Easy Steps</h2>
              <p className="text-easilon-gray mb-8">We have simplified the loan application process to ensure you get your funds as quickly as possible without any headache.</p>
              <Link to="/apply" className="bg-easilon-cyan text-white px-8 py-4 inline-block font-black uppercase text-xs tracking-widest hover:bg-easilon-navy transition-all">Apply Now</Link>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Apply Online', desc: 'Fill out our simple digital form in less than 5 minutes.' },
                { step: '02', title: 'Get Approval', desc: 'Our experts review your profile and provide instant feedback.' },
                { step: '03', title: 'Receive Funds', desc: 'Once approved, funds are transferred to your account.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#f8fbff] p-10 rounded-2xl border-b-4 border-transparent hover:border-easilon-cyan transition-all">
                  <span className="text-4xl font-black text-easilon-cyan/30 mb-6 block">{item.step}</span>
                  <h3 className="text-xl font-black text-easilon-navy mb-4">{item.title}</h3>
                  <p className="text-easilon-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE US SECTION --- */}
      <section className="py-24 bg-[#f8fbff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{backgroundImage: 'radial-gradient(#1c2c52 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Our Benefits</span>
            </div>
            <h2 className="text-5xl lg:text-[60px] font-black text-easilon-navy leading-tight mb-8">Why Choose Us</h2>
            <p className="text-easilon-gray text-lg mb-12">There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration.</p>

            <div className="flex gap-10 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-easilon-cyan rounded-full flex items-center justify-center text-white shadow-lg text-2xl">📉</div>
                <span className="font-bold text-easilon-navy text-xl">Lower Rates</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-easilon-cyan rounded-full flex items-center justify-center text-white shadow-lg text-2xl">💰</div>
                <span className="font-bold text-easilon-navy text-xl">Quick And Easy</span>
              </div>
            </div>

            <div className="space-y-8">
              {[{ label: 'Loan Process', value: '85%' }, { label: 'Business Consultancy', value: '95%' }, { label: 'Payments Benefits', value: '90%' }].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-easilon-navy">{skill.label}</span>
                    <span className="font-bold text-easilon-navy">{skill.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-easilon-cyan h-full transition-all duration-1000" style={{ width: skill.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative flex justify-end pt-10">
            <div className="w-[75%] h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img src={consultingImage} alt="Consulting" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-[75%] h-80 rounded-lg overflow-hidden border-[10px] border-white shadow-2xl z-20">
              <img src={accountingImage} alt="Accounting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Testimonials</span>
              </div>
              <h2 className="text-5xl font-black text-easilon-navy tracking-tighter leading-none">What Our Clients Say</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 border border-gray-100 flex items-center justify-center text-easilon-navy hover:bg-easilon-cyan hover:text-white transition-all text-2xl">←</button>
              <button className="w-14 h-14 border border-gray-100 flex items-center justify-center text-easilon-navy hover:bg-easilon-cyan hover:text-white transition-all text-2xl">→</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Dipshikha Sarangpure",
                role: "Business Owner",
                img: user1,
                text: "Soft Solution made my business expansion possible within weeks. The process was transparent and the rates were exactly as promised."
              },
              { 
                name: "Nikhil Shinganjude",
                role: "Home Owner", 
                img: user2,
                text: "I never thought getting a home loan could be this stress-free. Their consultancy team guided me at every single step." 
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#f8fbff] p-12 rounded-2xl relative">
                <div className="text-easilon-cyan text-6xl font-serif absolute top-8 right-12 opacity-20">“</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-easilon-cyan text-easilon-cyan" />)}
                </div>
                <p className="text-easilon-navy text-xl font-bold italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-easilon-navy uppercase text-sm tracking-widest">{t.name}</h4>
                    <p className="text-easilon-cyan text-xs font-bold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: PARTNER LOGOS SECTION --- */}
      <section className="py-20 bg-[#f8fbff] border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <p className="text-center text-easilon-navy font-black uppercase tracking-[0.3em] text-[10px] mb-12">Trusted By Leading Financial Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 bluescale hover:bluescale-0 transition-all">
            {['HDFC BANK', 'ICICI BANK', 'AXIS BANK', 'SBI', 'KOTAK'].map((bank) => (
              <span key={bank} className="text-2xl font-black text-easilon-navy tracking-tighter">{bank}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FINAL CALL TO ACTION --- */}
      <section className="py-20 bg-easilon-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-easilon-cyan/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Ready To Start Your Journey?</h2>
              <p className="text-gray-300 text-lg">Contact us today for a free consultation and get your loan approved within 24 hours.</p>
            </div>
            <Link to="/contact">
              <button className="bg-easilon-cyan text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-easilon-navy transition-all shadow-xl">
                Get In Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;