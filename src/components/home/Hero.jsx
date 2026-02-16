import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// 1. You must import Link for navigation to work
import { Link } from 'react-router-dom';
import LoanCalculator from '../loan/LoanCalculator';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Smart Loans For Bright Futures",
      title: "Our Loans Will Make Your Dreams Come True",
    },
    {
      subtitle: "Smart Loans For Bright Futures",
      title: "Personal Loans To Fulfill Your Dreams",
    },
    {
      subtitle: "Smart Loans For Bright Futures",
      title: "Smart Finance Solutions For Your Business",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[800px] bg-black/50 overflow-hidden">
      {/* Background Image with Darker Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Hero background"
        />
        {/* Layer 1: Base Dark Tint */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Layer 2: Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 Q200,200 100,400 T0,800" fill="none" stroke="white" strokeWidth="2" />
          <path d="M50,0 Q250,200 150,400 T50,800" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
        <svg viewBox="0 0 300 800" className="w-full h-full" preserveAspectRatio="none">
          <path d="M300,0 Q100,200 200,400 T300,800" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[800px] py-20">
          {/* Left Side - Text Content */}
          <div className="text-white">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-easilon-cyan"></div>
              <span className="text-easilon-cyan font-semibold tracking-wider uppercase text-sm">
                {slides[currentSlide].subtitle}
              </span>
              <div className="w-8 h-[2px] bg-easilon-cyan"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-8 font-manrope drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            {/* CTA Buttons - Now clickable links */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="group bg-easilon-cyan text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-3 hover:bg-white hover:text-black transition-all uppercase"
              >
                Our Service
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/signup" 
                className="group border-2 border-easilon-cyan text-white px-8 py-4 font-bold text-sm tracking-wider flex items-center gap-3 hover:bg-easilon-cyan transition-all uppercase"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3 mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-12 bg-easilon-cyan'
                      : 'w-6 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Loan Calculator */}
          <div className="lg:justify-self-end w-full max-w-md">
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;