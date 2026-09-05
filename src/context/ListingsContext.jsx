// @refresh reset
import React, { createContext, useState, useContext } from 'react';
import listingsData from '../data/listings.json';

const ListingsContext = createContext();

export const useListings = () => useContext(ListingsContext);

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState(listingsData);
  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    bedrooms: null,
    propertyType: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('recommended'); // 'recommended', 'price-asc', 'price-desc', 'beds-desc'
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ListingsContext.Provider
      value={{
        listings,
        setListings,
        filters,
        setFilters,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        hoveredId,
        setHoveredId,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};
