
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const StickyBookingButton: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 px-6 py-4 bg-[#C98B73] text-white rounded-full shadow-2xl shadow-[#C98B73]/40 hover:scale-105 transition-all group"
      >
        <Calendar className="w-5 h-5 group-hover:animate-bounce" />
        <span className="font-extrabold uppercase tracking-widest text-xs hidden md:inline">Boek Nu</span>
      </a>
    </div>
  );
};

export default StickyBookingButton;
