import axios from 'axios';

const API_BASE_URL = 'https://eloquence-bot-backend-production.up.railway.app/api'; // Live backend URL

export const getQuotesByCategory = async (category, limit = 5) => {
  // Change localhost to the live backend URL
  const response = await axios.get(`${API_BASE_URL}/quotes/${category}?limit=${limit}`);
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
