// src/components/FloatingQuotes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteCard from './QuoteCard';

const FloatingQuotes = ({ category }) => {
  const [quotes, setQuotes] = useState([]);
  const [floatingQuotes, setFloatingQuotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quotes/${category}`)
      .then(res => setQuotes(res.data))
      .catch(err => console.error('Failed to load quotes', err));
  }, [category]);

  // Initialize with 5 random quotes
useEffect(() => {
  if (quotes.length > 0) {
    const initial = getRandomSubset(quotes, 5).map((quote, i) => ({
      ...quote,
      id: `${quote._id}-${Date.now()}-${i}`,
      x: Math.random() * 40 + 5,
      y: Math.random() * 80 + 10,
    }));
    setFloatingQuotes(initial);
  }
}, [quotes]);


  // Periodically replace one random floating quote
  useEffect(() => {
    const interval = setInterval(() => {
      if (quotes.length < 1 || floatingQuotes.length < 1) return;

      const newQuote = getRandomSubset(quotes, 1)[0];
      const newObj = {
        ...newQuote,
        id: `${newQuote._id}-${Date.now()}`,
        x: Math.random() * 40 + 5,
        y: Math.random() * 80 + 10,
      };

      setFloatingQuotes(prev => {
        const indexToReplace = Math.floor(Math.random() * prev.length);
        const updated = [...prev];
        updated[indexToReplace] = newObj;
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes, floatingQuotes]);

  const getRandomSubset = (arr, size) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {floatingQuotes.map(quote => (
          <QuoteCard
            key={quote.id}
            text={quote.text}
            author={quote.author}
            style={{
              left: `${quote.x}%`,
              top: `${quote.y}%`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingQuotes;
