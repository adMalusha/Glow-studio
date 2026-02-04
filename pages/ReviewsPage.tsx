import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '../constants';

const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl serif-font text-[#4A443E] mb-6">Wat onze klanten zeggen</h1>
          <p className="text-lg text-[#4A443E]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Jouw tevredenheid is onze grootste motivatie. Lees hier de ongezouten meningen van wie jou voorging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-[#4A443E]/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <p className="text-[#4A443E] serif-font italic text-lg leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>
              <div className="border-t border-[#E5D1C6]/30 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">{review.name}</span>
                <span className="block text-[10px] text-[#4A443E]/40 mt-1 uppercase tracking-widest font-semibold">Geverifieerde Klant</span>
              </div>
            </div>
          ))}
          
          {/* CTA Card for more reviews */}
          <div className="bg-[#5E503F] p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center text-white shadow-xl shadow-[#5E503F]/20">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
               <Star className="w-8 h-8 text-[#C98B73] fill-[#C98B73]" />
            </div>
            <h3 className="text-xl serif-font mb-4">Wil je meer lezen?</h3>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              We hebben nog tientallen andere geverifieerde recensies op ons Google Bedrijfsprofiel.
            </p>
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C98B73] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#B0765F] transition-all flex items-center space-x-2"
            >
              <span>Alle Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Placeholder for more */}
        <div className="text-center opacity-40">
           <Quote className="w-12 h-12 text-[#E5D1C6] mx-auto mb-6" />
           <p className="text-sm font-bold text-[#4A443E] uppercase tracking-widest">Wij streven elke dag naar een 5-sterren ervaring</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;