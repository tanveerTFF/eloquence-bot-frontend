//api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust if backend URL differs


export const getQuotesByCategory = async (category, limit = 5) => {
  const response = await axios.get(`http://localhost:5000/quotes/${category}?limit=${limit}`);
  return response.data;
};


export const sendMessage = async (message, sessionId) => {
  const res = await axios.post(`${API_BASE_URL}/chat`, { message, sessionId });
  return res.data;
};

export const getMessages = async (sessionId) => {
  const res = await axios.get(`${API_BASE_URL}/chat/${sessionId}`);
  return res.data;
};
