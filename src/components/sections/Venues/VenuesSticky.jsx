import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VenueCard from './VenueCard';

const venuesData = [
  {
    name: 'The Grand Atrium',
    description: 'Our flagship space featuring crystal chandeliers, soaring ceilings, and a marble dance floor.',
    capacity: '500-1000',
    area: '15,000 sq ft',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  },
  {
    name: 'The Sapphire Lounge',
    description: 'An intimate, elegantly styled setting with modern art-deco touches.',
    capacity: '100-250',
    area: '4,500 sq ft',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop'
  },
  {
    name: 'The Garden Pavilion',
    description: 'A breathtaking glass-enclosed conservatory offering panoramic views of our manicured gardens.',
    capacity: '200-400',
    area: '8,000 sq ft',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop'
  }
];

const VenuesSticky = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="venues" ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Pinned Title Layer */}
        <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-20 pointer-events-none mix-blend-difference">
          <h2 className="text-6xl md:text-8xl font-editorial text-brand-light">
            Curated <br/>
            <span className="italic text-brand-accent">Spaces.</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Layer */}
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          {venuesData.map((venue, idx) => (
            <div key={idx} className="w-screen h-full flex items-center justify-end">
              <div className="w-full md:w-2/3 h-full">
                <VenueCard venue={venue} />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default VenuesSticky;
