import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { useListings } from '../../context/ListingsContext';

const BentoFeatured = () => {
  const { listings } = useListings();
  const navigate = useNavigate();
  
  // Get exactly 4 featured listings for the bento layout
  const featuredListings = listings.filter(l => l.featured).slice(0, 4);
  
  if (featuredListings.length < 4) return null; // Need 4 for the exact layout

  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Masterpieces</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A curated selection of our most exclusive properties currently on the market.
            </p>
          </div>
          <button 
            onClick={() => navigate('/properties')}
            className="group flex items-center gap-2 text-teal-500 font-medium hover:text-teal-400 transition-colors"
          >
            Explore All Properties 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[600px]">
          
          {/* Main Large Tile */}
          <div 
            onClick={() => navigate('/properties')}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer h-full"
          >
            <img 
              src={featuredListings[0].image || featuredListings[0].images[0]} 
              alt={featuredListings[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider">
                {featuredListings[0].type}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{featuredListings[0].title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>{featuredListings[0].state}, {featuredListings[0].country}</span>
                </div>
                <div className="text-xl font-bold text-white">
                  ${featuredListings[0].price.toLocaleString()}/mo
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Tile */}
          <div 
            onClick={() => navigate('/properties')}
            className="relative rounded-3xl overflow-hidden group cursor-pointer h-full min-h-[250px]"
          >
            <img 
              src={featuredListings[1].image || featuredListings[1].images[0]} 
              alt={featuredListings[1].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-xl font-bold text-white mb-1">{featuredListings[1].title}</h3>
              <div className="text-teal-400 font-bold">
                ${featuredListings[1].price.toLocaleString()}/mo
              </div>
            </div>
          </div>

          {/* Bottom Right Stacked */}
          <div className="grid grid-cols-2 gap-6 h-full min-h-[250px]">
            {/* Small Tile 1 */}
            <div 
              onClick={() => navigate('/properties')}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={featuredListings[2].image || featuredListings[2].images[0]} 
                alt={featuredListings[2].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{featuredListings[2].title}</h3>
              </div>
            </div>
            
            {/* Small Tile 2 */}
            <div 
              onClick={() => navigate('/properties')}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={featuredListings[3].image || featuredListings[3].images[0]} 
                alt={featuredListings[3].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{featuredListings[3].title}</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatured;
