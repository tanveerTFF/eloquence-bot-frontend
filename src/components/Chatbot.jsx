import React, { useEffect, useState, useRef } from 'react';
import { sendMessage, getMessages } from '../utils/api';
import { FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [thinking, setThinking] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    let sid = localStorage.getItem('eloquence-session');
    if (!sid) {
      sid = `session-${Date.now()}`;
      localStorage.setItem('eloquence-session', sid);
    }
    setSessionId(sid);
    getMessages(sid).then(setMessages);
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

const handleSend = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: 'user', content: input }];
  setMessages(newMessages);
  setThinking(true);
  setInput('');

  const { reply, route } = await sendMessage(input, sessionId);
  setThinking(false);
  setMessages([...newMessages, { role: 'bot', content: reply }]);

  if (route && route.startsWith('/quotes/')) {
    const sectionId = route.replace('/quotes/', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
};


  return (
    <div className="w-full w-[90vw] md:w-[60vw] lg:w-[40vw] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-4 md:p-6 flex flex-col gap-4">
      <div className="h-[70vh] overflow-y-auto px-2 chat-scroll">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
<div
  className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm md:text-base ${
    msg.role === 'user'
      ? 'bg-black text-white'
      : 'bg-white text-black'
  }`}
>
  <ReactMarkdown
    components={{
      p: ({ node, ...props }) => (
        <p className="font-serif text-base" {...props} />
      ),
    }}
  >
    {msg.content}
  </ReactMarkdown>
</div>

          </div>
        ))}
        {thinking && (
          <div className="text-sm text-black italic text-left pl-2">
            Eloquence is thinking...
          </div>
        )}
        <div ref={messageEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 text-black"
        />
        <button
          onClick={handleSend}
          className="bg-black text-white rounded-full p-3 hover:bg-blue-600 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
