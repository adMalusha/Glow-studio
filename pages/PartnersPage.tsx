import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const partners = [
  {
    name: 'Mamzelle Axelle',
    description: 'Aandenkingsjuwelen (moedermelk, navelstreng, ...)',
    url: 'https://mamzelleaxelle.be/',
  },
];

const PartnersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDF7F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl serif-font text-[#5E503F] mb-6">Onze Partners</h1>
          <p className="text-lg text-[#5E503F]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Wij werken graag samen met getalenteerde ondernemers die met evenveel passie en zorg hun diensten aanbieden. Ontdek onze partners hieronder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#F4D3D3]/30 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-[#F9E5E5]/40 rounded-full flex items-center justify-center group-hover:bg-[#C98B73]/20 transition-colors">
                  <ExternalLink className="text-[#C98B73] w-5 h-5" />
                </div>
                <Heart className="text-[#C98B73]/20 w-5 h-5 group-hover:text-[#C98B73] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-semibold serif-font text-[#5E503F] mb-3">{partner.name}</h3>
              <p className="text-[#5E503F]/60 text-sm leading-relaxed mb-6">
                {partner.description}
              </p>
              
              <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#C98B73] group-hover:translate-x-2 transition-transform">
                Bezoek website
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
