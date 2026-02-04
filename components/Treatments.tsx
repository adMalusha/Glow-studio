import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Sparkles, Baby } from 'lucide-react';
import { TREATMENTS_INFO, BOOKING_URL } from '../constants';
import PriceListModal from './PriceListModal';

const Treatments: React.FC = () => {
  const [modalType, setModalType] = useState<'mannen' | 'vrouwen' | 'tanden' | 'pregnancy' | null>(null);

  return (
    <section className="py-24 bg-[#FDF7F5]">
      <div className="container mx-auto px-4 max-w-full lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pregnancy Statue Card */}
          <div className="group relative overflow-hidden bg-white rounded-[2.5rem] p-8 lg:px-8 xl:p-10 border border-[#F4D3D3]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C98B73]/10 flex flex-col h-full animate-fade-in-up">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C98B73] font-bold mb-4 block">Uniek Aandenken</span>
              <h3 className="text-2xl lg:text-[1.7rem] xl:text-3xl serif-font text-[#5E503F] mb-6 whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
                {TREATMENTS_INFO.pregnancy.title}
              </h3>
              <p className="text-[#5E503F]/70 mb-8 leading-relaxed">
                {TREATMENTS_INFO.pregnancy.description}
              </p>
              <ul className="space-y-4 mb-10">
                {TREATMENTS_INFO.pregnancy.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-[#5E503F]">
                    <CheckCircle2 className="w-5 h-5 text-[#C98B73]" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto space-y-6">
               <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5E503F]/40 mb-2">Bekijk onze tarieven:</p>
                  <button 
                    onClick={() => setModalType('pregnancy')}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#F9E5E5]/60 hover:bg-[#F9E5E5] text-[#5E503F] text-xs font-bold rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02]"
                  >
                    <Baby className="w-4 h-4 text-[#C98B73]" />
                    <span>Onze Beeldjes</span>
                  </button>
               </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-4 bg-[#C98B73] text-white text-sm font-extrabold rounded-full tracking-widest uppercase transition-all hover:bg-[#B0765F]"
              >
                Creëer je herinnering
              </a>
            </div>
          </div>

          {/* Laser Treatment Card */}
          <div className="group relative overflow-hidden bg-[#F9E5E5]/40 rounded-[2.5rem] p-8 lg:px-8 xl:p-10 border border-[#F4D3D3]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C98B73]/10 flex flex-col h-full animate-fade-in-up" style={{animationDelay: '100ms'}}>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C98B73] font-bold mb-4 block">Focus Behandeling</span>
              <h3 className="text-2xl lg:text-[1.7rem] xl:text-3xl serif-font text-[#5E503F] mb-6">
                {TREATMENTS_INFO.laser.title}
              </h3>
              <p className="text-[#5E503F]/70 mb-8 leading-relaxed">
                {TREATMENTS_INFO.laser.description}
              </p>
              <ul className="space-y-4 mb-10">
                {TREATMENTS_INFO.laser.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-[#5E503F]">
                    <CheckCircle2 className="w-5 h-5 text-[#C98B73]" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto space-y-6">
               <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5E503F]/40 mb-2">Bekijk onze tarieven:</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setModalType('mannen')}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white/80 hover:bg-white text-[#5E503F] text-[10px] font-bold rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02] shadow-sm"
                    >
                      <FileText className="w-4 h-4 text-[#C98B73]" />
                      <span>mannen</span>
                    </button>
                    <button 
                      onClick={() => setModalType('vrouwen')}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-white/80 hover:bg-white text-[#5E503F] text-[10px] font-bold rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02] shadow-sm"
                    >
                      <FileText className="w-4 h-4 text-[#C98B73]" />
                      <span>vrouwen</span>
                    </button>
                  </div>
               </div>
               <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-4 bg-[#C98B73] text-white text-sm font-extrabold rounded-full tracking-widest uppercase transition-all hover:bg-[#B0765F]"
              >
                Boek een sessie
              </a>
            </div>
          </div>

          {/* Teeth Whitening Card */}
          <div className="group relative overflow-hidden bg-white rounded-[2.5rem] p-8 lg:px-8 xl:p-10 border border-[#F4D3D3]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C98B73]/10 flex flex-col h-full animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#C98B73] font-bold mb-4 block">Direct Resultaat</span>
              <h3 className="text-2xl lg:text-[1.7rem] xl:text-3xl serif-font text-[#5E503F] mb-6">
                {TREATMENTS_INFO.teeth.title}
              </h3>
              <p className="text-[#5E503F]/70 mb-8 leading-relaxed">
                {TREATMENTS_INFO.teeth.description}
              </p>
              <ul className="space-y-4 mb-10">
                {TREATMENTS_INFO.teeth.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-[#5E503F]">
                    <CheckCircle2 className="w-5 h-5 text-[#C98B73]" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto space-y-6">
               <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#5E503F]/40 mb-2">Bekijk onze tarieven:</p>
                  <button 
                    onClick={() => setModalType('tanden')}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#F4D3D3]/40 hover:bg-[#F4D3D3]/60 text-[#5E503F] text-xs font-bold rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02]"
                  >
                    <Sparkles className="w-4 h-4 text-[#C98B73]" />
                    <span>Onze Sparkle Pakketten</span>
                  </button>
               </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-4 bg-[#C98B73] text-white text-sm font-extrabold rounded-full tracking-widest uppercase transition-all hover:bg-[#B0765F]"
              >
                Boek een sessie
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Price List Modals */}
      <PriceListModal 
        type="mannen" 
        isOpen={modalType === 'mannen'} 
        onClose={() => setModalType(null)} 
      />
      <PriceListModal 
        type="vrouwen" 
        isOpen={modalType === 'vrouwen'} 
        onClose={() => setModalType(null)} 
      />
      <PriceListModal 
        type="tanden" 
        isOpen={modalType === 'tanden'} 
        onClose={() => setModalType(null)} 
      />
      <PriceListModal 
        type="pregnancy" 
        isOpen={modalType === 'pregnancy'} 
        onClose={() => setModalType(null)} 
      />
    </section>
  );
};

export default Treatments;