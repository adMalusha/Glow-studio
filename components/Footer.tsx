import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Phone, Star } from 'lucide-react';
import { BOOKING_URL, GOOGLE_REVIEWS_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5E503F] text-[#FDF7F5] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <span className="text-xl font-bold tracking-widest uppercase">Glow Studio</span>
            </Link>
            <p className="text-[#FDF7F5]/60 font-light leading-relaxed mb-8 max-w-xs">
              De plek waar schoonheid en resultaat samenkomen. Gespecialiseerd in hoogwaardige beauty behandelingen.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/glowstudiolede/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C98B73] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61563468450840" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C98B73] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="tel:0487175702" 
                className="hover:text-[#C98B73] transition-colors"
                title="Bel 0487/17.57.02"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#C98B73] mb-8">Navigatie</h4>
            <ul className="space-y-4">
              <li><Link to="/over-ons" className="text-[#FDF7F5]/60 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link to="/behandelingen" className="text-[#FDF7F5]/60 hover:text-white transition-colors">Behandelingen</Link></li>
              <li><Link to="/werkwijze" className="text-[#FDF7F5]/60 hover:text-white transition-colors">Werkwijze</Link></li>
              <li><Link to="/contact" className="text-[#FDF7F5]/60 hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a 
                  href={BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C98B73] font-extrabold uppercase tracking-widest text-sm hover:underline"
                >
                  Maak een afspraak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#C98B73] mb-8">Wat klanten zeggen</h4>
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-6 rounded-2xl italic font-light text-[#FDF7F5]/80 leading-relaxed relative group hover:bg-white/10 transition-all"
            >
              <span className="text-4xl absolute -top-4 -left-2 text-[#C98B73]/20">"</span>
              Prachtige studio en zeer professioneel. Ik kom hier altijd met veel plezier terug voor mijn behandelingen.
              <div className="flex items-center mt-4 space-x-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C98B73]">— Lisa M.</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-[#C98B73] fill-[#C98B73]" />)}
                </div>
              </div>
              <div className="mt-4 text-[10px] text-white/30 uppercase tracking-widest font-bold group-hover:text-[#C98B73] transition-colors">
                Bekijk op Google
              </div>
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-end text-[10px] text-[#FDF7F5]/40 tracking-widest uppercase">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} GLOW STUDIO. ALL RIGHTS RESERVED.</p>
            <p className="opacity-70 normal-case tracking-normal">Ondernemingsnummer: BE1012.592.304</p>
          </div>
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0 space-y-2">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
            </div>
            <p className="opacity-30 lowercase tracking-normal font-light">made by aleks malusha</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;