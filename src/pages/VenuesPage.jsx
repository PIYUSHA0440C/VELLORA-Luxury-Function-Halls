import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';
import Magnetic from '../components/ui/Magnetic';
import { venues } from '../data/venues';

const VenuesPage = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <PageTransition>
      <div className="pt-[15vh] pb-[10vh] px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto">

        <div className="mb-16 md:mb-24">
          <AnimatedText text="Our" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" />
          <AnimatedText delay={0.2} text="Venues" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl italic text-[var(--color-bespoke-accent)]" />
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {venues.map((venue, i) => (
            <div key={venue.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group">

              <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Link to={`/venues/${venue.id}`} className="block overflow-hidden aspect-[16/10] max-h-[60vh] group">
                  <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-10px" }}
                    transition={{ duration: 1, ease: premiumEase }}
                    className="w-full h-full"
                  >
                    <motion.img
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: premiumEase }}
                      src={venue.heroImage}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                    />
                  </motion.div>
                </Link>
              </div>

              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-10px" }}
                  transition={{ duration: 1, ease: premiumEase }}
                >
                  <h2 className="font-serif text-3xl md:text-4xl 2xl:text-5xl mb-4">{venue.name}</h2>
                  <p className="text-[var(--color-bespoke-text-muted)] text-base md:text-lg mb-8 italic">{venue.tagline}</p>
                  <div className="flex gap-8 mb-10 text-xs md:text-sm tracking-wider uppercase text-[var(--color-bespoke-text-muted)]">
                    <div>
                      <span className="block text-xs mb-1">Capacity</span>
                      <span className="text-[var(--color-bespoke-text)]">{venue.capacity.standing} Guests</span>
                    </div>
                    <div>
                      <span className="block text-xs mb-1">Size</span>
                      <span className="text-[var(--color-bespoke-text)]">{venue.specs.sqft} sq ft</span>
                    </div>
                  </div>

                  <Magnetic>
                    <Link to={`/venues/${venue.id}`} className="inline-block border-b border-[var(--color-bespoke-text)] pb-1 text-sm tracking-[0.2em] uppercase hover:italic transition-all p-4 -m-4">
                      View Details
                    </Link>
                  </Magnetic>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default VenuesPage;
