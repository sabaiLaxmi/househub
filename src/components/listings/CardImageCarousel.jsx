import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CardImageCarousel = ({ images, alt }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback((e) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index, e) => {
    e.stopPropagation();
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

  // If there's only one image or none, just render a static image
  if (!images || images.length <= 1) {
    const singleImage = images?.[0] || '';
    return (
      <div className="w-full h-full bg-black">
        <img 
          src={singleImage} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/carousel" onClick={(e) => {
      // Prevent clicks on the carousel track from bubbling up if dragging occurs
      // Embla usually handles drag vs click well, but just in case
    }}>
      <div className="overflow-hidden w-full h-full bg-black cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex w-full h-full touch-pan-y">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full relative" key={index}>
              <img 
                src={src} 
                alt={`${alt} - ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-navy-900/60 hover:bg-teal-500 text-white hover:text-navy-900 p-1.5 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover/carousel:opacity-100 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={scrollNext} 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy-900/60 hover:bg-teal-500 text-white hover:text-navy-900 p-1.5 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover/carousel:opacity-100 z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => scrollTo(index, e)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-teal-500 scale-110' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardImageCarousel;
