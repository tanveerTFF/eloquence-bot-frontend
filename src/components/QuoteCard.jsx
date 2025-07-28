import React from 'react';

const QuoteCard = ({ quote }) => (
  <div className="bg-white/10 text-white p-4 rounded-xl shadow-md">
    <p className="text-lg italic">"{quote.text}"</p>
    <p className="mt-2 text-sm text-gray-300 text-right">— {quote.author || 'Unknown'}</p>
  </div>
);

export default QuoteCard;
