// src/sections/Funny.jsx
import React from 'react';
import FloatingQuotes from '../components/FloatingQuotes';
import StaticQuoteGrid from '../components/StaticQuoteGrid';
const Funny = () => {
  return (
<section id="funny" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <StaticQuoteGrid category="funny" />
      <h2 className="z-10 text-white text-5xl md:text-6xl font-secondquotes bg-black/30 rounded-xl px-8 py-4 backdrop-blur text-center">
        Funny Quotes
      </h2>
    </section>
  );
};

export default Funny;
