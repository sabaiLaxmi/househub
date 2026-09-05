import React, { useContext, useRef } from 'react';
import { useListings } from '../../context/ListingsContext';
import { X, BedDouble, Bath, Maximize, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Map, { Marker } from 'react-map-gl/mapbox';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

const ListingDetail = () => {
  const { listings, selectedId, setSelectedId } = useListings();
  const [activeImage, setActiveImage] = React.useState(0);
  const containerRef = useRef();
  const modalRef = useRef();

  const listing = listings.find(l => l.id === selectedId);

  React.useEffect(() => {
    setActiveImage(0);
  }, [selectedId]);

  useGSAP(() => {
    if (selectedId) {
      gsap.fromTo(containerRef.current,
        { backgroundColor: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' },
        { backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', duration: 0.4, ease: 'power2.out' }
      );
      
      gsap.fromTo(modalRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'expo.out' }
      );
    }
  }, [selectedId]);

  const close = () => {
    gsap.to(modalRef.current, { x: '100%', opacity: 0, duration: 0.4, ease: 'power3.in' });
    gsap.to(containerRef.current, { 
      backgroundColor: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)', duration: 0.4, 
      onComplete: () => setSelectedId(null) 
    });
  };

  if (!listing && !selectedId) return null;
  if (!listing) return null;
  
  const images = listing.images || [listing.image];

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 pointer-events-auto ${!selectedId ? 'hidden' : ''}`}
      onClick={close}
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:max-w-5xl h-full md:h-[90vh] bg-navy-900 border border-navy-700 md:rounded-2xl overflow-y-auto shadow-2xl flex flex-col md:flex-row ml-auto md:ml-0 md:mx-auto"
      >
        <button 
          onClick={close}
          className="absolute top-4 right-4 z-20 bg-navy-900/80 hover:bg-teal-500 text-white hover:text-navy-900 p-2 rounded-full transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Left Side: Gallery */}
        <div className="w-full md:w-1/2 flex flex-col bg-black">
          <div className="h-64 md:h-[60%] w-full relative">
            <img 
              src={images[activeImage]} 
              alt={listing.title} 
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto h-[40%] bg-navy-900">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-teal-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Right Side: Details & Mini-Map */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto bg-navy-900">
          <div className="flex items-start gap-2 mb-2 text-teal-500">
            <span className="font-semibold text-xs tracking-widest uppercase border border-teal-500/30 bg-teal-500/10 px-2 py-1 rounded">
              {listing.type}
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">{listing.title}</h2>
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{listing.address}</span>
          </div>

          <div className="text-3xl font-extrabold text-teal-500 mb-8">
            ${listing.price.toLocaleString()} <span className="text-base font-medium text-gray-400 font-sans">/ month</span>
          </div>
          
          <div className="flex justify-between mb-8 pb-8 border-b border-navy-700 px-4">
            <div className="flex flex-col items-center gap-2">
              <BedDouble className="w-6 h-6 text-teal-500" />
              <span className="text-white font-bold text-lg">{listing.bedrooms}</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Beds</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Bath className="w-6 h-6 text-teal-500" />
              <span className="text-white font-bold text-lg">{listing.bathrooms}</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Baths</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Maximize className="w-6 h-6 text-teal-500" />
              <span className="text-white font-bold text-lg">{listing.sqft.toLocaleString()}</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Sq.Ft.</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">About this property</h3>
            <p className="text-gray-400 leading-relaxed">
              {listing.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-3 text-gray-300">
              {['Smart Home System', 'Private Pool', 'Chef Kitchen', '24/7 Security', 'Fitness Center', 'Wine Cellar'].map((amenity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 h-48 w-full rounded-xl overflow-hidden border border-navy-700 relative">
            <Map
              initialViewState={{
                longitude: listing.coordinates.lng,
                latitude: listing.coordinates.lat,
                zoom: 14
              }}
              mapStyle="mapbox://styles/mapbox/dark-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker longitude={listing.coordinates.lng} latitude={listing.coordinates.lat}>
                <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-navy-900 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
              </Marker>
            </Map>
            <div className="absolute top-2 left-2 bg-navy-900/80 backdrop-blur px-2 py-1 rounded text-xs text-white font-semibold">
              Location Overview
            </div>
          </div>
          
          <div className="mt-auto pt-4 flex gap-4">
            <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-navy-900 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg">
              <Mail className="w-5 h-5" /> Contact Agent
            </button>
            <button className="px-6 border border-navy-600 hover:border-teal-500 text-white hover:text-teal-500 font-bold rounded-xl transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
