import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotate: 5,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.25em', display: 'inline-block' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
