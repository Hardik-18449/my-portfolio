import React from 'react';
import { motion } from 'framer-motion';
import HangSpider from '../assets/Hangspider.svg';

const ThemeSpider = ({ isDark, setIsDark }) => {
  return (
    <motion.div 
      onClick={() => setIsDark(!isDark)}
      // Fixed positioning for all screens
      className="fixed top-0 right-10 sm:right-20 md:right-32 z-[100] cursor-pointer group touch-none"
      initial={{ y: -120 }} 
      animate={{ y: 0 }}
      // Desktop par hover se niche aayega, mobile par tap par feedback dega
      whileHover={{ y: 40 }} 
      whileTap={{ scale: 0.9, y: 20 }} 
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="relative w-16 md:w-32 h-56 md:h-80 -mt-8 md:-mt-12">
        {/* The SVG Container */}
        <div 
          className={`w-full h-full transition-colors duration-500 ${
            isDark ? 'bg-accent shadow-[0_0_20px_rgba(226,54,54,0.5)]' : 'bg-black'
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
        
        {/* Glow Effect only in Dark Mode */}
        {isDark && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-accent/40 blur-[30px] md:blur-[40px] rounded-full -z-10 animate-pulse" />
        )}

        {/* Desktop Tooltip - Spidey Sense */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <span className="text-[8px] md:text-[10px] font-bold text-accent uppercase tracking-widest whitespace-nowrap">
             {isDark ? 'Light Side' : 'Dark Side'}
           </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeSpider;