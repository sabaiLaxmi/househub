import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-navy-900 px-8 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our luxury real estate experts are ready to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-navy-800 border border-navy-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0 border border-navy-700">
                    <MapPin className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Office Address</h4>
                    <p className="text-gray-400 mt-1">100 Luxury Avenue, Suite 500<br/>New York, NY 10022</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0 border border-navy-700">
                    <Phone className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Phone</h4>
                    <p className="text-gray-400 mt-1">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center shrink-0 border border-navy-700">
                    <Mail className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email</h4>
                    <p className="text-gray-400 mt-1">inquiries@propertyhub.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-navy-800 border border-navy-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-teal-500" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. One of our luxury real estate experts will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 py-2 px-6 bg-navy-900 border border-navy-700 text-white rounded-lg hover:border-teal-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input type="text" required className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea rows="4" required className="w-full bg-navy-900 border border-navy-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-500 text-navy-900 rounded-lg font-bold hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
