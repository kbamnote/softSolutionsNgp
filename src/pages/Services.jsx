import React from 'react';
import { Home, Car, User, Briefcase, GraduationCap, Bike, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Make your dream home a reality with our flexible mortgage solutions. Competitive rates and terms tailored to your needs.',
      features: ['Up to 30 years tenure', 'Low interest rates', 'Quick approval'],
    },
    {
      icon: GraduationCap,
      title: 'Education Loan',
      description: 'Invest in your future with our education financing options. Cover tuition, books, and living expenses.',
      features: ['Flexible repayment', 'Coverage for all courses', 'No collateral needed'],
    },
    {
      icon: Car,
      title: 'Auto Loan',
      description: 'Drive your dream car today with our affordable auto financing. New or used, we have options for you.',
      features: ['Up to 7 years tenure', 'New & used vehicles', 'Fast processing'],
    },
    {
      icon: User,
      title: 'Personal Loan',
      description: 'Get funds for any personal need - travel, medical, wedding, or debt consolidation. Quick and hassle-free.',
      features: ['No collateral required', 'Same day approval', 'Flexible usage'],
    },
    {
      icon: Briefcase,
      title: 'Business Loan',
      description: 'Fuel your business growth with our commercial lending solutions. From startup to expansion, we support you.',
      features: ['Working capital', 'Equipment financing', 'Growth funding'],
    },
    {
      icon: Bike,
      title: 'Bike Loan',
      description: 'Two-wheeler financing made easy. Get on the road with our affordable bike loan options.',
      features: ['Low down payment', 'Quick disbursement', 'All brands covered'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-easilon-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Services background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">Our Services</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">What We're Offering</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Loan Services We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 p-8 rounded-lg hover:shadow-xl hover:border-easilon-cyan transition-all duration-300"
              >
                <div className="w-16 h-16 bg-easilon-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-easilon-cyan transition-colors">
                  <service.icon size={32} className="text-easilon-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-easilon-navy mb-4">{service.title}</h3>
                <p className="text-easilon-gray mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-easilon-gray">
                      <div className="w-1.5 h-1.5 bg-easilon-cyan rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 text-easilon-cyan font-semibold hover:gap-3 transition-all"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-easilon-cyan">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Need a Custom Loan Solution?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our financial experts are ready to help you find the perfect loan option tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-easilon-navy px-8 py-4 font-bold text-sm tracking-wider hover:bg-easilon-navy hover:text-white transition-all uppercase"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
