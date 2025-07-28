import React, { useEffect, useState } from 'react';
import { getQuotesByCategory } from "../utils/api";

const Epic = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchEpicQuotes = async () => {
    try {
      const data = await getQuotesByCategory('epic', 5);
      setQuotes(data);
    } catch (err) {
      console.error('❌ Error fetching epic quotes:', err);
      setError('Failed to load epic quotes.');
    }
  };

  useEffect(() => {
    fetchEpicQuotes();
  }, []);

  return (
    <section id="epic" className="min-h-screen w-full px-4 py-12 flex flex-col items-center justify-start">
      <h2 className="text-white text-5xl md:text-6xl font-secondquotes bg-black/30 rounded-xl px-10 py-4 backdrop-blur text-center">
        Epic Quotes
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <ul className="space-y-6 max-w-xl mx-auto mt-8">
        {quotes.map((quote, index) => (
          <li key={index} className="bg-white text-black p-4 rounded-lg shadow">
            <p className="text-lg font-semibold">“{quote.text}”</p>
            <p className="text-sm text-right mt-2">— {quote.author || 'Unknown'}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <button
          onClick={fetchEpicQuotes}
          className="bg-white hover:bg-black text-black hover:text-white px-6 py-2 rounded-lg shadow font-semibold"
        >
          Refresh Quotes
        </button>
      </div>
    </section>
  );
};

export default Epic;
