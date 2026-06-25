import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const PremiumImageHover = ({ src, alt, className }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for tilt and cursor
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  
  // Normalized coordinates (-0.5 to 0.5) for tilt
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Subtle 3D tilt mapping
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  // Absolute coordinates for the floating "VIEW" cursor
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);

    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    const cX = e.clientX - rect.left;
    const cY = e.clientY - rect.top;
    
    if (mouseX.jump) {
      mouseX.jump(xPct);
      mouseY.jump(yPct);
      cursorX.jump(cX);
      cursorY.jump(cY);
    } else {
      mouseX.set(xPct);
      mouseY.set(yPct);
      cursorX.set(cX);
      cursorY.set(cY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset tilt back to flat on leave
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full overflow-hidden [perspective:1000px] ${isHovered ? 'cursor-none md:cursor-none' : ''} ${className || ''}`}
    >
      {/* 3D Tilted Image Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full origin-center"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Custom Cursor */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 z-50 hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-[var(--color-bespoke-bg)] text-[var(--color-bespoke-text)] text-xs tracking-widest uppercase"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.3 }, opacity: { duration: 0.3 } }}
      >
        VIEW
      </motion.div>
    </div>
  );
};

export default PremiumImageHover;
