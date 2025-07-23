// src/sections/Funny.jsx
import React from 'react';
import FloatingQuotes from '../components/FloatingQuotes';

const Funny = () => {
  return (
    <section id="funny" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating quote boxes behind the title */}
      <FloatingQuotes category="funny" />

      {/* Title in front */}
      <h2 className="text-white text-5xl md:text-6xl font-secondquotes bg-black/30 rounded-xl px-8 py-4 backdrop-blur z-10 text-center">
        Funny Quotes
      </h2>
    </section>
  );
};

export default Funny;
