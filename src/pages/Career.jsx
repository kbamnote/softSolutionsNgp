import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  const benefits = [
    'Competitive salary packages',
    'Health & dental insurance',
    'Flexible working hours',
    'Professional development',
    'Performance bonuses',
    'Paid time off',
  ];

  const jobs = [
    {
      title: 'Senior Loan Officer',
      department: 'Lending',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Responsible for evaluating loan applications and guiding clients through the lending process.',
    },
    {
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      description: 'Analyze financial data and market trends to support strategic decision-making.',
    },
    {
      title: 'Customer Service Representative',
      department: 'Support',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$45,000 - $55,000',
      description: 'Provide exceptional support to our clients and resolve their inquiries efficiently.',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$75,000 - $100,000',
      description: 'Lead marketing campaigns and brand initiatives to drive customer acquisition.',
    },
    {
      title: 'Risk Assessment Specialist',
      department: 'Risk Management',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$85,000 - $110,000',
      description: 'Evaluate credit risk and develop strategies to minimize loan defaults.',
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
            alt="Career background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-easilon-navy/95 to-easilon-navy/80"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">Join Our Team</h1>
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="opacity-60">Home</span>
            <span className="text-easilon-cyan">›</span>
            <span className="text-easilon-cyan">Career</span>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                  <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                </div>
                <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Careers</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy leading-tight mb-6">
                Why Work at Easilon?
              </h2>
              <p className="text-easilon-gray text-lg mb-8 leading-relaxed">
                Join a dynamic team that's transforming the financial services industry. At Easilon, we believe in empowering our employees to grow professionally while making a real difference in people's lives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-easilon-cyan rounded-full"></div>
                    <span className="text-easilon-navy font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
              </div>
              <span className="text-easilon-cyan font-bold uppercase tracking-[0.2em] text-xs">Open Positions</span>
              <div className="flex gap-1">
                <div className="w-3 h-[2px] bg-easilon-cyan"></div>
                <div className="w-6 h-[2px] bg-easilon-cyan"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-easilon-navy">
              Current Opportunities
            </h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={20} className="text-easilon-cyan" />
                      <span className="text-sm text-easilon-cyan font-semibold uppercase">{job.department}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-easilon-navy mb-2">{job.title}</h3>
                    <p className="text-easilon-gray mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-easilon-gray">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-easilon-cyan text-white px-6 py-3 font-semibold hover:bg-easilon-navy transition-colors whitespace-nowrap"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
