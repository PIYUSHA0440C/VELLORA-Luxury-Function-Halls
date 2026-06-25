import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';

const AboutPage = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-24">
          <AnimatedText text="The Art of" className="font-serif text-5xl md:text-8xl leading-tight" />
          <AnimatedText delay={0.2} text="Hospitality." className="font-serif text-5xl md:text-8xl leading-tight italic text-[var(--color-bespoke-accent)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start mb-32">
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1.5, ease: premiumEase }}
            className="aspect-[3/4] overflow-hidden"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: premiumEase }}
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" alt="Culinary Team" className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="pt-0 md:pt-32"
          >
            <h2 className="font-serif text-4xl mb-8">Culinary Mastery</h2>
            <p className="text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed mb-6">
              At Vellora Venues, we believe the menu is just as important as the architecture. Our Michelin-trained Executive Chef, Aarav Sharma, leads a brigade dedicated to gastronomic excellence.
            </p>
            <p className="text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed">
              From delicate hors d'oeuvres to elaborate multi-course plated dinners, every element is curated, locally sourced, and flawlessly executed to match the magnitude of your event.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="order-2 md:order-1 pt-0 md:pt-32"
          >
            <h2 className="font-serif text-4xl mb-8">Dedicated Coordination</h2>
            <p className="text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed mb-6">
              An unforgettable event requires invisible effort. Our dedicated event coordinators serve as your personal concierges, managing logistics, vendor timelines, and floor plans.
            </p>
            <p className="text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed">
              We handle the complexities so that when the day arrives, you are a guest at your own event.
            </p>
          </motion.div>
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1.5, ease: premiumEase }}
            className="aspect-square overflow-hidden order-1 md:order-2"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: premiumEase }}
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Event Details" className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
