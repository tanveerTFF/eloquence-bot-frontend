import React from 'react';
import { motion } from 'framer-motion';

const fadeVariant = {
  initial: { opacity: 0, scale: 0.8, filter: 'blur(6px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1 } },
  exit: { opacity: 0, scale: 0.8, filter: 'blur(6px)', transition: { duration: 1 } },
};

const QuoteCard = ({ text, author, style }) => {
  return (
    <motion.div
      variants={fadeVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      style={style}
      className="absolute max-w-sm bg-white/10 border border-white text-white rounded-2xl p-4 shadow-xl backdrop-blur-md"
    >
      <p className="text-md italic">"{text}"</p>
      <p className="text-sm mt-2 text-right">— {author}</p>
    </motion.div>
  );
};

export default QuoteCard;
