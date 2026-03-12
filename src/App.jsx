import React, { useState, useEffect, useRef } from 'react';
import Background from './Components/Background';
import { Hero } from './Components/Hero';
import CustomCursor from './Components/CustomCursor';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Experience from './Components/Work';
import Navbar from './Components/Navbar';
import Contact from './Components/COntact';

import themeSong from './assets/ThemeMusic.mp3'; 
import WelcomeScreen from './Components/Welcome';

// ... baaki imports same rahenge

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  // Ye sirf state change karega, music Welcome component handle karega
  const startJourney = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="cursor-none selection:bg-accent selection:text-white">
      <audio ref={audioRef} src={themeSong} loop />

      <CustomCursor isDark={isDark} />

      {!showPortfolio ? (
        <WelcomeScreen 
          onComplete={startJourney} 
          audioRef={audioRef} // <-- Ye pass karna zaroori hai
        />
      ) : (
        <div className="relative min-h-screen bg-main transition-colors duration-500">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <Background isDark={isDark} />
          </div>
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main className="relative w-full">
            <Hero isDark={isDark} />
            <div className="relative z-10 w-full">
              <About isDark={isDark} />
              <Portfolio isDark={isDark} />
              <Skills isDark={isDark} />
              <Experience isDark={isDark} />
              <Contact isDark={isDark} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
export default App;