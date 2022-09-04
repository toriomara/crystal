import React from 'react';
import { motion } from 'framer-motion';

export const ClientLine = () => {
  return (
    <motion.div
      initial={{
        x: '-100px',
        //opacity: 0.5,
        overflow: 'hidden',
      }}
      animate={{
        x: 0,
        opacity: 1,
        repeat: Infinity,
        transition: {
          duration: 5,
          ease: 'easeOut',
          repeat: Infinity,
          overflow: 'hidden',
        },
      }}
      // exit={{
      //   x: '-100px',
      //   opacity: 0.5,
      //   transition: {
      //     duration: 1,
      //     ease: 'easeIn',
      //   },
      // }}
    >
      ClientLine
    </motion.div>
  );
};
