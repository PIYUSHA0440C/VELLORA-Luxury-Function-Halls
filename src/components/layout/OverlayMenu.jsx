import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const OverlayMenu = ({ isOpen, onClose }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "The Experience", href: "#about" },
    { name: "Curated Spaces", href: "#venues" },
    { name: "Bespoke Services", href: "#services" },
    { name: "Reserve", href: "#book" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at top right)" }}
          animate={{ clipPath: "circle(150% at top right)" }}
          exit={{ clipPath: "circle(0% at top right)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-brand-light text-brand-dark z-[80] flex flex-col justify-center items-center"
        >
          <div className={"absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')]"} ></div>
          
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 md:top-12 md:right-16 text-brand-dark hover:text-brand-accent transition-colors"
          >
            <X className="w-10 h-10" strokeWidth={1} />
          </button>

          <nav className="flex flex-col items-center gap-6">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-editorial tracking-tight text-brand-dark hover:text-outline transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.a>
            ))}
          </nav>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-10 md:bottom-12 md:left-16 flex gap-8 text-sm uppercase tracking-widest font-sans"
          >
            <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Pinterest</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
