import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import VenuesPage from './pages/VenuesPage';
import VenueDetail from './pages/VenueDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SmoothScroll from './components/layout/SmoothScroll';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/venues/:id" element={<VenueDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[var(--color-bespoke-bg)] text-[var(--color-bespoke-text)] relative">
        <Navbar />
        <SmoothScroll>
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
