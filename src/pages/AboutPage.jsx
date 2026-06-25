import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';

const AboutPage = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <PageTransition>
      <div className="pt-[15vh] pb-[10vh] px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto">
        <div className="mb-12 md:mb-16">
          <AnimatedText text="The Art of" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight" />
          <AnimatedText delay={0.2} text="Hospitality." className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight italic text-[var(--color-bespoke-accent)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mb-20 2xl:mb-32">
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1.5, ease: premiumEase }}
            className="lg:col-span-5 aspect-[3/4] max-h-[55vh] max-w-md mx-auto lg:mx-0 w-full overflow-hidden group"
          >
            <motion.img
              initial={{ scale: 1.2, filter: 'blur(10px)' }}
              whileInView={{ scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: premiumEase }}
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" alt="Culinary Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0"
          >
            <h2 className="font-serif text-3xl md:text-4xl 2xl:text-5xl mb-6">Culinary Mastery</h2>
            <p className="text-base md:text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed mb-6">
              At Vellora Venues, we believe the menu is just as important as the architecture. Our Michelin-trained Executive Chef, Aarav Sharma, leads a brigade dedicated to gastronomic excellence.
            </p>
            <p className="text-base md:text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed">
              From delicate hors d'oeuvres to elaborate multi-course plated dinners, every element is curated, locally sourced, and flawlessly executed to match the magnitude of your event.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="order-2 lg:order-1 lg:col-span-6 mt-8 lg:mt-0 pr-0 lg:pr-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl 2xl:text-5xl mb-6">Dedicated Coordination</h2>
            <p className="text-base md:text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed mb-6">
              An unforgettable event requires invisible effort. Our dedicated event coordinators serve as your personal concierges, managing logistics, vendor timelines, and floor plans.
            </p>
            <p className="text-base md:text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed">
              We handle the complexities so that when the day arrives, you are a guest at your own event.
            </p>
          </motion.div>
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1.5, ease: premiumEase }}
            className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 aspect-square max-h-[50vh] max-w-md mx-auto lg:mx-0 w-full overflow-hidden group"
          >
            <motion.img
              initial={{ scale: 1.2, filter: 'blur(10px)' }}
              whileInView={{ scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: premiumEase }}
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Event Details" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
