import React from 'react';
import FilterBar from '../components/filters/FilterBar';
import ListingList from '../components/listings/ListingList';

const Properties = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col bg-navy-900">
      <div className="px-8 py-6 text-center border-b border-navy-700 bg-navy-800">
        <h1 className="text-4xl font-bold text-white mb-2">All Properties</h1>
        <p className="text-gray-400">Discover your perfect home from our curated selection</p>
      </div>
      <main className="flex-1 flex flex-col relative h-full">
        <div className="w-full flex flex-col bg-navy-800 z-10 overflow-hidden h-full">
          <FilterBar />
          <div className="flex-1 overflow-y-auto">
            <ListingList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Properties;
