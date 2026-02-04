import React from 'react';
import Treatments from '../components/Treatments';
import { Sparkles, ArrowRight, ShieldCheck, Fingerprint, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        <Treatments />

        {/* Value Propositions Section */}
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