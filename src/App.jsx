import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ListingsProvider } from './context/ListingsContext';
import Navbar from './components/layout/Navbar';
import { Home } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Pages
import HomePage from './pages/Home';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import About from './pages/About';
import Contact from './pages/Contact';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef();
  
  useGSAP(() => {
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.inOut',
        onComplete: () => setLoading(false)
      });
      
      gsap.to('.loader-icon', {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: 'sine.inOut'
      });
    }
  }, []);

  return (
    <>
      {loading && (
        <div ref={loaderRef} className="fixed inset-0 z-[200] bg-navy-900 flex flex-col items-center justify-center">
          <Home className="loader-icon w-12 h-12 text-teal-500 mb-4" />
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase">PropertyHub</h1>
          <div className="w-48 h-1 bg-navy-800 mt-6 rounded overflow-hidden">
            <div className="h-full bg-teal-500 animate-pulse w-full"></div>
          </div>
        </div>
      )}
      
      <div className={`flex flex-col min-h-screen bg-navy-900 ${loading ? 'hidden' : 'block'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <ListingsProvider>
      <AppContent />
    </ListingsProvider>
  );
}

export default App;
