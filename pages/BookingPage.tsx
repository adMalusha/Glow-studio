
import React, { useEffect } from 'react';
import { ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const BookingPage: React.FC = () => {
  // Optional: Auto-redirect after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(BOOKING_URL, '_blank');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#F4E8E1]/40 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-[#4A443E]/5 border border-[#E5D1C6]/30 animate-fade-in">
          <div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-10 h-10 text-[#D4AF37] animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-5xl serif-font text-[#4A443E] mb-6">Een moment voor jezelf</h1>
          <p className="text-lg text-[#4A443E]/60 mb-10 font-light leading-relaxed">
            Je wordt doorverwezen naar onze officiële agenda in Google Calendar. Daar kan je eenvoudig je behandeling en tijdstip kiezen.
          </p>

          <div className="space-y-6">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 w-full py-5 bg-[#D4AF37] text-white font-bold rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-[1.02] hover:bg-[#B8962F]"
            >
              <span>Open Agenda</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <div className="pt-6 flex items-center justify-center space-x-2 text-[#4A443E]/40 text-[10px] uppercase tracking-widest font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Veilig en direct boeken</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-xs text-[#4A443E]/40 uppercase tracking-widest leading-loose">
          Word je niet automatisch doorverwezen? Klik dan op de knop hierboven.
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
