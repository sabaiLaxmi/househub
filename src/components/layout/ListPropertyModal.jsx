import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

const ListPropertyModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-navy-900 border border-teal-500/30 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-navy-800 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-2">List Your Property</h2>
          <p className="text-gray-400 mb-8">
            Partner with our elite network of global agents to showcase your luxury property to the right audience.
          </p>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Application Received!</h3>
              <p className="text-gray-400">
                Our onboarding team will contact you shortly to arrange a private consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Property Address</label>
                <input required type="text" className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="e.g. 100 Luxury Avenue" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Value</label>
                  <select required className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors">
                    <option value="">Select range</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Property Type</label>
                  <select required className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors">
                    <option value="">Select type</option>
                    <option value="villa">Villa</option>
                    <option value="mansion">Mansion</option>
                    <option value="estate">Estate</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Contact Email</label>
                <input required type="email" className="w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="you@example.com" />
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full mt-4 py-3 bg-teal-500 text-navy-900 rounded-lg font-bold hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Property Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ListPropertyModal;
