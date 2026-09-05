import React, { useContext } from 'react';
import { useListings } from '../../context/ListingsContext';
import { Globe, Building2, MapPin } from 'lucide-react';

const InfrastructureDetail = () => {
  const { listings, hoveredId, selectedId } = useListings();
  
  // Display infrastructure for hovered item, or selected item, or default to empty state
  const activeId = hoveredId || selectedId;
  const activeListing = listings.find(l => l.id === activeId);

  if (!activeListing) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-navy-900 p-8 text-center border-l border-navy-700">
        <Globe className="w-16 h-16 text-navy-700 mb-6" />
        <h3 className="text-2xl font-bold text-gray-500">Global Infrastructure</h3>
        <p className="text-gray-600 mt-4 max-w-md">
          Hover over or select a property card on the left to view detailed information about the state and country's infrastructure.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-navy-900 border-l border-navy-700 overflow-y-auto">
      <div className="h-64 w-full relative shrink-0">
        <img 
          src={activeListing.images[0]} 
          alt={activeListing.address} 
          className="w-full h-full object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent"></div>
        
        <div className="absolute bottom-6 left-8">
          <div className="flex items-center gap-2 text-teal-500 mb-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold tracking-widest uppercase text-sm">{activeListing.state}</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white">{activeListing.country}</h2>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-8 h-8 text-teal-500" />
          <h3 className="text-2xl font-bold text-white">Infrastructure Overview</h3>
        </div>
        
        <div className="bg-navy-800 p-6 rounded-xl border border-navy-700 shadow-xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
          
          <p className="text-gray-300 leading-relaxed text-lg relative z-10">
            {activeListing.infrastructure}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureDetail;
