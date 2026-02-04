import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyBookingButton from './components/StickyBookingButton';
import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import HouseRulesPage from './pages/HouseRulesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-ons" element={<AboutPage />} />
            <Route path="/behandelingen" element={<TreatmentsPage />} />
            <Route path="/werkwijze" element={<ProcessPage />} />
            <Route path="/huisregels" element={<HouseRulesPage />} />
            <Route path="/afspraak" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <StickyBookingButton />
      </div>
    </Router>
  );
};

export default App;