import React from 'react';
import { Heart, Camera, ClipboardList, Sparkles, Calendar, ExternalLink } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import grootWitKleintjesWit from '../images/grootWitKleintjeswit.png';
import grootWitKleintjesWit from '../images/BronsBeeldjeKlein.png';
import grootWitKleintjesWit from '../images/MomoryLOGO.png';
import grootWitKleintjesWit from '../images/grootGoud.png';

const MomoryPage: React.FC = () => {
  const steps = [
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
      text: 'Samen met Printplace bewerken we het model tot in detail en zetten het om in een uniek beeldje. Een tastbare herinnering voor altijd.',
      icon: Sparkles
    }
  ];

  const galleryImages = [
  grootWitKleintjesWit,
  BronsBeeldjeKlein,
  MomoryLOGO,
  grootGoud,
];

  return (
    <div className="pt-32 pb-24 bg-[#FDF7F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero / Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 animate-fade-in">
          <div className="lg:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] text-[#C98B73] font-bold mb-6 block">Nieuw Concept</span>
            <h1 className="text-5xl md:text-7xl serif-font text-[#5E503F] mb-8 leading-tight">MOMory</h1>
            <h2 className="text-2xl md:text-3xl serif-font text-[#C98B73] mb-8 italic">Uniek – persoonlijk – tastbaar</h2>
            
            <div className="space-y-6 text-[#5E503F]/80 font-light leading-relaxed text-lg">
              <p>
                Een zwangerschap is één van de meest bijzondere en emotionele momenten in het leven van een vrouw. Met MOMory creëren we een tastbare herinnering aan deze unieke periode via exclusieve 3D zwangerschapsbeeldjes.
              </p>
              <p>
                Bij Glow Studio draait het niet alleen om een beeldje maken, maar om het vastleggen van een gevoel, een herinnering en een stukje van jouw verhaal.
              </p>
              <p>
                Elk zwangerschapsbeeldje wordt volledig op maat gemaakt en met oog voor detail afgewerkt. Dankzij moderne 3D-technologie worden jouw vrouwelijke vormen op een elegante, artistieke en stijlvolle manier vereeuwigd.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={galleryImages[0]} 
                alt="MOMory 3D zwangerschapsbeeldje" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant badge */}
            <div className="absolute -bottom-10 -left-10 bg-[#F4D3D3] p-10 rounded-full shadow-xl hidden md:block">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Detailed Text Section */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-[#F4D3D3]/30 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-[#5E503F] font-light italic leading-loose mb-12">
              "Onze zwangerschapsbeeldjes symboliseren kracht, vrouwelijkheid, liefde en nieuw leven. Het resultaat is niet alleen een prachtige herinnering aan jouw zwangerschap, maar ook een luxueus interieurstuk met emotionele waarde voor later. — elk MOMory beeldje is uniek, net zoals elke mama."
            </p>
            <div className="w-24 h-px bg-[#C98B73] mx-auto mb-12"></div>
            <p className="text-[#5E503F]/70 leading-relaxed">
              Tijdens de afspraak nemen we uitgebreid de tijd om samen poses, afwerking en stijl te bespreken zodat alles volledig aansluit bij jouw wensen en persoonlijkheid.
            </p>
          </div>
        </div>

        {/* Werkwijze Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl serif-font text-[#5E503F] mb-4">Onze werkwijze</h3>
            <p className="text-[#C98B73] font-bold tracking-widest text-xs uppercase">Stap voor stap naar jouw herinnering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-[#F4D3D3]/20 shadow-sm hover:shadow-md transition-all group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-[#C98B73]/20 text-5xl font-bold serif-font mb-4 group-hover:text-[#C98B73]/40 transition-colors">{item.step}</div>
                <item.icon className="w-8 h-8 text-[#C98B73] mb-6" />
                <h4 className="text-lg font-bold text-[#5E503F] mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-[#5E503F]/70 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Note */}
        <div className="mb-32 bg-[#F9E5E5]/40 p-10 rounded-[2.5rem] border border-[#F4D3D3]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-semibold serif-font text-[#5E503F] mb-2">Exclusieve Samenwerking</h4>
            <p className="text-[#5E503F]/60 text-sm">
              MOMory is een uniek nieuw concept in samenwerking met <strong>Printplace</strong>. Samen garanderen we de hoogste kwaliteit en een perfecte afwerking van jouw beeldje.
            </p>
          </div>
          <a 
            href="https://printplace.be/?lang=nl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#C98B73] font-bold uppercase tracking-widest text-xs hover:underline"
          >
            <span>Ontdek Printplace</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl serif-font text-[#5E503F] mb-4">Galerij</h3>
            <p className="text-[#C98B73] font-bold tracking-widest text-xs uppercase">Sfeerbeelden van MOMory</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-white group">
                <img 
                  src={img} 
                  alt={`MOMory gallerij beeld ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl serif-font text-[#5E503F] mb-12 italic">Leg nu jouw MOMory vast <span className="text-[#C98B73]">❤</span></h3>
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

export default MomoryPage;
