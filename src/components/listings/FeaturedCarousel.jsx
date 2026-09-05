import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ListingCard from './ListingCard';

const FeaturedCarousel = ({ listings }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', breakpoints: { '(min-width: 768px)': { align: 'center' } } },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!listings || listings.length === 0) return null;

  return (
    <div className="w-full bg-navy-800 py-12 px-4 border-b border-navy-700 relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Properties</h2>
            <p className="text-gray-400 mt-2">Hand-picked selections of our most exclusive homes.</p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollPrev} 
              className="bg-navy-900 border border-navy-700 hover:border-teal-500 hover:text-teal-500 text-white p-2 rounded-full transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext} 
              className="bg-navy-900 border border-navy-700 hover:border-teal-500 hover:text-teal-500 text-white p-2 rounded-full transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {listings.map(listing => (
              <div 
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0" 
                key={listing.id}
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dot Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {listings.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-teal-500 w-8' : 'bg-navy-600 hover:bg-navy-500'
              }`}
              aria-label={`Go to featured slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
