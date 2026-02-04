
import React, { useState } from 'react';
import { Calendar, User, CheckCircle, ChevronRight, ChevronLeft, Sparkles, Clock } from 'lucide-react';
import { TreatmentCategory, Gender, BookingData } from '../types';

const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>({
    category: null,
    gender: null,
    date: null,
    time: null,
    clientInfo: { name: '', email: '', phone: '' }
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Updated handler to skip step 2 for certain categories
  const handleSelectCategory = (cat: TreatmentCategory) => {
    setBooking({ ...booking, category: cat });
    // Skip gender selection (step 2) for teeth whitening
    if (cat === TreatmentCategory.TEETH_WHITENING) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  const handleSelectGender = (gender: Gender) => {
    setBooking({ ...booking, gender });
    nextStep();
  };

  const handleSelectSlot = (date: string, time: string) => {
    setBooking({ ...booking, date, time });
    nextStep();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
    // Simulate email confirmation
    console.log("Booking Confirmed:", booking);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-[#4A443E]/5 overflow-hidden border border-[#E5D1C6]/20">
      {/* Progress Bar */}
      <div className="h-2 bg-[#E5D1C6]/30">
        <div 
          className="h-full bg-[#D4AF37] transition-all duration-500 ease-out" 
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>

      <div className="p-8 md:p-14">
        {/* Step 1: Category */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#4A443E] mb-8 text-center">Welke behandeling kies je?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => handleSelectCategory(TreatmentCategory.LASER)}
                className="p-8 rounded-2xl border-2 border-[#E5D1C6]/50 hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-all text-center group"
              >
                <div className="w-16 h-16 bg-[#F4E8E1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#4A443E] mb-2">{TreatmentCategory.LASER}</h3>
                <p className="text-sm text-[#4A443E]/60">Definitieve ontharing</p>
              </button>
              <button 
                onClick={() => handleSelectCategory(TreatmentCategory.TEETH_WHITENING)}
                className="p-8 rounded-2xl border-2 border-[#E5D1C6]/50 hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-all text-center group"
              >
                <div className="w-16 h-16 bg-[#F4E8E1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-[#D4AF37] w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#4A443E] mb-2">{TreatmentCategory.TEETH_WHITENING}</h3>
                <p className="text-sm text-[#4A443E]/60">Stralend witte tanden</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Gender (Only if Laser) */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#4A443E] mb-8 text-center">Voor wie is deze afspraak?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => handleSelectGender(Gender.VROUW)}
                className="p-8 rounded-2xl border-2 border-[#E5D1C6]/50 hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-all text-center"
              >
                <User className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <span className="text-xl font-bold text-[#4A443E] uppercase tracking-widest">Vrouw</span>
              </button>
              <button 
                onClick={() => handleSelectGender(Gender.MAN)}
                className="p-8 rounded-2xl border-2 border-[#E5D1C6]/50 hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-all text-center"
              >
                <User className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <span className="text-xl font-bold text-[#4A443E] uppercase tracking-widest">Man</span>
              </button>
            </div>
            <button onClick={prevStep} className="mt-8 text-[#4A443E]/50 flex items-center mx-auto hover:text-[#4A443E]">
              <ChevronLeft className="w-4 h-4 mr-2" /> Terug
            </button>
          </div>
        )}

        {/* Step 3: Calendar / Time */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#4A443E] mb-8 text-center">Kies een datum en tijd</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FAF7F2] p-6 rounded-2xl">
                <div className="flex items-center mb-6 text-[#D4AF37]">
                   <Calendar className="w-5 h-5 mr-3" />
                   <span className="font-bold uppercase tracking-widest text-xs">Beschikbare Data</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-[#4A443E]/40 mb-2">
                  <span>MA</span><span>DI</span><span>WO</span><span>DO</span><span>VR</span><span>ZA</span><span>ZO</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(31)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`p-2 rounded-lg text-sm transition-all ${i+1 === 15 ? 'bg-[#D4AF37] text-white' : 'hover:bg-[#E5D1C6]/30 text-[#4A443E]'}`}
                      onClick={() => {}}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center mb-4 text-[#D4AF37]">
                   <Clock className="w-5 h-5 mr-3" />
                   <span className="font-bold uppercase tracking-widest text-xs">Kies je uur</span>
                </div>
                {['09:00', '10:30', '13:00', '14:30', '16:00'].map((time) => (
                  <button 
                    key={time}
                    onClick={() => handleSelectSlot('15 Mei', time)}
                    className="w-full py-4 border-2 border-[#E5D1C6]/50 rounded-xl hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-all font-semibold text-[#4A443E]"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {/* Conditional back button logic to skip step 2 if category is Teeth Whitening */}
            <button 
              onClick={() => booking.category === TreatmentCategory.TEETH_WHITENING ? setStep(1) : prevStep()} 
              className="mt-8 text-[#4A443E]/50 flex items-center mx-auto hover:text-[#4A443E]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Terug
            </button>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="animate-fade-in max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[#4A443E] mb-8 text-center">Jouw gegevens</h2>
            <div className="space-y-6 mb-10">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#4A443E]/60 mb-2">Naam</label>
                <input 
                  type="text" required 
                  className="w-full px-6 py-4 bg-[#FAF7F2] border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  placeholder="Bijv. Jan Janssen"
                  onChange={(e) => setBooking({...booking, clientInfo: {...booking.clientInfo, name: e.target.value}})}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#4A443E]/60 mb-2">E-mailadres</label>
                <input 
                  type="email" required 
                  className="w-full px-6 py-4 bg-[#FAF7F2] border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  placeholder="jouw@email.be"
                  onChange={(e) => setBooking({...booking, clientInfo: {...booking.clientInfo, email: e.target.value}})}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-[#4A443E]/60 mb-2">Telefoonnummer</label>
                <input 
                  type="tel" required 
                  className="w-full px-6 py-4 bg-[#FAF7F2] border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  placeholder="04xx xx xx xx"
                  onChange={(e) => setBooking({...booking, clientInfo: {...booking.clientInfo, phone: e.target.value}})}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <button 
                type="submit"
                className="w-full py-5 bg-[#D4AF37] text-white font-bold rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#D4AF37]/20 transition-all hover:scale-[1.02]"
              >
                Bevestig Afspraak
              </button>
              <button type="button" onClick={prevStep} className="text-[#4A443E]/50 flex items-center mx-auto hover:text-[#4A443E]">
                <ChevronLeft className="w-4 h-4 mr-2" /> Terug
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="animate-fade-in text-center py-10">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl serif-font text-[#4A443E] mb-4">Je afspraak is geboekt!</h2>
            <p className="text-lg text-[#4A443E]/60 mb-10 max-w-sm mx-auto">
              Bedankt {booking.clientInfo.name}. We hebben een bevestigingsmail gestuurd naar <strong>{booking.clientInfo.email}</strong>.
            </p>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl text-left max-w-sm mx-auto mb-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">Details:</h4>
              <p className="text-[#4A443E] font-medium mb-1">{booking.category}</p>
              <p className="text-[#4A443E]/60 text-sm mb-4">{booking.gender}</p>
              <div className="flex items-center text-sm font-bold text-[#4A443E]">
                 <Calendar className="w-4 h-4 mr-2" /> {booking.date} om {booking.time}
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '#/'}
              className="px-10 py-4 border-2 border-[#4A443E] text-[#4A443E] font-bold rounded-full uppercase tracking-widest hover:bg-[#4A443E] hover:text-white transition-all"
            >
              Terug naar Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
