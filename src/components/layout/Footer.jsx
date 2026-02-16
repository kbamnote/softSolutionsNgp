import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-easilon-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-easilon-cyan rounded-full flex items-center justify-center text-white font-black text-xl">$</div>
              <span className="text-2xl font-extrabold tracking-tight">Soft Solution</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Smart loans for bright futures. We provide flexible financial solutions to help you achieve your dreams.
            </p>
            {/* Newsletter */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-easilon-cyan"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-easilon-cyan hover:bg-easilon-cyan/80 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Team', path: '/team' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-easilon-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Loan Services</h4>
            <ul className="space-y-3">
              {['Home Loan', 'Auto Loan', 'Personal Loan', 'Business Loan', 'Education Loan', 'Bike Loan'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-easilon-cyan transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-easilon-cyan flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Finance Street, Business District, Nagpur,440001,India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-easilon-cyan flex-shrink-0" />
                <a href="mailto:needhelp@company.com" className="text-gray-400 hover:text-easilon-cyan transition-colors">
                  needhelp@company.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-easilon-cyan flex-shrink-0" />
                <a href="tel:16205" className="text-gray-400 hover:text-easilon-cyan transition-colors">
                  16205
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Soft Solution. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-easilon-cyan hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
