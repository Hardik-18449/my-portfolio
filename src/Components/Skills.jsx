import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiVercel, SiRedux
} from 'react-icons/si';

const coreSkills = [
  { name: "HTML 5", icon: <FaHtml5 /> },
  { name: "CSS 3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const toolSkills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const Skills = ({ isDark }) => {
  return (
    <section id="skills" className="py-24 px-4 md:px-10 bg-transparent relative z-20 -mt-35 md:-mt-30 overflow-hidden">
      
      {/* --- DESKTOP DECORATIONS --- */}
      <div className="hidden xl:block absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none select-none">
        <p className={`text-7xl font-display opacity-[0.03] leading-none ${isDark ? "text-white" : "text-black"}`}>
          DEVELOPER / DEVELOPER / DEVELOPER
        </p>
      </div>
      <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none select-none">
        <p className={`text-7xl font-display opacity-[0.03] leading-none ${isDark ? "text-white" : "text-black"}`}>
          ENGINEER / ENGINEER / ENGINEER
        </p>
      </div>

      <div className="hidden lg:block absolute -top-10 -left-10 w-64 h-64 opacity-10 pointer-events-none">
        <div className="w-full h-full border-r border-b border-accent rounded-br-full" />
      </div>
      <div className="hidden lg:block absolute -bottom-10 -right-10 w-64 h-64 opacity-10 pointer-events-none">
        <div className="w-full h-full border-l border-t border-accent rounded-tl-full" />
      </div>

      {/* Header Section */}
      <div className="mb-20 text-center relative z-10">
        <h2 className="text-accent font-display text-5xl md:text-7xl uppercase tracking-tighter">
          My Arsenal
        </h2>
        <p className={`uppercase tracking-[0.4em] text-[10px] md:text-sm mt-4 font-bold opacity-80 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Equipped with the latest tech webs
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Row 1: 10 Core Skills (Single Line on Desktop) */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3 gap-y-10 md:gap-x-5 lg:gap-x-8">
          {coreSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} isDark={isDark} i={i} />
          ))}
        </div>

        {/* Tools Divider Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-center mt-6"
        >
          <p className={`uppercase tracking-[1em] text-[10px] md:text-xs font-bold ${isDark ? "text-white" : "text-black"}`}>
            Tools and Software
          </p>
        </motion.div>

        {/* Row 2: Tools */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12">
          {toolSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} isDark={isDark} i={i + 10} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Internal Card Component
const SkillCard = ({ skill, isDark, i }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.04, type: 'spring', stiffness: 200 }}
    className="group flex flex-col items-center gap-3 min-w-[75px] md:min-w-[90px] lg:min-w-[100px]"
  >
    <div className={`relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-500 
      hover:border-accent/50 hover:shadow-[0_0_20px_rgba(226,54,54,0.3)] 
      active:scale-90 active:border-accent
      ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>
      
      <div className={`text-2xl md:text-4xl transition-all duration-300 
        group-hover:scale-110 group-hover:text-accent
        group-active:text-accent
        ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {skill.icon}
      </div>
      
      {/* Spider Dot */}
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center transition-colors ${
      isDark ? "text-gray-500 group-hover:text-white" : "text-gray-400 group-hover:text-black"
    }`}>
      {skill.name}
    </span>
  </motion.div>
);

export default Skills;