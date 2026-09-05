import React, { useRef } from 'react';
import { Home } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.about-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.about-image', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.about-text p', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.about-stat', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.2');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 min-h-screen bg-navy-900 px-4 md:px-8 py-12 relative overflow-hidden flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-6 about-title">
              <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
                <Home className="w-8 h-8 text-teal-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">PropertyHub</span>
              </h1>
            </div>
            
            <div className="bg-navy-800/40 backdrop-blur-md border border-navy-700/50 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Subtle glass reflection */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 about-text">Redefining Luxury Real Estate</h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg about-text font-light">
                <p>
                  Welcome to PropertyHub, the world's premier destination for luxury real estate. We believe that finding your dream home should be an experience as exceptional as the property itself.
                </p>
                <p>
                  Our curated collection features only the most extraordinary properties across the globe—from contemporary penthouses in bustling metropolises to serene alpine retreats and private oceanfront estates.
                </p>
                <p>
                  With cutting-edge technology, unparalleled market expertise, and a dedication to discrete, white-glove service, our team of elite agents is here to guide you through every step of your real estate journey.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-navy-700/50">
                <div className="about-stat">
                  <div className="text-4xl font-extrabold text-white mb-1">10k+</div>
                  <div className="text-sm font-medium tracking-widest uppercase text-teal-500">Properties Sold</div>
                </div>
                <div className="about-stat">
                  <div className="text-4xl font-extrabold text-white mb-1">50+</div>
                  <div className="text-sm font-medium tracking-widest uppercase text-teal-500">Countries</div>
                </div>
                <div className="about-stat">
                  <div className="text-4xl font-extrabold text-white mb-1">200+</div>
                  <div className="text-sm font-medium tracking-widest uppercase text-teal-500">Elite Agents</div>
                </div>
                <div className="about-stat">
                  <div className="text-4xl font-extrabold text-white mb-1">24/7</div>
                  <div className="text-sm font-medium tracking-widest uppercase text-teal-500">Client Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="hidden lg:block h-[800px] rounded-[3rem] overflow-hidden relative shadow-2xl about-image border border-navy-700">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" 
              alt="Luxury Modern Architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent mix-blend-multiply"></div>
            
            {/* Floating Element */}
            <div className="absolute bottom-12 -left-10 bg-navy-800/80 backdrop-blur-xl border border-teal-500/30 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Award Winning</div>
                <div className="text-teal-400 text-sm">Global Agency 2026</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
