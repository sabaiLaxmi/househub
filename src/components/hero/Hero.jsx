import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useListings } from '../../context/ListingsContext';
import { useNavigate } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80"
];

const Hero = () => {
  const { searchQuery, setSearchQuery } = useListings();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    navigate('/properties');
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Image Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt="Luxury Property Background" 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/90 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center w-full pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <MapPin className="w-4 h-4 text-teal-400" />
          <span className="text-sm font-medium text-white tracking-widest uppercase">Global Luxury Real Estate</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          Live the <br />
          <span className="font-serif italic font-light">Extraordinary</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl drop-shadow-md font-light leading-relaxed">
          Discover a curated collection of the world's most exclusive estates, villas, and penthouses.
        </p>
        
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 flex items-center shadow-2xl transition-all focus-within:bg-white/20 focus-within:border-white/40">
          <div className="pl-6 text-white/70">
            <Search className="w-6 h-6" />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="Search by state, country, or property title..." 
            className="w-full bg-transparent border-none focus:outline-none text-white text-lg px-4 py-4 placeholder-white/50"
          />
          <button 
            onClick={handleSearch}
            className="bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold text-lg px-8 py-4 rounded-full transition-colors whitespace-nowrap shadow-lg"
          >
            Explore
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-xs uppercase tracking-[0.3em] text-white font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
