import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import HangSpider from '../assets/Hangspider.svg';
import SpidyBgDesktop from '../assets/Spidy2.png'; // Landscape (Desktop)
import SpidyBgMobile from '../assets/SpiderMobile.png'; // Portrait (Mobile)
import PortalVid from '../assets/Portal.mp4'; 

const WelcomeScreen = ({ onComplete, audioRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(false);
  const [init, setInit] = useState(false);
  const [triggerPortalExit, setTriggerPortalExit] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const handleStart = () => {
    // 1. Audio and Video Start
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log("Audio play blocked"));
    }
    
    if (videoRef.current) {
      videoRef.current.play();
    }

    setIsAnimating(true);
    
    // 2. Timings:
    setTimeout(() => setShowText(true), 500); // Spider text
    setTimeout(() => setTriggerPortalExit(true), 1800); // Transition starts
    setTimeout(() => onComplete(), 3800); // Total transition time
  };

  // --- Animation Variants ---

  // A. For Background Image (Only Scale, No Rotation)
  const imageScaleSuck = {
    initial: { scale: 1, opacity: 1 },
    suck: { 
      scale: 0, 
      opacity: 0, 
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  // B. For Text and Particles (Spin and Scale)
  const contentSpinSuck = {
    initial: { scale: 1, rotate: 0, opacity: 1, filter: "blur(0px)" },
    suck: { 
      scale: 0, 
      rotate: 720, 
      opacity: 0, 
      filter: "blur(20px)",
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden">
      
      {/* 1. PORTAL VIDEO OVERLAY (Top Layer) */}
      <div className="absolute inset-0 z-[1100] pointer-events-none">
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-700 mix-blend-screen ${triggerPortalExit ? 'opacity-100' : 'opacity-0'}`}
          muted
          playsInline
          loop
        >
          <source src={PortalVid} type="video/mp4" />
        </video>
      </div>

      {/* 2. RESPONSIVE BACKGROUND WRAPPER (Sucked without Rotation) */}
      <motion.div
        variants={imageScaleSuck}
        animate={triggerPortalExit ? "suck" : "initial"}
        className="absolute inset-0 z-[10] flex items-center justify-center"
      >
        {/* Mobile Background (Portrait) - Default */}
        <div 
          className="absolute inset-0 md:hidden" // md:hidden removes it on desktop
          style={{
            backgroundImage: `url(${SpidyBgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7) contrast(1)', // Same contrast as laptop image
          }}
        />
        
        {/* Desktop Background (Landscape) - Shown from md breakpoint up */}
        <div 
          className="absolute inset-0 hidden md:block" // hidden by default, md:block shows it
          style={{
            backgroundImage: `url(${SpidyBgDesktop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9) contrast(1.1)', // Original contrast
          }}
        />
      </motion.div>

      {/* 3. SPINNING CONTENT WRAPPER (Particles & UI) */}
      <motion.div
        variants={contentSpinSuck}
        animate={triggerPortalExit ? "suck" : "initial"}
        className="absolute inset-0 z-[20] flex items-center justify-center"
      >
        {/* Particles */}
        {init && (
          <Particles
            id="welcomeParticles"
            options={{
              background: { color: "transparent" },
              particles: {
                color: { value: "#E23636" },
                links: { enable: true, color: "#E23636", distance: 130, opacity: 0.3 },
                move: { enable: true, speed: 1 },
                number: { value: 120 },
                size: { value: { min: 1, max: 2 } },
              },
            }}
          />
        )}

        {/* Main Text Content (Only shown before animation) */}
        {!isAnimating && (
          <div className="text-center z-[30] px-6">
            <h1 className="text-white text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic select-none">
              Welcome to the <br />
              <span className="text-[#E23636]">Spidy</span> Verse
            </h1>
            <button 
              onClick={handleStart}
              className="px-10 py-4 md:px-12 md:py-5 border-2 border-[#E23636] text-[#E23636] hover:bg-[#E23636] hover:text-black transition-all duration-300 font-black uppercase tracking-widest rounded-full backdrop-blur-md text-sm md:text-base"
            >
              View Spidy Journey
            </button>
          </div>
        )}
      </motion.div>

      {/* 4. SPIDERMAN DOWN EFFECT (Stays on top till end) */}
      {isAnimating && (
        <motion.div
          initial={{ y: -800 }}
          animate={triggerPortalExit ? { opacity: 0, scale: 0 } : { y: [-800, 5, 5, -1200] }}
          transition={triggerPortalExit ? { duration: 0.5 } : { duration: 2.8, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
          className="absolute top-0 z-[1000] flex flex-col items-center"
        >
          <div className="relative">
            <div 
              className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#E23636]" 
              style={{
                maskImage: `url(${HangSpider})`,
                WebkitMaskImage: `url(${HangSpider})`,
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
              }}
            />
            {showText && !triggerPortalExit && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, x: 80 }}
                className="absolute bottom-[80px] left-1/2 bg-white text-black font-black px-5 py-2 rounded-full shadow-[0_0_20px_white] text-xl"
              >
                YES! 
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Black Overlay to help text contrast */}
      <div className={`absolute inset-0 bg-black/40 z-[5] transition-opacity duration-500 ${triggerPortalExit ? 'opacity-0' : 'opacity-100'}`} />
    </div>
  );
};

export default WelcomeScreen;