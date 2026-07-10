import React from 'react';
import { BOOKING_URL } from '../constants';
import heroCollage from '../images/hero-collage.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDF7F5]">

      <div className="md:hidden text-center px-6 pt-10 pb-8">
        <h1 className="text-4xl font-light serif-font leading-tight text-[#5E503F] mb-8">
          Zorg voor elk bijzonder & <span className="italic">persoonlijk</span> moment.
        </h1>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full px-12 py-5 bg-[#C98B73] text-white text-xs font-extrabold rounded-full tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#B0765F] shadow-xl shadow-[#C98B73]/30">
          Maak een afspraak
        </a>
      </div>

      <div className="relative animate-fade-in-up">
        <img src={heroCollage} alt="Sfeerbeelden van behandelingen bij Glow Studio" className="w-full h-auto md:h-[calc(100vh-5rem)] md:object-cover md:object-center" />

        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <div className="bg-[#FDF7F5]/90 backdrop-blur-sm rounded-3xl px-12 py-10 text-center max-w-2xl mx-8 shadow-2xl shadow-[#5E503F]/10">
            <h1 className="text-4xl lg:text-5xl font-light serif-font leading-tight text-[#5E503F] mb-8">
              Zorg voor elk bijzonder & <span className="italic">persoonlijk</span> moment.
            </h1>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-[#C98B73] text-white text-xs font-extrabold rounded-full tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:bg-[#B0765F] shadow-xl shadow-[#C98B73]/30">
              Maak een afspraak
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
