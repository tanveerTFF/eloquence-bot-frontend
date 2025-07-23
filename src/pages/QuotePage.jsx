import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const QuotePage = () => {
  const { category } = useParams();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quotes/${category}`)
      .then(res => setQuotes(res.data))
      .catch(err => console.error('Failed to load quotes', err));
  }, [category]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textTransform: 'capitalize' }}>{category} Quotes</h2>
      <ul>
        {quotes.map((quote, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            “{quote.text}” {quote.author && <span>— {quote.author}</span>}
          </li>
        ))}
      </ul>
      <a href="/" style={{ color: 'blue' }}>← Back to Chat</a>
    </div>
  );
};

export default QuotePage;
