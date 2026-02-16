import React from 'react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';

// Local images imports
import manImage from '../assets/man-office.png';
import piggyImage from '../assets/piggy-bank.png';
import consultingImage from '../assets/consulting.png';
import accountingImage from '../assets/accounting.png';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* --- 1. WELCOME SECTION (Man & Piggy Bank) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT SIDE: Image Grid */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-[85%] rounded-lg overflow-hidden border-[10px] border-white shadow-2xl">
              <img src={manImage} alt="Man" className="w-full h-[550px] object-cover" />
            </div>

            {/* Cyan Experience Box */}
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

          {/* RIGHT SIDE: Text Content */}
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
            
            {/* 2. Wrap the button in a Link component */}
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

      {/* --- 2. WHY CHOOSE US SECTION --- */}
      <section className="py-24 bg-[#f8fbff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{backgroundImage: 'radial-gradient(#1c2c52 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10">

          {/* LEFT SIDE: Progress Bars */}
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
              {[
                { label: 'Loan Process', value: '85%' },
                { label: 'Business Consultancy', value: '95%' },
                { label: 'Payments Benefits', value: '90%' }
              ].map((skill) => (
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

          {/* RIGHT SIDE: Overlapping Images */}
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
    </div>
  );
};

export default Home;