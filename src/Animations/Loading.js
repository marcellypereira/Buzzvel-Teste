import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-t-4 border-grayLight"
        style={{ borderTopColor: '#581C87' }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Loading;
