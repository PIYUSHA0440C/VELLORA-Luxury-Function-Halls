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
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const heroGallery = [
    { id: 'hero-1', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop', alt: 'Grand Pavilion Event Hall' },
    { id: 'hero-2', src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop', alt: 'Conservatory' },
    { id: 'hero-3', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop', alt: 'Lounge' },
    { id: 'hero-4', src: 'https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop', alt: 'Ballroom' },
  ];

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
      <div>
        {/* SECTION 1: HERO */}
        <section className="min-h-[100svh] 2xl:min-h-[800px] flex flex-col justify-center pt-[15vh] lg:pt-[12vh] 2xl:pt-[6vh] pb-[5vh] px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center h-full">
            <div className="lg:col-span-6 z-20 pb-4 relative">
              <AnimatedText
                text="Luxury"
                className="font-serif text-6xl md:text-7xl lg:text-8xl 2xl:text-[7.5rem] leading-[0.9] tracking-tight mb-2"
              />
              <AnimatedText
                text="Function Halls."
                delay={0.2}
                className="font-serif text-5xl md:text-6xl lg:text-7xl 2xl:text-[6.5rem] leading-[0.9] tracking-tight italic text-[var(--color-bespoke-accent)] mb-6 md:mb-8"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: premiumEase }}
                className="max-w-md ml-0 lg:ml-12"
              >
                <h2 className="text-xs 2xl:text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text)] mb-4 2xl:mb-6 font-bold">Vidisha's Premier Event Spaces</h2>
                <p className="text-base md:text-lg 2xl:text-xl text-[var(--color-bespoke-text-muted)] mb-8 2xl:mb-12 leading-relaxed">
                  Whether you are hosting a grand wedding, a high-profile corporate gala, or an intimate private gathering, our luxury function halls provide the perfect canvas for your milestone events.
                </p>
                <Magnetic>
                  <Link to="/venues" className="inline-block border-b border-[var(--color-bespoke-text)] pb-1 text-sm 2xl:text-xl tracking-[0.2em] uppercase hover:italic transition-all p-4 -m-4">
                    Explore Venues
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            {/* MASONRY HERO GROUP (Responsive) */}
            <div className="grid lg:col-span-6 lg:col-start-7 h-[40vh] md:h-[50vh] 2xl:h-[600px] w-full grid-cols-12 gap-2 md:gap-4 lg:gap-6 relative z-10 mt-8 lg:mt-0">

              {/* 3 Small Images (Bridging the gap on the left) */}
              <div className="col-span-4 flex flex-col gap-2 md:gap-4 lg:gap-6 h-full">
                <motion.div
                  initial={{ clipPath: 'circle(0% at 0% 0%)' }}
                  animate={{ clipPath: 'circle(150% at 0% 0%)' }}
                  transition={{ duration: 1.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="flex-1 rounded-sm overflow-hidden shadow-xl group relative"
                >
                  <motion.img
                    initial={{ scale: 2, rotate: 15, filter: 'blur(20px) brightness(1.5)' }}
                    animate={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                    transition={{ duration: 2.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
                    alt="Conservatory"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-[1.5s] ease-out"
                  />
                </motion.div>

                <motion.div
                  initial={{ clipPath: 'circle(0% at 100% 50%)' }}
                  animate={{ clipPath: 'circle(150% at 100% 50%)' }}
                  transition={{ duration: 1.8, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="flex-1 rounded-sm overflow-hidden shadow-xl group relative"
                >
                  <motion.img
                    initial={{ scale: 2, rotate: -15, filter: 'blur(20px) brightness(1.5)' }}
                    animate={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                    transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
                    alt="Lounge"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[2deg] transition-all duration-[1.5s] ease-out"
                  />
                </motion.div>

                <motion.div
                  initial={{ clipPath: 'circle(0% at 0% 100%)' }}
                  animate={{ clipPath: 'circle(150% at 0% 100%)' }}
                  transition={{ duration: 1.8, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
                  className="flex-1 rounded-sm overflow-hidden shadow-xl group relative"
                >
                  <motion.img
                    initial={{ scale: 2, rotate: 10, filter: 'blur(20px) brightness(1.5)' }}
                    animate={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                    transition={{ duration: 2.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop"
                    alt="Ballroom"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-[1.5s] ease-out"
                  />
                </motion.div>
              </div>

              {/* Main Anchor Image (Right-aligned) */}
              <motion.div
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                transition={{ duration: 2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="col-span-8 h-full rounded-sm overflow-hidden shadow-2xl relative group"
              >
                <motion.img
                  initial={{ scale: 2.5, rotate: -5, filter: 'blur(25px) brightness(2)' }}
                  animate={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                  transition={{ duration: 2.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                  alt="Grand Pavilion Event Hall"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 group-hover:rotate-[1deg] transition-all duration-[2s] ease-out"
                />
              </motion.div>
            </div>


          </div>
        </section>

        {/* SECTION 2: VENUES SHOWCASE GRID */}
        <section className="min-h-[100svh] 2xl:min-h-[800px] flex flex-col justify-center py-[10vh] bg-[var(--color-bespoke-surface)]">
          <div className="px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16">
              <AnimatedText text="The Collection" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" />
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

            <div className="mt-12 lg:mt-20">
              <HoverImageLinks items={venueListItems} />
            </div>
          </div>
        </section>

        {/* SECTION 2.5: IMPECCABLE TASTE */}
        <section className="min-h-[100svh] 2xl:min-h-[800px] flex flex-col justify-center py-[10vh] px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            <motion.div
              initial={{ clipPath: 'circle(0% at 50% 100%)' }}
              whileInView={{ clipPath: 'circle(150% at 50% 100%)' }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
              className="lg:col-span-5 aspect-[4/5] max-h-[45vh] lg:max-h-[55vh] max-w-md mx-auto lg:max-w-none w-full overflow-hidden group rounded-sm shadow-2xl"
            >
              <motion.img
                initial={{ scale: 2, rotate: -10, filter: 'blur(20px) brightness(1.5)' }}
                whileInView={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                viewport={{ once: false }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Fine Dining" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[2deg] transition-all duration-[3s] ease-out"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ duration: 1, delay: 0.3, ease: premiumEase }}
              className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center mt-4 lg:mt-0"
            >
              <AnimatedText text="Impeccable" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2" />
              <AnimatedText text="Taste." delay={0.2} className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 md:mb-8 italic text-[var(--color-bespoke-accent)]" />
              <p className="text-base md:text-lg 2xl:text-xl text-[var(--color-bespoke-text-muted)] leading-relaxed mb-8">
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
        <section className="min-h-[100svh] 2xl:min-h-[800px] flex flex-col justify-center py-[10vh] px-6 md:px-12 max-w-7xl 2xl:max-w-[2000px] mx-auto w-full">
          <div className="mb-8 lg:mb-12">
            <AnimatedText text="The Experience" className="font-serif text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6 border-l border-[var(--color-bespoke-border)] pl-6 lg:pl-10">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left transition-all duration-500 cursor-pointer group ${activeTab === i ? 'opacity-100 pl-4 border-l border-[var(--color-bespoke-text)] -ml-[25px] lg:-ml-[41px]' : 'opacity-40 hover:opacity-100'}`}
                >
                  <h3 className={`font-serif text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mb-3 transition-transform duration-500 ease-out origin-left ${activeTab !== i ? 'group-hover:translate-x-4 group-hover:-skew-x-6' : ''}`}>
                    {tab.title}
                  </h3>
                  <AnimatePresence>
                    {activeTab === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, filter: 'blur(8px)', y: -10 }}
                        animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)', y: 0 }}
                        exit={{ opacity: 0, height: 0, filter: 'blur(8px)', y: -10 }}
                        transition={{ duration: 0.5, ease: premiumEase }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base text-[var(--color-bespoke-text-muted)] leading-relaxed 2xl:text-xl pt-3">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Outer wrapper tracks intersection observer WITHOUT clip-path to ensure it fires */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              className="lg:col-span-6 lg:col-start-7 aspect-[4/3] min-h-[300px] max-h-[40vh] lg:max-h-[55vh] w-full max-w-lg mx-auto lg:max-w-none relative mt-8 lg:mt-0 group rounded-sm shadow-2xl overflow-hidden"
            >
              <motion.div
                variants={{
                  hidden: { clipPath: 'circle(0% at 50% 50%)', scale: 1.2, filter: 'blur(20px)', rotate: -5 },
                  visible: { clipPath: 'circle(150% at 50% 50%)', scale: 1, filter: 'blur(0px)', rotate: 0, transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] } }
                }}
                className="w-full h-full absolute inset-0"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ clipPath: 'circle(0% at 50% 50%)', zIndex: 10 }}
                    animate={{ clipPath: 'circle(150% at 50% 50%)', zIndex: 10 }}
                    exit={{ clipPath: 'circle(0% at 50% 50%)', zIndex: 0 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full h-full absolute inset-0 overflow-hidden rounded-sm"
                  >
                    <motion.img
                      initial={{ scale: 1.5, rotate: 5, filter: 'blur(10px) brightness(1.2)' }}
                      animate={{ scale: 1, rotate: 0, filter: 'blur(0px) brightness(1)' }}
                      exit={{ scale: 0.8, rotate: -5, filter: 'blur(10px) brightness(0.5)' }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].title}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-[2s] ease-out"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: TESTIMONIALS MARQUEE */}
        <section className="py-[10vh] bg-[var(--color-bespoke-text)] text-[var(--color-bespoke-bg)] overflow-hidden">
          <div className="flex space-x-16 whitespace-nowrap px-6 animate-[scroll_40s_linear_infinite]">
            {[...testimonials, ...testimonials, ...testimonials].map((text, i) => (
              <span key={i} className="font-serif text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl italic">
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
        <section className="min-h-[60svh] 2xl:min-h-[500px] flex flex-col justify-center py-[10vh] px-6 md:px-12 max-w-5xl 2xl:max-w-[1800px] mx-auto text-center items-center w-full">
          <AnimatedText text="Your Vision," className="font-serif text-5xl md:text-6xl lg:text-7xl 2xl:text-[7rem] mb-2 justify-center" />
          <AnimatedText text="Realized." delay={0.2} className="font-serif text-5xl md:text-6xl lg:text-7xl 2xl:text-[7rem] mb-8 md:mb-12 justify-center italic text-[var(--color-bespoke-accent)]" />

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
