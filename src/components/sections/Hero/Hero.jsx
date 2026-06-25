import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../../ui/RevealText';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen overflow-hidden bg-brand-dark flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
          alt="Aura Events Venue" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
        <p className="text-brand-accent tracking-[0.3em] uppercase text-xs md:text-sm mb-6 overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="block"
          >
            Est. 2012 — The Metropolis
          </motion.span>
        </p>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-editorial leading-[0.9] text-brand-light font-medium tracking-tighter mb-8">
          <RevealText text="Elevated" delay={0.4} />
          <RevealText text="Celebrations." delay={0.6} className="italic text-brand-accent pr-4" />
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4 border-l border-brand-accent/50 pl-6 max-w-sm"
        >
          <p className="text-brand-light/70 text-sm leading-relaxed font-light">
            Architectural brilliance meets culinary perfection. We curate spatial experiences for those who demand the extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
