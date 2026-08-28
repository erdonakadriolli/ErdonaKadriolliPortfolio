
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    const endTimer = setTimeout(onComplete, 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <motion.div 
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1, ease: "circOut" }}
              className="mb-4"
            >
              <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter gradient-text">
                ERDONA
              </h1>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-blue-100 mx-auto"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-4 text-slate-400 font-medium tracking-[0.3em] text-xs uppercase"
            >
              Portfolio Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
