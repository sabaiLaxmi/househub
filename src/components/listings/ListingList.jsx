import React, { useRef } from 'react';
import { useFilteredListings } from '../../hooks/useFilteredListings';
import { useListings } from '../../context/ListingsContext';
import ListingCard from './ListingCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ListingList = () => {
  const { listings: allListings, setFilters, setSearchQuery } = useListings();
  const listings = useFilteredListings();
  const listRef = useRef();

  const handleClearFilters = () => {
    setFilters({ minPrice: null, maxPrice: null, bedrooms: null, propertyType: null });
    setSearchQuery('');
  };

  useGSAP(() => {
    if (listings.length > 0) {
      gsap.fromTo('.listing-card-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', overwrite: true }
      );
    }
  }, { dependencies: [listings], scope: listRef });

  return (
    <div ref={listRef} className="p-6">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Luxury Properties</h2>
          <p className="text-gray-400 mt-1">Showing {listings.length} premium locations</p>
        </div>
        {listings.length !== allListings.length && (
          <button 
            onClick={handleClearFilters}
            className="text-sm font-medium text-teal-500 hover:text-teal-400 transition-colors border border-teal-500/30 hover:border-teal-500 rounded-full px-4 py-2"
          >
            Clear Filters
          </button>
        )}
      </div>
      
      {listings.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No properties match your current filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map(listing => (
            <div key={listing.id} className="listing-card-item">
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingList;
