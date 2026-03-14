import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/heroImg.png';

export const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen w-full flex flex-col justify-end items-center overflow-hidden">
      
      {/* 1. Large Background Text - "PORTFOLIO" */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10 -mt-80 md:-mt-32">
        <h1 
          className="font-display uppercase leading-none transition-all duration-500 block text-center whitespace-nowrap font-[900] tracking-[-0.02em] -translate-y-[5%]" 
          style={{ 
            color: isDarkMode ? 'white' : 'black',
            textShadow: isDarkMode ? '0 0 15px rgba(255,255,255,0.05)' : 'none',
            fontSize: 'clamp(80px, 25vw, 500px)',
          }}
        >
          PORTFOLIO
        </h1>
      </div>

      {/* 2. "Creative" Script Text */}
      <div className="absolute top-[18%] sm:top-[30%] md:top-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full text-center px-4">
        <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-signature text-accent drop-shadow-2xl transition-all duration-300 inline-block">
          Creative
        </span>
      </div>

      {/* 3. The Main Image - TASM Style Overlap */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
        <img 
          src={HeroImage} 
          alt="Hardik" 
          className="transition-all duration-500 object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] -translate-y-[8%]"
          style={{ 
            height: 'clamp(450px, 85vh, 90vh)', 
            width: 'auto',
            maxWidth: '160%',
          }}
        />
      </div>

      {/* 4. Bottom Labels - Side Branding */}
      <div 
        className={`absolute bottom-1 md:bottom-30 w-full px-10 md:px-16 flex justify-between items-center z-50 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"}`}
      >
        {/* Left Label */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <div className="w-4 md:w-10 h-[1px] bg-accent opacity-80"></div>
          <p className="opacity-40 text-[6px] md:text-xs tracking-widest">Creative Portfolio 26</p>
        </div>

        {/* Right Label */}
        <div className="flex items-center gap-1.5 md:gap-3 text-right">
          <p className="opacity-40 text-[6px] md:text-xs tracking-widest">Hardik Gurjar</p>
          <div className="w-4 md:w-10 h-[1px] bg-accent opacity-80"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;