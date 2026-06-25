import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 mix-blend-difference text-white p-6 md:p-10 flex justify-between items-center pointer-events-none backdrop-blur-md bg-white/5 md:backdrop-blur-none md:bg-transparent"
      >
        <Magnetic>
          <Link to="/" className="pointer-events-auto block p-4 -m-4 group">
            <span className="font-serif text-2xl md:text-3xl tracking-wide block">VELLORA</span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase opacity-70 transition-opacity block mt-1">Luxury Function Halls</span>
          </Link>
        </Magnetic>
        
        <Magnetic>
          <button 
            onClick={() => setIsOpen(true)}
            className="text-sm tracking-[0.2em] uppercase font-sans pointer-events-auto hover:italic transition-all duration-300 cursor-pointer block p-4 -m-4"
          >
            Menu
          </button>
        </Magnetic>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[var(--color-bespoke-bg)] text-[var(--color-bespoke-text)] flex flex-col justify-center px-6 md:px-24"
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-[0.2em] uppercase font-sans hover:italic transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col gap-4 md:gap-8">
              {['Home', 'Venues', 'About', 'Contact'].map((item, i) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <div key={item} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <Link 
                        to={path} 
                        className="font-serif text-5xl md:text-8xl hover:text-[var(--color-bespoke-accent)] transition-colors duration-500"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-24 text-sm tracking-widest uppercase text-[var(--color-bespoke-text-muted)]"
            >
              <div>
                <p>555 Heritage Avenue</p>
                <p>Civil Lines, Vidisha 464001</p>
              </div>
              <div>
                <a href="mailto:hello@velloravenues.in" className="block hover:text-[var(--color-bespoke-text)]">hello@velloravenues.in</a>
                <a href="tel:+919876543210" className="block hover:text-[var(--color-bespoke-text)]">+91 98765 43210</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
