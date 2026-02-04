import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import ReviewCarousel from '../components/ReviewCarousel';
import Treatments from '../components/Treatments';
import { BOOKING_URL } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Intro />
      <Treatments />
      <ReviewCarousel />
      
      {/* Final Call to Action */}
      <section className="py-24 bg-[#F9E5E5] text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl serif-font text-[#5E503F] mb-8 leading-tight">Geef jezelf dat <span className="italic underline decoration-[#C98B73]/40">speciale moment</span> van verzorging.</h2>
          <p className="text-lg text-[#5E503F]/70 mb-12 leading-relaxed font-light">
            Boek nu je afspraak en ervaar persoonlijke aandacht bij elke behandeling.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[#C98B73] text-white text-sm font-extrabold rounded-full tracking-[0.2em] uppercase transition-all hover:bg-[#B0765F] hover:scale-105 shadow-xl shadow-[#C98B73]/30"
          >
            Maak een afspraak
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;