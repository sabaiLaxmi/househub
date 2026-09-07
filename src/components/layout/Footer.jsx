import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-gray-300 mt-auto relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-teal-500 to-navy-900"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-8 h-8 text-teal-500" />
              <span className="text-2xl font-bold text-white tracking-widest uppercase">PropertyHub</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the pinnacle of luxury real estate. We connect discerning buyers with extraordinary properties around the globe, ensuring a seamless and exclusive experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-teal-500"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Agents', 'About Us', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-teal-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Luxury Avenue,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@propertyhub.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-teal-500"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to receive the latest updates on exclusive properties and market trends.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PropertyHub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:space-x-6 justify-center">
            <Link to="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-teal-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
