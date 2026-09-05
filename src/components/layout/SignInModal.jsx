import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Lock, Mail, Loader2, CheckCircle } from 'lucide-react';

const SignInModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-navy-900 border border-teal-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-navy-800 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to access your exclusive portfolio.</p>
          </div>
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Authentication Successful</h3>
              <p className="text-gray-400">Loading your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input required type="email" className="w-full bg-navy-800 border border-navy-700 rounded-lg pl-10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-400">Password</label>
                  <a href="#" className="text-sm font-medium text-teal-500 hover:text-teal-400">Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input required type="password" className="w-full bg-navy-800 border border-navy-700 rounded-lg pl-10 px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="••••••••" />
                </div>
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full mt-6 py-3 bg-teal-500 text-navy-900 rounded-lg font-bold hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <span>Sign In</span>
                )}
              </button>
              
              <p className="text-center text-gray-400 text-sm mt-6">
                Don't have an account? <a href="#" className="text-teal-500 hover:text-teal-400 font-medium">Apply for access</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SignInModal;
