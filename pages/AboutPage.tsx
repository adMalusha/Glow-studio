import React from 'react';
import { Sparkles, Heart, Baby, GraduationCap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Title & Image Placeholder */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            <span className="text-xs uppercase tracking-[0.4em] text-[#C98B73] font-bold block">Het gezicht achter Glow Studio</span>
            <h1 className="text-5xl md:text-6xl serif-font text-[#5E503F] leading-tight">
              Ontmoet <br />
              <span className="italic underline decoration-[#C98B73]/30">Anouck</span>
            </h1>
            
            <div className="aspect-[4/5] bg-[#FDF7F5] rounded-[3rem] overflow-hidden border border-[#F4D3D3]/30 relative group">
               {/* Simulating a professional portrait background */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#5E503F]/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side: The Story */}
          <div className="lg:col-span-7 space-y-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="prose prose-lg text-[#5E503F]/80 font-light leading-relaxed space-y-8">
              <p className="text-xl text-[#5E503F] font-medium serif-font italic">
                "Ik ben Anouck, 27 jaar en mama van mijn zoontje Odin."
              </p>
              
              <div className="flex items-start space-x-6 group">
                <div className="mt-1 p-3 bg-[#FDF7F5] rounded-2xl group-hover:bg-[#C98B73]/10 transition-colors">
                  <GraduationCap className="w-5 h-5 text-[#C98B73]" />
                </div>
                <p>
                  In 2020 studeerde ik af als medisch en sociaal secretaresse. Sindsdien werk ik met veel liefde in het basisonderwijs, een job waarin zorg, structuur, ouders en kinderen centraal staan — waarden die ik ook meeneem in mijn salon.
                </p>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="mt-1 p-3 bg-[#FDF7F5] rounded-2xl group-hover:bg-[#C98B73]/10 transition-colors">
                  <Sparkles className="w-5 h-5 text-[#C98B73]" />
                </div>
                <p>
                  Twee jaar geleden besloot ik mijn eigen droom te volgen en mijn salon: Glow Studio op te starten. In oktober 2024 opende het salon, mijn thuisbasis. Ik had zelf al ervaring met laserontharing en tanden witten, maar wilde dit op een meer persoonlijke, kwalitatieve en zorgzame manier aanbieden aan mijn klanten.
                </p>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="mt-1 p-3 bg-[#FDF7F5] rounded-2xl group-hover:bg-[#C98B73]/10 transition-colors">
                  <Baby className="w-5 h-5 text-[#C98B73]" />
                </div>
                <p>
                  In 2025 werd ik mama. Het allermooiste in mijn leven. Ik liet dan ook een zwangerschapsbeeldje maken van mijn buik toen ik zwanger was, als herinnering. Het laten maken van mijn eigen zwangerschapsbeeldje was een intense en mooie ervaring — uniek, emotioneel en iets wat ik voor altijd koester. Net daarom besloot ik om deze dienst toe te voegen aan Glow Studio, zodat ook andere mama’s dat bijzondere moment tastbaar kunnen bewaren.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#F4D3D3]/30">
              <div className="flex items-center space-x-4 mb-6">
                 <Heart className="w-5 h-5 text-[#C98B73] fill-[#C98B73]" />
                 <span className="text-sm font-bold uppercase tracking-widest text-[#5E503F]">Je bent van harte welkom</span>
              </div>
              <p className="text-[#5E503F]/60 leading-relaxed italic">
                Je bent van harte welkom in Glow Studio, waar ik je met een glimlach en persoonlijke aandacht ontvang. 🤍
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;