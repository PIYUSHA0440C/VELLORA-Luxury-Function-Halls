import React, { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const HoverImageLinks = ({ items }) => {
  return (
    <div className="flex flex-col py-12 border-t border-[var(--color-bespoke-text)]/20">
      {items.map((item, i) => (
        <LinkItem key={i} item={item} />
      ))}
    </div>
  );
};

const LinkItem = ({ item }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseEnter = (e) => {
    setHovered(true);
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    // Instantly snap to the cursor entry point, bypassing the spring animation
    if (x.jump) x.jump(offsetX);
    else x.set(offsetX);
    
    if (y.jump) y.jump(offsetY);
    else y.set(offsetY);
  };

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <Link 
      to={item.href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col md:flex-row justify-between md:items-center py-10 md:py-16 border-b border-[var(--color-bespoke-text)]/20 group cursor-pointer"
    >
      {/* Mobile Static Image Reveal (Visible only on touch devices) */}
      <div className="md:hidden w-full aspect-[21/9] mb-6 overflow-hidden z-10 pointer-events-none">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col z-20 pointer-events-none relative mix-blend-difference text-white w-full md:w-auto">
        <h3 className="font-serif text-4xl md:text-5xl lg:text-7xl group-hover:italic md:group-hover:translate-x-8 transition-transform duration-500 ease-out">
          {item.title}
        </h3>
        <span className="text-xs md:text-sm tracking-widest uppercase opacity-70 mt-2 md:group-hover:translate-x-8 transition-transform duration-500 ease-out block">
          {item.subtitle}
        </span>
      </div>

      <div className="hidden md:block z-20 text-xl pointer-events-none transition-all duration-500 group-hover:-rotate-45 group-hover:opacity-0 mix-blend-difference text-white">
        &rarr;
      </div>

      {/* Floating Image Reveal (Visible only on Desktop) */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-[20rem] md:w-[30rem] aspect-[4/3] overflow-hidden pointer-events-none z-10"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ scale: 0, opacity: 0, rotate: -5 }}
        animate={{ 
          scale: hovered ? 1 : 0, 
          opacity: hovered ? 1 : 0,
          rotate: hovered ? 0 : -5
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-1000"
        />
      </motion.div>
      
      {/* Dim Background Overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-black/5 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
      />
    </Link>
  );
};

export default HoverImageLinks;
