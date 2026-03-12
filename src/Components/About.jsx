import React from 'react';
import Backend from '../assets/backend.png';
import Frontend from '../assets/frontend.png';
import FullStack from '../assets/fullStack.png';
import Web from '../assets/web.png';

const About = ({ isDark }) => {
  return (
   <section 
  id="about" 
  className={`
    relative z-20 w-full min-h-screen px-6 md:px-20 
    flex flex-col md:flex-row items-center gap-12 bg-transparent 
    /* MOBILE: Positive margin to create space from Hero */
    mt-24 
    /* TABLET: Reduced negative margin */
    md:-mt-20 
    /* LAPTOP: Standard TASM overlap */
    lg:-mt-25
  `}
>
      
      {/* Left Side: Spider-Sense Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-accent font-display text-4xl md:text-7xl uppercase tracking-tighter leading-none">
          With Great Power... <br />
          <span className={isDark ? "text-white" : "text-black"}>Comes Great Code.</span>
        </h2>
        
        <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Hi, I'm <span className="text-accent font-bold">Hardik Gurjar</span>. 
          Just like Peter Parker balances his life, I balance clean UI with 
          powerful logic. A Web Slinger in the world of JavaScript, catching bugs 
          in my web and building experiences that stick.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          {/* RESUME BUTTON */}
          <a 
            href="/resume.pdf" 
            download="Hardik_Gurjar_Resume.pdf" 
            className="px-8 py-3 bg-accent text-white font-bold rounded-sm transform hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(226,54,54,0.4)] flex items-center justify-center"
          >
            RESUME
          </a>

          {/* CONTACT BUTTON */}
          <button className={`px-8 py-3 border-2 border-accent font-bold rounded-sm transition-all hover:bg-accent hover:text-white ${isDark ? "text-white" : "text-black"}`}>
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Right Side: Skill Cards Grid (4 Cards) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {[
          { label: 'Backend', icon: Backend }, 
          { label: 'Frontend', icon: Frontend },
          { label: 'Full Stack', icon: FullStack },
          { label: 'Web Design', icon: Web }
        ].map((skill, i) => (
          <div 
            key={i} 
            className={`p-6 md:p-10 border flex flex-col items-center justify-center text-center gap-4 ${
              isDark ? "border-white/10 bg-white/5" : "border-black/5 bg-black/5"
            } backdrop-blur-md transition-all duration-300 hover:border-accent/50 group relative overflow-hidden`}
          >
            {/* Skill Icon PNG */}
            <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <img 
                src={skill.icon} 
                alt={skill.label} 
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_20px_rgba(226,54,54,0.4)]"
              />
            </div>

            {/* Skill Name */}
            <p className={`relative z-10 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-colors duration-300 ${
              isDark ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"
            }`}>
              {skill.label}
            </p>

            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;