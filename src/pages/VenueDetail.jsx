import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';
import Magnetic from '../components/ui/Magnetic';
import { venues } from '../data/venues';

const VenueDetail = () => {
  const { id } = useParams();
  const venue = venues.find(v => v.id === id);
  const premiumEase = [0.22, 1, 0.36, 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!venue) return <div className="pt-40 text-center font-serif text-4xl">Venue not found</div>;

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="mb-16">
          <Magnetic>
            <Link to="/venues" className="text-sm tracking-[0.2em] uppercase hover:italic transition-all text-[var(--color-bespoke-text-muted)] p-4 -m-4 block">
              &larr; Back to Venues
            </Link>
          </Magnetic>
        </div>

        <div className="mb-12">
          <AnimatedText text={venue.name} className="font-serif text-5xl md:text-8xl leading-[0.9]" />
        </div>

        <motion.div 
          initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.5, delay: 0.2, ease: premiumEase }}
          className="aspect-[21/9] overflow-hidden mb-24"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: premiumEase }}
            src={venue.heroImage} 
            alt={venue.name} 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, ease: premiumEase }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text-muted)] mb-4">Capacity</h3>
              <ul className="space-y-2 text-lg">
                <li>Seated: {venue.capacity.seated}</li>
                <li>Standing: {venue.capacity.standing}</li>
                <li>Theater: {venue.capacity.theater}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text-muted)] mb-4">Specifications</h3>
              <ul className="space-y-2 text-lg">
                <li>{venue.specs.sqft} sq ft</li>
                <li>{venue.specs.ceilingHeight} Ceilings</li>
                <li>{venue.specs.dancefloor}</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="lg:col-span-8"
          >
            <p className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              {venue.tagline}
            </p>
            <p className="text-lg text-[var(--color-bespoke-text-muted)] leading-relaxed mb-12 max-w-2xl">
              {venue.description}
            </p>
            <Magnetic>
              <Link to="/contact" className="inline-block border border-[var(--color-bespoke-text)] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-bespoke-text)] hover:text-[var(--color-bespoke-bg)] transition-all">
                Inquire About This Space
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text-muted)] mb-12">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {venue.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                viewport={{ once: false, margin: "-10px" }}
                transition={{ duration: 1.2, ease: premiumEase }}
                className={`aspect-[4/3] overflow-hidden ${i === venue.gallery.length - 1 && i % 2 === 0 ? 'md:col-span-2 aspect-[21/9]' : ''}`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default VenueDetail;
