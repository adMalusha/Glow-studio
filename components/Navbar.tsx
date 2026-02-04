import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/over-ons' },
    { name: 'Behandelingen', path: '/behandelingen' },
    { name: 'Werkwijze', path: '/werkwijze' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-[#FDF7F5]/90 backdrop-blur-md border-b border-[#F4D3D3]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-[#C98B73] transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold tracking-widest text-[#5E503F] uppercase">Glow Studio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#C98B73] ${
                  isActive(link.path) ? 'text-[#C98B73]' : 'text-[#5E503F]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#F4D3D3] text-[#5E503F] text-sm font-bold rounded-full hover:bg-[#C98B73] hover:text-white transition-all duration-300"
            >
              Afspraak maken
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#5E503F] p-2 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-[#FDF7F5] border-b border-[#F4D3D3]/30 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-8 space-y-4 flex flex-col items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold tracking-wide w-full py-2 ${
                isActive(link.path) ? 'text-[#C98B73]' : 'text-[#5E503F]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 px-6 py-3 bg-[#F4D3D3] text-[#5E503F] font-bold rounded-full"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;