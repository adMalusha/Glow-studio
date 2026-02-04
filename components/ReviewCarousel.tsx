import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '../constants';

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-24 bg-[#FDF7F5] overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl serif-font text-[#5E503F]">Echte ervaringen van klanten</h2>
          <div className="w-20 h-0.5 bg-[#C98B73] mx-auto mt-6"></div>
        </div>

        <div className="relative mb-12">
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-[#5E503F]/5 max-w-3xl w-full relative group border border-[#F4D3D3]/20">
              <Quote className="absolute top-10 left-10 w-12 h-12 text-[#F4D3D3]/30 -z-0" />
              
              <div className="flex justify-center mb-6">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C98B73] fill-[#C98B73]" />
                ))}
              </div>

              <p className="text-xl md:text-2xl italic serif-font text-[#5E503F] text-center mb-8 relative z-10 leading-relaxed">
                "{REVIEWS[currentIndex].text}"
              </p>
              
              <div className="text-center font-extrabold tracking-widest text-[#C98B73] uppercase text-sm">
                — {REVIEWS[currentIndex].name}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-4 md:-px-12">
            <button 
              onClick={prev} 
              className="p-3 rounded-full bg-white shadow-md text-[#5E503F] hover:text-[#C98B73] transition-all pointer-events-auto transform hover:scale-110 border border-[#F4D3D3]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next} 
              className="p-3 rounded-full bg-white shadow-md text-[#5E503F] hover:text-[#C98B73] transition-all pointer-events-auto transform hover:scale-110 border border-[#F4D3D3]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center">
          <a 
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white border border-[#F4D3D3] text-[#5E503F] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FDF7F5] hover:border-[#C98B73] transition-all group"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-4 h-4"
            />
            <span>Bekijk alle ervaringen op Google</span>
            <ExternalLink className="w-3 h-3 text-[#C98B73] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;