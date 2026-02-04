import React from 'react';
import { BOOKING_URL } from '../constants';
import studioBg from '../images/studio.jpeg';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${studioBg})` }}
    >
      {/* Overlay: Zorgt voor de roze gloed over de foto zodat tekst leesbaar blijft */}
      <div className="absolute inset-0 bg-[#F9E5E5]/80 mix-blend-overlay"></div>
      
      {/* Extra wit laagje voor betere leesbaarheid tekst */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Decoratieve elementen */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4D3D3]/40 rounded-l-full blur-3xl z-10 animate-pulse"></div>
      
      <div className="container relative z-20 mx-auto px-6 text-center max-w-5xl animate-fade-in-up">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C98B73] font-bold mb-6 block">
          Welkom bij Glow Studio
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light serif-font leading-tight text-[#5E503F] mb-8">
          Zorg voor elk bijzonder & <span className="italic">persoonlijk</span> moment.
        </h1>
        <p className="text-lg md:text-xl text-[#5E503F]/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Van een tastbare herinnering aan je zwangerschap tot verzorgende behandelingen met persoonlijke aandacht. Stralend zelfvertrouwen begint hier.
        </p>
        <div className="flex justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-5 bg-[#C98B73] text-white text-xs font-extrabold rounded-full tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:bg-[#B0765F] shadow-xl shadow-[#C98B73]/30"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;