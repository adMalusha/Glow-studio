import React from 'react';
import { Calendar, ClipboardList, Camera, Sparkles, ShieldCheck, Zap, Heart, Info, Clock, Thermometer } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const ProcessPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDF7F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C98B73] font-bold mb-6 block">Transparantie & Zorg</span>
          <h1 className="text-4xl md:text-6xl serif-font text-[#5E503F] mb-8">Onze werkwijze</h1>
          <p className="text-lg text-[#5E503F]/60 max-w-2xl mx-auto font-light leading-relaxed">
            Bij Glow Studio geloven we in een persoonlijke aanpak. Ontdek hier stap voor stap hoe we te werk gaan bij elke behandeling, zodat je precies weet wat je kunt verwachten.
          </p>
        </div>

        {/* 3D Zwangerschapsbeeldje Section */}
        <section className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-[#F9E5E5] rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#C98B73]" />
            </div>
            <h2 className="text-3xl md:text-4xl serif-font text-[#5E503F]">3D Zwangerschapsbeeldje</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Boek jouw afspraak',
                text: 'Kies een moment dat voor jou het beste uitkomt. Ideaal tussen week 32–36, maar we stemmen volledig af op jouw gevoel.',
                icon: Calendar
              },
              {
                step: '02',
                title: 'Keuze maken',
                text: 'We bespreken houding, kleur en formaat. We nemen een uur de tijd zodat alles rustig en op jouw tempo verloopt.',
                icon: ClipboardList
              },
              {
                step: '03',
                title: 'De 3D-scan',
                text: 'Een veilige scan van 5 minuten. Voorzie een badjas. Je kiest zelf of je naakt of bedekt poseert.',
                icon: Camera
              },
              {
                step: '04',
                title: 'Afwerking',
                text: 'We bewerken het model tot in detail en zetten het om in een uniek beeldje. Een tastbare herinnering voor altijd.',
                icon: Sparkles
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-[#F4D3D3]/20 shadow-sm hover:shadow-md transition-all group">
                <div className="text-[#C98B73]/20 text-5xl font-bold serif-font mb-4 group-hover:text-[#C98B73]/40 transition-colors">{item.step}</div>
                <item.icon className="w-8 h-8 text-[#C98B73] mb-6" />
                <h4 className="text-lg font-bold text-[#5E503F] mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-[#5E503F]/70 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Laserontharing Section */}
        <section className="mb-32 bg-white rounded-[3rem] p-10 md:p-16 border border-[#F4D3D3]/30">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-[#F9E5E5] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#C98B73]" />
                </div>
                <h2 className="text-3xl md:text-4xl serif-font text-[#5E503F]">Laserontharing</h2>
              </div>
              
              <div className="space-y-12">
                {[
                  { title: 'Adviesgesprek', text: 'Een vrijblijvend gesprek over huidtype, haardichtheid en medische zaken voor een optimaal plan.' },
                  { title: 'Voorbereiding', text: 'Zorg dat de zone gladgeschoren is. Neem een foto van het ongeschoren gebied mee naar de eerste afspraak.' },
                  { title: 'De behandeling', text: 'We gebruiken een beschermende bril en koelende gel. De duur hangt af van de gekozen zone.' },
                  { title: 'Nazorg & Opvolging', text: 'Nazorg met crème en persoonlijke tips. Vervolgsessies worden om de 6-8 weken gepland.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#C98B73] flex items-center justify-center text-[#C98B73] text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#5E503F] uppercase tracking-widest text-sm mb-2">{step.title}</h4>
                      <p className="text-[#5E503F]/60 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-[#FDF7F5] rounded-[2.5rem] p-8 md:p-10 border border-[#F4D3D3]/50 h-full">
                <h3 className="text-2xl serif-font text-[#5E503F] mb-6">Onze technologie</h3>
                <p className="text-[#5E503F]/70 mb-8 text-sm leading-relaxed">
                  Wij werken met de <strong>Diode laser 4 Wave Master</strong>. Dit toestel combineert vier golflengtes (755nm, 808nm, 1064nm & 940nm) voor maximaal resultaat op elk huidtype.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, title: 'Snel', desc: 'Kortere behandeltijden, ook voor grote zones.' },
                    { icon: Thermometer, title: 'Pijnloos', desc: 'Comfortabel door geavanceerde koeling.' },
                    { icon: ShieldCheck, title: 'Effectief', desc: 'Zichtbaar resultaat in minder sessies.' },
                    { icon: Info, title: 'Veilig', desc: 'Geschikt voor alle huid- en haartypes.' }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4D3D3]/20">
                      <benefit.icon className="w-5 h-5 text-[#C98B73] mb-3" />
                      <h5 className="font-bold text-xs uppercase tracking-widest mb-1">{benefit.title}</h5>
                      <p className="text-[11px] text-[#5E503F]/60">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tanden witten Section */}
        <section>
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-[#F9E5E5] rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C98B73]" />
            </div>
            <h2 className="text-3xl md:text-4xl serif-font text-[#5E503F]">Tanden witten</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {[
              { title: 'Advies', icon: ClipboardList, text: 'We bepalen samen de duur en bespreken wat realistisch is.' },
              { title: 'Voorbereiding', icon: ShieldCheck, text: 'Reinigen van tanden en lippen. Het mondstuk breng je zelf in.' },
              { title: 'Behandeling', icon: Zap, text: 'LED-licht activeert het product terwijl jij ontspant met een bril.' },
              { title: 'Wachttijd', icon: Clock, text: '20-80 minuten. Nieuwe klanten starten vaak met 20 of 40 min.' },
              { title: 'Resultaat', icon: Sparkles, text: 'Nazorg tips voor een blijvende lach. Meerdere sessies zijn mogelijk.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-[#F4D3D3]/20 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#FDF7F5] rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#C98B73]" />
                </div>
                <h4 className="font-bold text-[#5E503F] uppercase tracking-widest text-xs mb-4">{step.title}</h4>
                <p className="text-xs text-[#5E503F]/60 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#5E503F] text-[#FDF7F5] p-8 rounded-[2rem] text-center max-w-3xl mx-auto">
            <p className="italic font-light">
              "Wist je dat er vaak meerdere sessies nodig zijn om witter te gaan dan jouw huidige natuurlijke tandkleur? We adviseren je graag eerlijk over het te verwachten resultaat."
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl serif-font text-[#5E503F] mb-8 italic">Klaar om te stralen?</h3>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[#C98B73] text-white text-sm font-extrabold rounded-full tracking-[0.2em] uppercase transition-all hover:bg-[#B0765F] hover:scale-105 shadow-xl shadow-[#C98B73]/30"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;