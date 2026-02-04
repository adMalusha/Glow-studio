import React from 'react';
import Treatments from '../components/Treatments';
import { ShieldCheck, Fingerprint, Heart } from 'lucide-react';

// De nieuwe afbeeldingen importeren
import stokOpTonyImg from '../images/stok-op-tony.jpeg';
import anouckLaserImg from '../images/anouck-met-laser.jpeg';
import laserTonyImg from '../images/laser-op-tony.jpeg';

const TreatmentsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl serif-font text-[#4A443E] mb-6">Onze behandelingen</h1>
          <p className="text-lg text-[#4A443E]/60 max-w-2xl mx-auto font-light leading-relaxed">
            In ons salon kan je terecht voor drie behandelingen waar kwaliteit en persoonlijke zorg prioriteit heeft.
          </p>
        </div>

        {/* Prijzen en info sectie */}
        <Treatments />

        {/* Visual Gallery Section - Jouw 3 foto's in de nieuwe volgorde */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
           
           {/* Foto 1 (Links): Stok op Tony */}
           <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square rounded-[2.5rem] overflow-hidden relative group shadow-lg shadow-[#C98B73]/10">
              <img 
                src={stokOpTonyImg} 
                alt="Behandeling detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5E503F]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest">Nauwkeurigheid</p>
              </div>
           </div>

           {/* Foto 2 (Midden): Anouck met laser */}
           <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square rounded-[2.5rem] overflow-hidden relative group shadow-lg shadow-[#C98B73]/10">
              <img 
                src={anouckLaserImg} 
                alt="Anouck aan het werk" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5E503F]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest">Persoonlijke aandacht</p>
              </div>
           </div>

           {/* Foto 3 (Rechts): Laser op Tony */}
           <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square rounded-[2.5rem] overflow-hidden relative group shadow-lg shadow-[#C98B73]/10">
              <img 
                src={laserTonyImg} 
                alt="Laser behandeling close-up" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5E503F]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest">Effectief resultaat</p>
              </div>
           </div>
        </div>

        {/* Waarden sectie (Kwaliteit, Uniek, Persoonlijk) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in max-w-7xl mx-auto">
          {[
            { 
              title: 'Kwaliteit', 
              text: 'We werken met de nieuwste technologieën en apparatuur. Zo kan ons salon een veilig resultaat garanderen.',
              icon: ShieldCheck
            },
            { 
              title: 'Uniek', 
              text: 'Elke behandeling is op maat van jou. Zowel bij het maken van een 3D zwangerschapsbeeldje of laserontharing.',
              icon: Fingerprint
            },
            { 
              title: 'Persoonlijk', 
              text: 'We nemen tijd voor jou, van adviesgesprek tot nazorg. We beantwoorden al jouw vragen tijdens het gesprek of voor de behandeling.',
              icon: Heart
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border border-[#E5D1C6]/30 flex flex-col items-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#FDF7F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C98B73]/10 transition-colors">
                <item.icon className="w-8 h-8 text-[#C98B73]" />
              </div>
              <h4 className="text-lg font-bold text-[#5E503F] mb-4 uppercase tracking-[0.2em]">{item.title}</h4>
              <p className="text-[#5E503F]/70 text-sm leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;