import React from 'react';
import Hero from '../components/hero/Hero';
import BentoFeatured from '../components/home/BentoFeatured';
import ServicesSection from '../components/home/ServicesSection';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navy-900 min-h-screen">
      <Hero />
      <BentoFeatured />
      <ServicesSection />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden border-t border-navy-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-500/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to find your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">dream property?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Browse our complete collection of exclusive listings, use our interactive global map, and filter by your exact specifications.
          </p>
          <button 
            onClick={() => navigate('/properties')}
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            Explore All Properties
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
