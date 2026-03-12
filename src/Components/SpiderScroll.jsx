import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SpideyImg from '../assets/spide.svg';

const SpiderScroll = () => {
  const { scrollYProgress } = useScroll();

  // useSpring se animation makkhan jaisi smooth ho jayegi (jerk nahi maaregi)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Web ki height: 0 se lekar screen ki 100% height tak
  const webHeight = useTransform(smoothProgress, [0, 1], ["0px", "800px"]);

  return (
    /* Change: relative ko absolute kiya aur z-index set kiya */
    <div className="absolute top-0 left-0 h-[300vh] w-full flex justify-center bg-transparent pointer-events-none z-40">
      
      {/* Sticky container hamesha screen par rahega */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center">
        
        {/* Spidey & Web logic (Keep same) */}
        <div className="relative flex flex-col items-center mt-20">
             {/* ... Spidey Image & Motion Div ... */}
        </div>

      </div>
    </div>
  );
};

export default SpiderScroll;