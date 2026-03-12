import React from 'react';
import { motion } from 'framer-motion';
import HangSpider from '../assets/Hangspider.svg';

const ThemeSpider = ({ isDark, setIsDark }) => {
  return (
    <motion.div 
      onClick={() => setIsDark(!isDark)}
      // RIGHT VALUE CHANGE: Mobile pe 20 (right-20) aur Desktop pe 32 (md:right-32) kiya hai
      className="fixed top-0 right-20 md:right-32 z-[100] cursor-pointer group"
      initial={{ y: -120 }} 
      animate={{ y: 0 }}
      whileHover={{ y: 50 }} 
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="relative w-20 md:w-32 h-56 md:h-80 -mt-12 lg:-mt-14">
        <div 
          className={`w-full h-full transition-colors duration-500 ${
            isDark ? 'bg-accent' : 'bg-black'
          }`}
          style={{
            maskImage: `url(${HangSpider})`,
            WebkitMaskImage: `url(${HangSpider})`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
          }}
        />
        
        {isDark && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-accent/40 blur-[40px] rounded-full -z-10 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
};

export default ThemeSpider;