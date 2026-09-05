import React, { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useListings } from '../../context/ListingsContext';
import { BedDouble, Bath, Maximize, Heart, MapPin } from 'lucide-react';
import CardImageCarousel from './CardImageCarousel';
import InfrastructureDetail from './InfrastructureDetail';

const ListingCard = ({ listing }) => {
  const { hoveredId, setHoveredId, selectedId, setSelectedId } = useListings();
  const isHovered = hoveredId === listing.id;
  const isSelected = selectedId === listing.id;
  const cardRef = useRef(null);
  
  const [saved, setSaved] = useState(false);
  const [isRightSide, setIsRightSide] = useState(false);
  const [isLocallyHovered, setIsLocallyHovered] = useState(false);
  const images = listing.images || [listing.image];

  const handleMouseEnter = () => {
    setHoveredId(listing.id);
    setIsLocallyHovered(true);
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      setIsRightSide(cardCenter > window.innerWidth / 2);
    }
  };

  useEffect(() => {
    if (isSelected && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isSelected]);

  const toggleSave = (e) => {
    e.stopPropagation();
    setSaved(!saved);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setIsLocallyHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className={`relative group overflow-hidden rounded-xl bg-navy-800 border transition-all duration-300 cursor-pointer ${
        isHovered ? 'border-teal-500 shadow-[0_0_20px_rgba(0,229,255,0.15)] transform -translate-y-1' : 'border-navy-700 hover:border-navy-500'
      } ${isSelected ? 'ring-2 ring-teal-500' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelectedId(listing.id === selectedId ? null : listing.id)}
    >
      <div className="relative h-56 overflow-hidden bg-black">
        <CardImageCarousel images={images} alt={listing.title} />

        {/* Save Button */}
        <button 
          onClick={toggleSave}
          className="absolute top-4 left-4 z-20 p-2 bg-navy-900/50 backdrop-blur-sm rounded-full transition-colors hover:bg-navy-900/80"
        >
          <Heart className={`w-5 h-5 ${saved ? 'fill-coral-500 text-coral-500' : 'text-white'}`} />
        </button>

        <div className="absolute top-4 right-4 z-20 bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-teal-500 font-bold text-sm">
          ${listing.price.toLocaleString()} / mo
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{listing.title}</h3>
        
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-teal-500" />
          <span className="truncate font-medium">{listing.state}, {listing.country}</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-teal-500" />
            <span>{listing.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-teal-500" />
            <span>{listing.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-teal-500" />
            <span>{listing.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
      
      {/* Hover Popup rendered in a Portal so it doesn't get clipped or mispositioned by transform */}
      {isLocallyHovered && createPortal(
        <div className={`hidden md:block fixed bottom-8 ${isRightSide ? 'left-8' : 'right-8'} z-[100] transition-opacity duration-300 cursor-default`} onClick={e => e.stopPropagation()}>
          <div className="w-[32rem] max-h-[80vh] bg-navy-900 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-teal-500/30 flex flex-col pointer-events-auto">
            <InfrastructureDetail />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ListingCard;
