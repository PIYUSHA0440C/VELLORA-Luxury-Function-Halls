import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <footer className="bg-[var(--color-bespoke-text)] text-[var(--color-bespoke-bg)] py-[8vh] lg:py-[10vh] px-6 md:px-12 mt-[10vh] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-16">

        <div className="max-w-md">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, ease: premiumEase }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8"
          >
            Ready to curate your event?
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
          >
            <Link to="/contact" className="inline-block border-b border-[var(--color-bespoke-bg)] pb-1 text-sm tracking-[0.2em] uppercase hover:italic transition-all">
              Begin an Inquiry
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-10px" }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="flex gap-16 md:gap-32 text-sm tracking-wider uppercase text-[var(--color-bespoke-bg)]/60"
        >
          <ul className="space-y-4">
            <li><Link to="/venues" className="hover:text-[var(--color-bespoke-bg)] transition-colors">Venues</Link></li>
            <li><Link to="/about" className="hover:text-[var(--color-bespoke-bg)] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-bespoke-bg)] transition-colors">Contact</Link></li>
          </ul>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-[var(--color-bespoke-bg)] transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-[var(--color-bespoke-bg)] transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-[var(--color-bespoke-bg)] transition-colors">Vogue</a></li>
          </ul>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-10px" }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mt-[8vh] lg:mt-[10vh] pt-6 lg:pt-8 border-t border-[var(--color-bespoke-bg)]/20 text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-bespoke-bg)]/40 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
      >
        <p className="text-center md:text-left">Vellora Venues &copy; {new Date().getFullYear()}</p>
        <p className="text-center md:text-right">Site by - Piyush Shrivastav</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
