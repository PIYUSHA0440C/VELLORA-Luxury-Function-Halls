import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const RevealText = ({ text, className, delay = 0, once = true }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 100,
      rotateZ: 5,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em] pb-2">
          <motion.span variants={child} className="inline-block transform origin-bottom-left">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default RevealText;
