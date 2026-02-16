import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  const allData = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Personal Loan', path: '/services' },
    { name: 'Business Loan', path: '/services' },
  ];
  const filteredResults = allData.filter(item => 
    searchTerm !== "" && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-easilon-cyan rounded-full flex items-center justify-center text-white font-black text-xl">$</div>
            <span className="text-2xl font-extrabold text-easilon-navy tracking-tight">Soft Solution</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {allData.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-1 font-semibold text-sm transition-colors ${
                  isActive(item.path) ? 'text-easilon-cyan' : 'text-easilon-navy hover:text-easilon-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search Button with Results Box */}
            <div className="relative">
              <div className="flex items-center">
                {isSearchOpen && (
                  <input 
                    type="text"
                    placeholder="Search pages or loans..."
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="absolute right-10 bg-gray-100 border-none rounded-full px-4 py-1 text-sm outline-none w-64 animate-in slide-in-from-right-2 transition-all"
                  />
                )}
                <button 
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setSearchTerm("");
                  }}
                  className="text-easilon-navy hover:text-easilon-cyan transition-colors"
                >
                  {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
              </div>

              {/* SEARCH RESULTS DROPDOWN */}
              {isSearchOpen && filteredResults.length > 0 && (
                <div className="absolute top-12 right-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-2">
                    {filteredResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.path}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchTerm("");
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-easilon-cyan/10 rounded-lg group transition-all"
                      >
                        <FileText size={16} className="text-gray-400 group-hover:text-easilon-cyan" />
                        <span className="text-sm font-medium text-easilon-navy">{result.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart */}
            <button 
              onClick={() => navigate('/cart')}
              className="text-easilon-navy hover:text-easilon-cyan transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-easilon-cyan text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">0</span>
            </button>

            <Link
              to="/apply"
              className="bg-easilon-cyan text-white px-6 py-3 font-bold text-xs tracking-wider flex items-center gap-2 hover:bg-easilon-navy transition-all uppercase"
            >
              Apply For Loan <span>→</span>
            </Link>
          </div>
          
          {/* Mobile Toggle Button */}
          <button className="lg:hidden text-easilon-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- ADDED THIS BLOCK: MOBILE MENU CONTENT --- */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-6 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {allData.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold px-2 py-1 ${
                    isActive(item.path) ? 'text-easilon-cyan' : 'text-easilon-navy'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-50" />
              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-easilon-cyan text-white px-6 py-3 font-bold text-sm text-center uppercase tracking-wider"
              >
                Apply For Loan
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;