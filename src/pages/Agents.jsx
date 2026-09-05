import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { User, X, Mail, Phone } from 'lucide-react';

const agentsData = [
  {
    id: 1,
    name: "Michael Sterling",
    title: "Senior Luxury Broker",
    email: "m.sterling@propertyhub.com",
    phone: "+1 (555) 123-4567",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    title: "International Property Specialist",
    email: "s.jenkins@propertyhub.com",
    phone: "+1 (555) 987-6543",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  },
  {
    id: 3,
    name: "David Chen",
    title: "Estates Director",
    email: "d.chen@propertyhub.com",
    phone: "+1 (555) 456-7890",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
  }
];

const Agents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="pt-24 min-h-screen bg-navy-900 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Elite Agents</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the professionals dedicated to finding your dream home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agentsData.map((agent) => (
            <div key={agent.id} className="bg-navy-800 rounded-xl p-8 text-center border border-navy-700 hover:border-teal-500 transition-colors">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-teal-500/30">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-gray-400 mb-6">{agent.title}</p>
              <button 
                onClick={() => setSelectedAgent(agent)}
                className="w-full py-3 px-4 bg-teal-500/10 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-navy-900 font-semibold transition-all"
              >
                Contact Agent
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Agent Modal */}
      {selectedAgent && createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedAgent(null)}>
          <div className="bg-navy-800 border border-teal-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedAgent(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-navy-900/50 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 text-center border-b border-navy-700 relative">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-teal-500/20 to-transparent"></div>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-navy-900 shadow-xl relative z-10">
                <img src={selectedAgent.image} alt={selectedAgent.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-white">{selectedAgent.name}</h2>
              <p className="text-teal-500 font-medium">{selectedAgent.title}</p>
            </div>
            
            <div className="p-8 space-y-6 bg-navy-900/50">
              <a href={`mailto:${selectedAgent.email}`} className="flex items-center gap-4 group p-4 rounded-xl bg-navy-800 border border-navy-700 hover:border-teal-500 transition-colors">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Address</p>
                  <p className="text-white font-medium">{selectedAgent.email}</p>
                </div>
              </a>
              
              <a href={`tel:${selectedAgent.phone}`} className="flex items-center gap-4 group p-4 rounded-xl bg-navy-800 border border-navy-700 hover:border-teal-500 transition-colors">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                  <p className="text-white font-medium">{selectedAgent.phone}</p>
                </div>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Agents;
