import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import AnimatedText from '../components/ui/AnimatedText';
import { venues } from '../data/venues';

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    venue: '',
    date: '',
    guests: '',
    eventType: '',
    firstName: '',
    lastName: '',
    email: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your inquiry for ${formData.venue} has been sent to our concierges.`);
    setStep(1);
    setFormData({ venue: '', date: '', guests: '', eventType: '', firstName: '', lastName: '', email: '', notes: '' });
  };

  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <div className="mb-16 text-center">
          <AnimatedText
            text="Begin your"
            className="font-serif text-5xl md:text-7xl mb-4"
          />
          <AnimatedText
            text="Inquiry."
            delay={0.2}
            className="font-serif text-5xl md:text-7xl italic text-[var(--color-bespoke-accent)]"
          />
        </div>

        <div className="mb-12 flex justify-center gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1 w-16 transition-all duration-500 ${step >= i ? 'bg-[var(--color-bespoke-text)]' : 'bg-[var(--color-bespoke-border)]'}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl mb-8">1. The Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Preferred Venue</label>
                    <select
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                      required
                    >
                      <option value="">Select a Venue</option>
                      {venues.map(v => <option key={v.id} value={v.name}>{v.name}</option>)}
                      <option value="Undecided">Undecided</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Estimated Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Guest Count</label>
                      <input
                        type="number"
                        name="guests"
                        placeholder="e.g. 150"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-8">
                  <button type="button" onClick={nextStep} disabled={!formData.venue || !formData.date || !formData.guests} className="border border-[var(--color-bespoke-text)] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-bespoke-text)] hover:text-[var(--color-bespoke-bg)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl mb-8">2. The Vision</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Gala">Corporate Gala</option>
                      <option value="Private Dining">Private Dining</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Additional Notes & Vision</label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Tell us about your dream event..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={prevStep} className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text-muted)] hover:italic transition-all cursor-pointer">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} disabled={!formData.eventType} className="border border-[var(--color-bespoke-text)] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-bespoke-text)] hover:text-[var(--color-bespoke-bg)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Final Step
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl mb-8">3. Contact Information</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--color-bespoke-text-muted)] mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[var(--color-bespoke-border)] pb-3 text-lg focus:outline-none focus:border-[var(--color-bespoke-text)] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={prevStep} className="text-sm tracking-[0.2em] uppercase text-[var(--color-bespoke-text-muted)] hover:italic transition-all cursor-pointer">
                    Back
                  </button>
                  <button type="submit" disabled={!formData.firstName || !formData.lastName || !formData.email} className="bg-[var(--color-bespoke-text)] text-[var(--color-bespoke-bg)] border border-[var(--color-bespoke-text)] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-[var(--color-bespoke-text)] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Submit Inquiry
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </form>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
