import React from 'react';

const VenueCard = ({ venue }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 md:p-16 snap-center">
      <div className="relative w-full h-[70vh] group overflow-hidden">
        <img 
          src={venue.image} 
          alt={venue.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8 md:p-12">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            <h3 className="text-3xl md:text-5xl font-editorial text-brand-light mb-4">{venue.name}</h3>
            <p className="text-brand-light/70 max-w-lg mb-6">{venue.description}</p>
            <div className="flex gap-6 text-sm tracking-wider uppercase text-brand-accent">
              <span>{venue.capacity} Guests</span>
              <span>{venue.area}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
