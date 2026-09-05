import { useContext, useMemo } from 'react';
import { useListings } from '../context/ListingsContext';

export const useFilteredListings = () => {
  const { listings, filters, searchQuery, sortOrder } = useListings();

  const filteredListings = useMemo(() => {
    let result = listings.filter((listing) => {
      // Filters
      if (filters.minPrice && listing.price < filters.minPrice) return false;
      if (filters.maxPrice && listing.price > filters.maxPrice) return false;
      if (filters.bedrooms && listing.bedrooms < filters.bedrooms) return false;
      if (filters.propertyType && listing.type !== filters.propertyType) return false;
      
      // Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchTitle = listing.title.toLowerCase().includes(query);
        const matchState = listing.state?.toLowerCase().includes(query);
        const matchCountry = listing.country?.toLowerCase().includes(query);
        if (!matchTitle && !matchState && !matchCountry) return false;
      }
      
      return true;
    });

    // Sorting
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'beds-desc') {
      result.sort((a, b) => b.bedrooms - a.bedrooms);
    } // 'recommended' leaves original order (or you could sort by featured)

    return result;
  }, [listings, filters, searchQuery, sortOrder]);

  return filteredListings;
};
