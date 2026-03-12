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
    // Height adjusted to 90vh on mobile to pull content up, and flex-col for better stacking
    <section className="relative h-[90vh] md:h-[100vh] w-full flex flex-col justify-end items-center overflow-hidden">
      
      {/* 1. Large Background Text - Adjusted Z-index and Positioning */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10 -mt-80 md:-mt-32">
        <h1 
          className="font-display uppercase leading-none transition-all duration-500 block text-center whitespace-nowrap" 
          style={{ 
            color: isDarkMode ? 'white' : 'black',
           textShadow: isDarkMode ? '0 0 15px rgba(255,255,255,0.05)' : 'none', // Low opacity makes it feel like a background element
            fontWeight: '900',
            fontSize: 'clamp(80px, 25vw, 500px)',
            letterSpacing: '-0.02em',
            // Pulling text slightly up to remove top gap
            transform: 'translateY(-5%)' 
          }}
        >
          PORTFOLIO
        </h1>
      </div>

    {/* 2. "Creative" Script Text - Mobile Responsive Fix */}
<div className="absolute 
    /* Mobile: top-35% to push it down, Tablet/Laptop: top-30/35% */
    top-[18%] sm:top-[30%] md:top-[19%] 
    left-1/2 -translate-x-1/2 -translate-y-1/2 
    z-40 w-full text-center px-4"
>
  <span className="
    /* Font size scaled down for small mobiles */
    text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] 
    font-signature text-accent drop-shadow-2xl 
    transition-all duration-300 inline-block"
  >
    Creative
  </span>
</div>
      {/* 3. The Main Image - Moved up and scaled for mobile */}
     {/* 3. The Main Image - Pushed Up for Mobile & Desktop */}
{/* 3. The Main Image - Absolute Positioning Fix */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
  <img 
    src={HeroImage} 
    alt="Hardik" 
    className="transition-all duration-500 object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    style={{ 
      /* Mobile par height badhai aur transform se upar push kiya */
      height: 'clamp(450px, 85vh, 90vh)', 
      width: 'auto',
      maxWidth: '160%',
      /* Is line se image upar jayegi. -10% ko -15% ya -20% karke dekho */
      transform: 'translateY(-8%)' 
    }}
  />
</div>

      {/* 4. Bottom Labels - Adjusted for Mobile layout */}
      {/* 4. Bottom Labels - Mobile Optimized */}
<div 
  className="absolute 
    /* Mobile par bottom-6 (ekdum niche) aur Desktop par bottom-20 */
    bottom-1 md:bottom-30 
    w-full 
    /* Mobile par gap badhane ke liye px-4 se px-10 ka balance */
    px-10 md:px-16 
    flex justify-between items-center z-50 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500"
  style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
>
  {/* Left Label */}
  <div className="flex items-center gap-1.5 md:gap-3">
    {/* Line size reduced for mobile (w-4) */}
    <div className="w-4 md:w-10 h-[1px] bg-accent opacity-80"></div>
    {/* Text size reduced for mobile (text-[6px]) */}
    <p className="opacity-40 text-[6px] md:text-xs"> Creative Portfolio 26</p>
  </div>

  {/* Right Label */}
  <div className="flex items-center gap-1.5 md:gap-3 text-right">
    {/* Text size reduced for mobile (text-[6px]) */}
    <p className="opacity-40 text-[6px] md:text-xs">Hardik Gurjar</p>
    {/* Line size reduced for mobile (w-4) */}
    <div className="w-4 md:w-10 h-[1px] bg-accent opacity-80"></div>
  </div>
</div>

    </section>
  );
};

export default Hero;