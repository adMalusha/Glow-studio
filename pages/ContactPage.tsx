import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, PhoneCall, ScrollText } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "0487/17.57.02";
  const emailAddress = "glowstudiolede@gmail.com";

  const openingHours = [
    { day: 'Maandag', hours: 'Gesloten' },
    { day: 'Dinsdag', hours: '17:00 – 20:00' },
    { day: 'Woensdag', hours: '09:30 – 18:00' },
    { day: 'Donderdag', hours: '09:30 – 18:00' },
    { day: 'Vrijdag', hours: 'Gesloten' },
    { day: 'Zaterdag', hours: '09:30 – 16:00' },
    { day: 'Zondag', hours: 'Gesloten' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl serif-font text-[#5E503F] mb-6">Contacteer ons</h1>
          <p className="text-lg text-[#5E503F]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Heb je een specifieke vraag of wilt u gewoon even overleggen? We horen graag van u.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#F9E5E5]/40 p-8 rounded-[2rem] border border-[#F4D3D3]/20">
                  <MapPin className="text-[#C98B73] w-6 h-6 mb-4" />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Adres</h4>
                  <p className="text-[#5E503F]/70 text-sm leading-loose">
                    Heiplasstraat 72<br />
                    9340 Lede
                  </p>
               </div>
               <div className="bg-[#F9E5E5]/40 p-8 rounded-[2rem] border border-[#F4D3D3]/20">
                  <Phone className="text-[#C98B73] w-6 h-6 mb-4" />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Telefoon</h4>
                  <p className="text-[#5E503F]/70 text-sm leading-loose font-bold">
                    {phoneNumber}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#F4D3D3]/30">
                    <a 
                      href={`mailto:${emailAddress}`} 
                      className="group flex items-center hover:text-[#C98B73] transition-colors"
                    >
                      <Mail className="text-[#C98B73] w-4 h-4 inline mr-2 transition-transform group-hover:scale-110" />
                      <span className="text-xs text-[#5E503F]/70 group-hover:text-[#C98B73]">{emailAddress}</span>
                    </a>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-[#F4D3D3]/30 p-10 rounded-[2.5rem] shadow-sm">
               <div className="flex items-center mb-8">
                  <Clock className="text-[#C98B73] w-6 h-6 mr-4" />
                  <h4 className="text-xl font-semibold serif-font text-[#5E503F]">Openingsuren</h4>
               </div>
               <div className="space-y-4">
                  {openingHours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center text-sm border-b border-[#F4D3D3]/10 pb-2">
                       <span className="font-medium text-[#5E503F]">{item.day}</span>
                       <span className={item.hours === 'Gesloten' ? 'text-red-300' : 'text-[#5E503F]/60'}>{item.hours}</span>
                    </div>
                  ))}
                  <div className="pt-4 text-center">
                    <p className="text-sm italic text-[#5E503F]/80 font-medium">
                      (op zaterdag enkel 3D zwangerschapsbeeldjes)
                    </p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <a 
                 href="https://www.instagram.com/glowstudiolede/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 py-5 bg-[#F4D3D3]/20 text-[#5E503F] font-bold rounded-full uppercase tracking-widest text-[10px] hover:bg-[#C98B73] hover:text-white transition-all shadow-sm"
               >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
               </a>
               <Link 
                 to="/huisregels"
                 className="flex items-center justify-center space-x-3 py-5 bg-[#FDF7F5] border border-[#F4D3D3] text-[#C98B73] font-bold rounded-full uppercase tracking-widest text-[10px] hover:bg-[#F9E5E5] transition-all shadow-sm"
               >
                  <ScrollText className="w-4 h-4" />
                  <span>Huisregels</span>
               </Link>
               <a 
                 href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                 onClick={(e) => {
                   if (!showPhone) {
                     e.preventDefault();
                     setShowPhone(true);
                   }
                 }}
                 className="flex items-center justify-center space-x-3 py-5 bg-[#5E503F] text-white font-bold rounded-full uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all shadow-lg shadow-[#5E503F]/20"
               >
                  <PhoneCall className="w-4 h-4" />
                  <span>{showPhone ? phoneNumber : "Bel ons"}</span>
               </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[500px] bg-[#F9E5E5]/20 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center border border-[#F4D3D3]/30">
            <div className="text-center p-12 relative z-10">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <MapPin className="w-10 h-10 text-[#C98B73]" />
               </div>
               <h3 className="text-2xl font-semibold serif-font text-[#5E503F] mb-4">Bezoek onze studio</h3>
               <p className="text-[#5E503F]/60 text-sm mb-8 leading-relaxed">
                  Onze studio is makkelijk bereikbaar met de wagen en het openbaar vervoer. Parkeren kan voor de deur.
               </p>
               <button 
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Glow+Studio+Heiplasstraat+72+9340+Lede', '_blank')}
                className="px-10 py-5 bg-white text-[#5E503F] border border-[#F4D3D3] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C98B73] hover:text-white transition-all shadow-md"
               >
                  Bekijk op de kaart
               </button>
            </div>
            {/* Background Texture Simulation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1526653054275-4a4f37ce1c2a?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;