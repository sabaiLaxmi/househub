import React, { useState, useEffect } from 'react';
import { Home, Menu, X, User, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ListPropertyModal from './ListPropertyModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-4 md:px-8 py-4 text-white ${scrolled || mobileMenuOpen ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6 mix-blend-difference'}`}>
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Home className="w-6 h-6 text-teal-500" />
        <span className="font-bold text-xl tracking-tight">PropertyHub</span>
      </Link>
      
      <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
        <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
        <Link to="/properties" className="hover:text-teal-500 transition-colors">Properties</Link>
        <Link to="/agents" className="hover:text-teal-500 transition-colors">Agents</Link>
        <Link to="/about" className="hover:text-teal-500 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-teal-500 transition-colors">Contact</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="hidden md:flex items-center gap-2 text-white hover:text-teal-500 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>List Property</span>
        </button>
        <button className="hidden md:flex items-center gap-2 border border-white/20 hover:border-teal-500 hover:text-teal-500 transition-all rounded-full px-4 py-2 text-sm font-medium">
          <User className="w-4 h-4" />
          <span>Sign In</span>
        </button>
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-xl border-t border-navy-800 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-teal-500 transition-colors">Home</Link>
          <Link to="/properties" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-teal-500 transition-colors">Properties</Link>
          <Link to="/agents" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-teal-500 transition-colors">Agents</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-teal-500 transition-colors">About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-teal-500 transition-colors">Contact</Link>
          
          <div className="w-full h-px bg-navy-800 my-2"></div>
          
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 text-white hover:text-teal-500 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>List Property</span>
          </button>
          <button className="flex items-center gap-2 bg-teal-500/10 text-teal-500 border border-teal-500/20 hover:bg-teal-500 hover:text-navy-900 transition-all rounded-full px-6 py-2 font-bold">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      )}
      
      <ListPropertyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
