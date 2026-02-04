
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-left md:text-center">
          <h2 className="text-4xl md:text-5xl serif-font text-[#5E503F] mb-12">Zorg voor elk <span className="italic">bijzonder</span> moment</h2>
          <div className="space-y-6 text-lg text-[#5E503F]/80 font-light leading-relaxed max-w-4xl mx-auto">
            <p className="font-medium text-[#C98B73]">
              Van een tastbare herinnering aan je zwangerschap tot verzorgende behandelingen met persoonlijke aandacht.
            </p>
            <p>
              In ons salon kan je terecht voor 3D zwangerschapsbeeldjes, laserontharing en tanden witten. Alle behandelingen gaan door in een rustige omgeving, waar kwaliteit, comfort en vertrouwen centraal staan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
