import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';
import Magnetic from '../components/ui/Magnetic';
import HoverImageLinks from '../components/ui/HoverImageLinks';
import { venues } from '../data/venues';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const venueListItems = venues.map(v => ({
    title: v.name,
    subtitle: `${v.capacity.standing} Guests • ${v.specs.sqft} sqft`,
    image: v.heroImage,
    href: `/venues/${v.id}`
  }));

  const tabs = [
    {
      title: "The Culinary Arts",
      content: "Led by Executive Chef Aarav Sharma, our Michelin-trained brigade crafts bespoke menus that elevate dining to an art form. From delicate hors d'oeuvres to elaborate multi-course plated dinners, every element is curated and flawlessly executed.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Event Coordination",
      content: "An unforgettable event requires invisible effort. Our dedicated event coordinators serve as your personal concierges, managing logistics, vendor timelines, and floor plans so you can be a guest at your own event.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Atmosphere & A/V",
      content: "State-of-the-art acoustic treatment, dynamic ambient up-lighting, and professional-grade projection mapping ensure that the mood of your event is perfectly tailored to your exact vision.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    "The most breathtaking gala of the season.",
    "Flawless execution from start to finish.",
    "Architecturally stunning. The perfect canvas.",
    "Our wedding was an absolute masterpiece.",
    "The culinary experience was Michelin-level."
  ];

  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <PageTransition>
      <div className="pb-24">

        {/* SECTION 1: HERO */}
        <section className="min-h-[90vh] flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto pt-40 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 z-10">
              <AnimatedText
                text="Luxury"
                className="font-serif text-6xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-tight mb-4"
              />
              <AnimatedText
                text="Function Halls."
                delay={0.2}
                className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight italic text-[var(--color-bespoke-accent)] mb-12"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: premiumEase }}
                className="max-w-md ml-0 lg:ml-24"
              >
                <h2 className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text)] mb-4 font-bold">Vidisha's Premier Event Spaces</h2>
                <p className="text-lg md:text-xl text-[var(--color-bespoke-text-muted)] mb-8 leading-relaxed">
                  Whether you are hosting a grand wedding, a high-profile corporate gala, or an intimate private gathering, our luxury function halls provide the perfect canvas for your milestone events.
                </p>
                <Magnetic>
                  <Link to="/venues" className="inline-block border-b border-[var(--color-bespoke-text)] pb-1 text-sm tracking-[0.2em] uppercase hover:italic transition-all p-4 -m-4">
                    Explore Venues
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            <motion.div
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              transition={{ duration: 1.5, delay: 0.5, ease: premiumEase }}
              className="lg:col-span-4 aspect-[3/4] overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                style={{ y: yHero }}
                transition={{ duration: 2, delay: 0.5, ease: premiumEase }}
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                alt="Grand Pavilion Event Hall"
                className="w-full h-[120%] object-cover absolute top-[-10%]"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: VENUES SHOWCASE GRID */}
        <section className="py-32 bg-[var(--color-bespoke-surface)]">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <AnimatedText text="The Collection" className="font-serif text-5xl md:text-7xl" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Magnetic>
                  <Link to="/venues" className="text-sm tracking-[0.2em] uppercase hover:italic transition-all mt-6 md:mt-0 pb-1 border-b border-[var(--color-bespoke-text)] p-4 -m-4 inline-block">
                    View All Venues
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            <div className="mt-24">
              <HoverImageLinks items={venueListItems} />
            </div>
          </div>
        </section>

        {/* SECTION 2.5: IMPECCABLE TASTE */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
              whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ duration: 1.5, ease: premiumEase }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Fine Dining" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ duration: 1, delay: 0.3, ease: premiumEase }}
            >
              <AnimatedText text="Impeccable" className="font-serif text-5xl md:text-7xl mb-2" />
              <AnimatedText text="Taste." delay={0.2} className="font-serif text-5xl md:text-7xl mb-12 italic text-[var(--color-bespoke-accent)]" />
              <p className="text-lg md:text-xl text-[var(--color-bespoke-text-muted)] leading-relaxed mb-8">
                Our Michelin-trained culinary team crafts bespoke menus that elevate dining to an art form. Every dish is a masterpiece, designed to complement the elegance of your event.
              </p>
              <Magnetic>
                <Link to="/about" className="inline-block border-b border-[var(--color-bespoke-text)] pb-1 text-sm tracking-[0.2em] uppercase hover:italic transition-all p-4 -m-4">
                  Discover Our Culinary Arts
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: THE EXPERIENCE (INTERACTIVE TABS) */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <AnimatedText text="The Experience" className="font-serif text-5xl md:text-7xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8 border-l border-[var(--color-bespoke-border)] pl-8">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left transition-all duration-500 cursor-pointer group ${activeTab === i ? 'opacity-100 pl-4 border-l border-[var(--color-bespoke-text)] -ml-[33px]' : 'opacity-40 hover:opacity-100'}`}
                >
                  <h3 className={`font-serif text-3xl mb-4 transition-transform duration-500 ease-out origin-left ${activeTab !== i ? 'group-hover:translate-x-4 group-hover:-skew-x-6' : ''}`}>
                    {tab.title}
                  </h3>
                  <AnimatePresence>
                    {activeTab === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[var(--color-bespoke-text-muted)] leading-relaxed"
                      >
                        {tab.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 aspect-[4/3] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SECTION 4: TESTIMONIALS MARQUEE */}
        <section className="py-32 bg-[var(--color-bespoke-text)] text-[var(--color-bespoke-bg)] overflow-hidden">
          <div className="flex space-x-16 whitespace-nowrap px-6 animate-[scroll_40s_linear_infinite]">
            {[...testimonials, ...testimonials, ...testimonials].map((text, i) => (
              <span key={i} className="font-serif text-4xl md:text-6xl italic">
                "{text}" <span className="mx-8 text-[var(--color-bespoke-accent)]">&bull;</span>
              </span>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </section>

        {/* SECTION 5: GRAND CTA */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center">
          <AnimatedText text="Your Vision," className="font-serif text-5xl md:text-8xl mb-2 justify-center" />
          <AnimatedText text="Realized." delay={0.2} className="font-serif text-5xl md:text-8xl mb-16 justify-center" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-10px" }}
            transition={{ duration: 1, delay: 0.6, ease: premiumEase }}
          >
            <Magnetic>
              <Link to="/contact" className="inline-block border border-[var(--color-bespoke-text)] px-12 py-5 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-bespoke-text)] hover:text-[var(--color-bespoke-bg)] transition-all duration-500">
                Begin an Inquiry
              </Link>
            </Magnetic>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
};

export default HomePage;
