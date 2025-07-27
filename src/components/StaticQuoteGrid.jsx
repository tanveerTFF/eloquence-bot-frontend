// src/components/StaticQuoteGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';

const StaticQuoteGrid = ({ category }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quotes/${category}`)
      .then(res => {
        const shuffled = [...res.data].sort(() => 0.5 - Math.random());
        setQuotes(shuffled.slice(0, 10)); // Show 10 quotes max
      })
      .catch(err => console.error('Quote load failed:', err));
  }, [category]);

  return (
    <div className="absolute inset-0 z-0 flex flex-wrap gap-4 p-6 justify-start items-start">
      {quotes.map((quote, idx) => (
        <QuoteCard
          key={quote._id}
          text={quote.text}
          author={quote.author}
          style={{
            width: `${Math.random() > 0.5 ? '220px' : '300px'}`,
            height: 'auto',
          }}
        />
      ))}
    </div>
  );
};

export default StaticQuoteGrid;
