import React from 'react';
import { Shield, Globe, Key, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      title: "Discreet Transactions",
      description: "Unparalleled privacy and confidentiality for high-profile clients and sensitive acquisitions."
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      title: "Global Network",
      description: "Exclusive access to off-market properties across the world's most desirable destinations."
    },
    {
      icon: <Key className="w-8 h-8 text-teal-400" />,
      title: "White-Glove Service",
      description: "A dedicated concierge team handling every detail of your real estate journey from start to finish."
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-400" />,
      title: "24/7 Availability",
      description: "Our elite agents operate across all time zones to ensure your needs are met immediately."
    }
  ];

  return (
    <section className="py-24 bg-navy-800 border-t border-navy-700 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <span className="text-sm font-bold text-teal-500 tracking-widest uppercase">The PropertyHub Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Redefining Luxury Real Estate</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just sell properties; we curate lifestyles. Experience a new standard of excellence tailored exclusively for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-navy-900/50 backdrop-blur-sm border border-navy-700 hover:border-teal-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-6 group-hover:bg-teal-500/10 group-hover:border-teal-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
