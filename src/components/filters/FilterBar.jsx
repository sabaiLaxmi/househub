import React, { useContext } from 'react';
import { useListings } from '../../context/ListingsContext';
import { SlidersHorizontal } from 'lucide-react';

const FilterBar = () => {
  const { filters, setFilters, sortOrder, setSortOrder } = useListings();

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, maxPrice: e.target.value ? Number(e.target.value) : null }));
  };

  const handleBedsChange = (e) => {
    setFilters(prev => ({ ...prev, bedrooms: e.target.value ? Number(e.target.value) : null }));
  };

  const handleTypeChange = (e) => {
    setFilters(prev => ({ ...prev, propertyType: e.target.value || null }));
  };

  return (
    <div className="bg-navy-900 border-b border-navy-700 p-4 sticky top-0 z-20 flex flex-wrap gap-4 items-center shadow-md">
      <div className="flex items-center gap-2 text-gray-400 mr-2">
        <SlidersHorizontal className="w-5 h-5" />
        <span className="font-semibold text-sm">Filters</span>
      </div>
      
      <div className="flex items-center gap-2">
        <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold hidden sm:block">Max Price</label>
        <select 
          className="bg-navy-800 border border-navy-600 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-teal-500"
          value={filters.maxPrice || ''}
          onChange={handlePriceChange}
        >
          <option value="">Any Price</option>
          <option value="10000">Under $10,000</option>
          <option value="20000">Under $20,000</option>
          <option value="30000">Under $30,000</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold hidden sm:block">Beds</label>
        <select 
          className="bg-navy-800 border border-navy-600 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-teal-500"
          value={filters.bedrooms || ''}
          onChange={handleBedsChange}
        >
          <option value="">Any Beds</option>
          <option value="3">3+ Beds</option>
          <option value="4">4+ Beds</option>
          <option value="5">5+ Beds</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold hidden sm:block">Type</label>
        <select 
          className="bg-navy-800 border border-navy-600 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-teal-500"
          value={filters.propertyType || ''}
          onChange={handleTypeChange}
        >
          <option value="">All Types</option>
          <option value="Villa">Villa</option>
          <option value="Mansion">Mansion</option>
          <option value="Estate">Estate</option>
          <option value="Penthouse">Penthouse</option>
        </select>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold hidden sm:block">Sort</label>
        <select 
          className="bg-navy-800 border border-teal-500/50 rounded px-3 py-1.5 text-sm text-teal-400 focus:outline-none focus:border-teal-400 cursor-pointer shadow-[0_0_10px_rgba(0,229,255,0.1)]"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="recommended">Recommended</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="beds-desc">Most Bedrooms</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
