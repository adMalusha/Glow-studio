import React from 'react';
import { Clock, CalendarX, AlertCircle, Sparkles, Heart } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const HouseRulesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDF7F5] min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-xl shadow-[#5E503F]/5 border border-[#F4D3D3]/30 relative overflow-hidden">
          {/* Decorative Elements */}
          <Sparkles className="absolute top-10 right-10 w-12 h-12 text-[#C98B73]/10" />
          <Sparkles className="absolute bottom-10 left-10 w-8 h-8 text-[#C98B73]/10" />
          
          <div className="text-center mb-16 relative">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C98B73] font-bold mb-4 block">Glow Studio</span>
            <h1 className="text-5xl md:text-7xl serif-font text-[#5E503F] italic">House Rules</h1>
            <div className="w-24 h-px bg-[#C98B73]/30 mx-auto mt-8"></div>
          </div>

          <div className="space-y-20">
            {/* Rule 1 */}
            <section className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <CalendarX className="w-8 h-8 text-[#C98B73]" />
              </div>
              <h2 className="text-3xl serif-font text-[#5E503F] mb-6">Afspraak annuleren</h2>
              <p className="text-[#5E503F]/70 leading-relaxed font-light">
                Om al onze klanten de best mogelijke service te kunnen bieden, vragen wij u vriendelijk om uw afspraak <strong>minimaal 24 uur</strong> van tevoren te annuleren. Indien dit niet gebeurt, zijn wij genoodzaakt een percentage van de geboekte behandeling in rekening te brengen. Bij het niet komen opdagen zonder melding, wordt de volledige behandeling in rekening gebracht.
              </p>
            </section>

            {/* Rule 2 */}
            <section className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-[#C98B73]" />
              </div>
              <h2 className="text-3xl serif-font text-[#5E503F] mb-6">Te laat komen</h2>
              <p className="text-[#5E503F]/70 leading-relaxed font-light">
                We begrijpen dat er soms onvoorziene omstandigheden kunnen zijn. Indien u te laat bent, laat ons dit dan zo snel mogelijk weten. We zullen ons best doen om uw afspraak alsnog door te laten gaan, maar dit kan resulteren in een kortere behandeltijd of het moeten verplaatsen van uw afspraak. Onze diensten zijn zorgvuldig gepland om elke klant de aandacht te geven die ze verdienen.
              </p>
            </section>

            {/* Rule 3 */}
            <section className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <Clock className="w-8 h-8 text-[#C98B73]" />
              </div>
              <h2 className="text-3xl serif-font text-[#5E503F] mb-6">Wees op tijd</h2>
              <p className="text-[#5E503F]/70 leading-relaxed font-light">
                Wij vragen u vriendelijk om op tijd te komen voor uw afspraak, zodat wij u de beste service kunnen bieden en de afspraken van andere klanten niet worden verstoord. Kom een paar minuten eerder om rustig plaats te nemen in onze wachtruimte. We kijken naar u uit om u te verwelkomen en u te laten stralen bij Glow Studio!
              </p>
            </section>
          </div>

          <div className="mt-24 pt-12 border-t border-[#F4D3D3]/30 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Heart className="w-4 h-4 text-[#C98B73] fill-[#C98B73]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#5E503F]">Bedankt voor uw begrip</span>
            </div>
            <p className="text-[10px] text-[#5E503F]/40 tracking-widest uppercase">Glow Studio Team</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#C98B73] text-white text-xs font-extrabold rounded-full tracking-[0.2em] uppercase transition-all hover:bg-[#B0765F] hover:scale-105"
          >
            Ik heb het gelezen, maak afspraak
          </a>
        </div>
      </div>
    </div>
  );
};

export default HouseRulesPage;