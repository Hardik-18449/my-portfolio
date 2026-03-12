import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import HangSpider from '../assets/Hangspider.svg';

const WelcomeScreen = ({ onComplete, audioRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.log("Music play blocked"));
    }
    setIsAnimating(true);

    setTimeout(() => setShowText(true), 500);
    setTimeout(() => onComplete(), 2500);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden cursor-none">
      
      {/* Background Particles */}
      {init && (
        <Particles
          id="welcomeParticles"
          options={{
            background: { color: "transparent" },
            particles: {
              color: { value: "#E23636" },
              links: { enable: true, color: "#E23636", opacity: 0.2 },
              move: { enable: true, speed: 2 },
              number: { value: 120 },
              opacity: { value: 0.4 },
              size: { value: 1.5 },
            },
          }}
        />
      )}

      <AnimatePresence>
        {!isAnimating ? (
          <motion.div 
            key="ui"
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center z-10 px-4"
          >
            <h1 className="text-white text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
              Welcome to the <span className="text-[#E23636]">Spidy</span> Verse
            </h1>
            <button 
              onClick={handleStart}
              className="px-12 py-5 border-2 border-[#E23636] text-[#E23636] hover:bg-[#E23636] hover:text-black transition-all duration-300 font-black uppercase tracking-widest rounded-full backdrop-blur-md"
            >
              View Spidy Journey
            </button>
          </motion.div>
        ) : (
          /* GIANT SPIDER - POSITIONED HIGHER */
          <motion.div
            key="spider-giant"
            initial={{ y: -800 }}
            animate={{ 
                // Ab sirf 10px niche aayega taaki screen ke top pe hi rahe
                y: [-800, 5, 5, -1000] 
            }}
            transition={{ 
              duration: 2.5, 
              times: [0, 0.2, 0.8, 1], 
              ease: "easeInOut" 
            }}
            className="absolute top-0 flex flex-col items-center z-[1000]"
          >
            <div className="relative">
              {/* Spider Body - Forced Red Color */}
              <div 
                className="w-[600px] h-[600px] bg-[#E23636]" 
                style={{
                  maskImage: `url(${HangSpider})`,
                  WebkitMaskImage: `url(${HangSpider})`,
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  maskPosition: 'center',
                }}
              />

              {/* Message Pop-up (Head ke Right side aur Chota) */}
              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 80 }} // X offset for right side
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute bottom-[80px] left-1/2 bg-white text-black font-black px-5 py-2 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] z-[1001] text-xl whitespace-nowrap"
                  >
                    YES!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
    </div>
  );
};

export default WelcomeScreen;