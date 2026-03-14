import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Assets
import Exp1 from '../assets/ex1.png'; 
import Exp2 from '../assets/ex2.png';
import Exp3 from '../assets/ex3.png';
import Exp4 from '../assets/ex4.png';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Green Goblin Battle",
    date: "2023 - Present",
    icon: Exp1,
    points: ["Developing responsive UI with React.", "Optimizing web performance.", "Implementing TASM themed animations."],
    battleNote: "Used agility to dodge the glider's final strike. Norman's own technology became his undoing in the end."
  },
  {
    title: "MERN Stack Intern",
    company: "Doctor Octopus Clash",
    date: "2022 - 2023",
    icon: Exp2,
    points: ["Built RESTful APIs using Node & Express.", "Managed MongoDB databases.", "Integrated Redux for state management."],
    battleNote: "Disrupted the neural link of his mechanical arms using a magnetic pulse. Restored the man behind the monster."
  },
  {
    title: "UI Designer",
    company: "Sandman Sewer Conflict",
    date: "2021 - 2022",
    icon: Exp3,
    points: ["Designed high-fidelity Figma prototypes.", "Created custom SVG icons and illustrations.", "Focused on Dark Mode accessibility."],
    battleNote: "Lured him into the sewer system and used a high-pressure water main to liquify his stable sand form."
  },
  {
    title: "Open Source Contributor",
    company: "Electro Showdown",
    date: "2020 - 2021",
    icon: Exp4,
    points: ["Contributed to major React libraries.", "Fixed critical bugs in CSS frameworks.", "Authored technical documentation."],
    battleNote: "Modified web-shooters to act as a ground. Overloaded his energy capacity using the city's power grid."
  }
];

const Experience = ({ isDark }) => {
  // 1. Reference for the container
  const containerRef = useRef(null);
  
  // 2. Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"] // Start filling when top is at 80% of viewport
  });

  // 3. Transform progress into height percentage
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="experience" 
      ref={containerRef} // Attach ref here
      className="py-24 px-6 md:px-20 relative bg-transparent overflow-hidden"
    >
      
      <div className="text-center mb-28">
        <p className="uppercase tracking-[0.5em] text-gray-500 text-xs font-bold mb-2">Spider-Man's Case Files</p>
        <h2 className="text-accent font-display text-5xl md:text-8xl uppercase leading-none">Experience</h2>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* --- DYNAMIC SCROLL LINE --- */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10">
          <motion.div 
            style={{ 
              scaleY: scaleY, // Link height to scroll
              originY: 0      // Start filling from top
            }} 
            className="w-full h-full bg-accent shadow-[0_0_15px_#E23636] origin-top" 
          />
        </div>

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* IMAGE SIDE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }} // Repeat animation on scroll
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] flex justify-center mb-10 md:mb-0 pl-10 md:pl-0"
              >
                <div className="relative group cursor-help touch-auto">
                  <div className={`w-64 h-64 md:w-80 md:h-80 border-2 border-white/10 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-2xl transition-all duration-500 
                    group-hover:border-accent group-active:border-accent 
                    ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                    
                    <img src={exp.icon} alt={exp.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    
                    {/* DEFEATED LABEL */}
                    <div className="absolute bottom-4 left-0 w-full text-center z-10 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                      <span className="bg-accent/90 text-white px-4 py-1 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase skew-x-[-15deg] shadow-[5px_5px_0_rgba(0,0,0,0.5)] border border-white/20">
                        Defeated
                      </span>
                    </div>

                    {/* BATTLE REPORT OVERLAY */}
                    <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 md:p-8 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 text-center">
                      <div className="w-8 h-[1px] bg-accent mb-4"></div>
                      <h4 className="text-accent font-display text-xl mb-3 uppercase">Battle Report</h4>
                      <p className="text-white text-[11px] md:text-sm font-medium leading-relaxed italic border-x border-accent/30 px-4">
                        {exp.battleNote}
                      </p>
                      <div className="w-8 h-[1px] bg-accent mt-4"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CENTER DOT */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div 
                   whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
                   viewport={{ once: false }}
                   className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent shadow-[0_0_15px_#E23636] border-2 border-white"
                />
              </div>

              {/* WORK DETAILS */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }} // Repeat animation
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] space-y-4 pl-12 md:pl-0"
              >
                <span className="text-accent font-bold text-sm tracking-widest block">{exp.date}</span>
                <h3 className={`text-2xl md:text-5xl font-display uppercase leading-tight ${isDark ? 'text-white' : 'text-black'}`}>{exp.title}</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{exp.company}</p>
                
                <ul className="space-y-4 pt-6 border-t border-white/10">
                  {exp.points.map((p, i) => (
                    <li key={i} className={`flex items-start gap-3 text-xs md:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_5px_#E23636]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;