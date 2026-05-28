import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import eljolieLabel from '../images/EljolieLabel.png';

const EljolieLabel: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Badge Side */}
          <div className="lg:w-1/3 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#F4D3D3] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 border-[#F4D3D3]/30 rounded-full flex items-center justify-center p-4 bg-white shadow-xl transform hover:scale-105 transition-transform duration-500">
               <img 
  src={eljolieLabel}
  alt="Eljolie Label" 
  className="w-full h-full object-contain rounded-full"
/>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#C98B73] text-white p-4 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-2/3 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-[#F9E5E5]/40 px-4 py-2 rounded-full mb-8">
              <CheckCircle className="w-4 h-4 text-[#C98B73]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C98B73]">Kwaliteitsgarantie</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl serif-font text-[#5E503F] mb-8 leading-tight">
              Glow Studio is trots gecertificeerd met het <span className="text-[#C98B73]">Eljolie Label</span>
            </h2>
            
            <p className="text-lg text-[#5E503F]/70 font-light leading-relaxed mb-8">
              Dit label staat voor kwaliteit, professionaliteit, luxe, persoonlijke service en een hoogwaardige beautybeleving. Salons met dit label streven naar perfectie, expertise en een warme totaalervaring waarbij de klant centraal staat.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Kwaliteit', 'Luxe', 'Service', 'Expertise'].map((item) => (
                <div key={item} className="flex flex-col items-center p-4 bg-[#FDF7F5] rounded-2xl border border-[#F4D3D3]/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C98B73]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EljolieLabel;
