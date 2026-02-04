import React from 'react';
import { X, Sparkles, Baby } from 'lucide-react';
import { PRICE_LISTS } from '../constants';

interface PriceListModalProps {
  type: 'mannen' | 'vrouwen' | 'tanden' | 'pregnancy';
  isOpen: boolean;
  onClose: () => void;
}

const PriceListModal: React.FC<PriceListModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const data = PRICE_LISTS[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#4A443E]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#FAF7F2] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl animate-fade-in-up border border-[#E5D1C6]/30">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#E5D1C6]/20 transition-colors text-[#4A443E]"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              {type === 'pregnancy' ? (
                <Baby className="w-8 h-8 text-[#D4AF37]" />
              ) : (
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              )}
            </div>
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4AF37] mb-2">Tarieven</h2>
            <h3 className="text-3xl md:text-4xl serif-font text-[#4A443E]">{data.title}</h3>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>

          <div className="space-y-12">
            {data.categories.map((cat, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h4 className="text-center mb-8">
                  <span className="px-8 py-2 border-2 border-[#E5D1C6]/50 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-[#4A443E]">
                    {cat.name}
                  </span>
                </h4>
                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-end group">
                      <div className="flex-grow flex items-center">
                        <span className="text-[10px] md:text-xs font-bold text-[#4A443E] uppercase tracking-widest leading-relaxed">{item.label}</span>
                        <div className="flex-grow mx-4 border-b border-dotted border-[#E5D1C6] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-sm font-bold text-[#D4AF37] whitespace-nowrap">
                        {typeof item.price === 'number' ? `€ ${item.price}` : item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#E5D1C6]/30 text-center">
             <p className="text-[10px] uppercase tracking-widest text-[#4A443E]/40 font-bold mb-4">
                {type === 'pregnancy' 
                  ? 'Het buikbeeldje bestaat uit kunststof met coating naar keuze' 
                  : type === 'tanden' 
                    ? 'We garanderen jou optimale hygiëne' 
                    : 'Prijzen zijn per sessie en per sessie betalend'}
             </p>
             <p className="text-xs font-bold text-[#D4AF37] tracking-[0.2em]">@GLOWSTUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListModal;