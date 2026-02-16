import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-easilon-lightgray py-3">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-6 mb-2 sm:mb-0">
          <a href="mailto:needhelp@company.com" className="flex items-center gap-2 text-easilon-gray hover:text-easilon-primary transition-colors">
            <Mail size={14} className="text-easilon-cyan" />
            <span>needhelp@company.com</span>
          </a>
          <a href="tel:16205" className="flex items-center gap-2 text-easilon-gray hover:text-easilon-primary transition-colors">
            <Phone size={14} className="text-easilon-cyan" />
            <span>16205</span>
          </a>
        </div>

        {/* Right Side - Links & Social */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-easilon-gray">
            <Link to="/login" className="hover:text-easilon-primary transition-colors">Log In</Link>
            <span className="text-gray-300">|</span>
            <Link to="/career" className="hover:text-easilon-primary transition-colors">Career</Link>
            <span className="text-gray-300">|</span>
            <Link to="/media" className="hover:text-easilon-primary transition-colors">Media</Link>
            <span className="text-gray-300">|</span>
            <Link to="/faq" className="hover:text-easilon-primary transition-colors">Faq's</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-easilon-gray hover:bg-easilon-cyan hover:text-white transition-all">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-easilon-gray hover:bg-easilon-cyan hover:text-white transition-all">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-easilon-gray hover:bg-easilon-cyan hover:text-white transition-all">
              <Linkedin size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-easilon-gray hover:bg-easilon-cyan hover:text-white transition-all">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
