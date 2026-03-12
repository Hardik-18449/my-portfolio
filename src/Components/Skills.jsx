import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiVercel, SiRedux
} from 'react-icons/si';

const skillRows = [
  {
    category: "Frontend",
    items: [
      { name: "HTML 5", icon: <FaHtml5 /> },
      { name: "CSS 3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
    ]
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
    ]
  },
  {
    category: "Tools", // Is category ke upar special text aayega
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
    ]
  }
];

const Skills = ({ isDark }) => {
  return (
    <section id="skills" className="py-24 px-6 bg-transparent relative z-20 -mt-35 md:-mt-30 lg:-mt-30">
      
      {/* Center Aligned Header */}
      <div className="mb-20 text-center">
        <h2 className="text-accent font-display text-5xl md:text-7xl uppercase tracking-tighter">
          My Arsenal
        </h2>
        <p className={`uppercase tracking-[0.4em] text-[10px] md:text-sm mt-4 font-bold opacity-80 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Equipped with the latest tech webs
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center gap-8">
            
            {/* Conditional Sub-heading for Tools */}
            {row.category === "Tools" && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
              >
                <p className={`uppercase tracking-[1em] text-[10px] md:text-xs font-bold ${isDark ? "text-white" : "text-black"}`}>
                  Tools and Software
                </p>
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {row.items.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(226,54,54,0.3)] ${
                    isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                  }`}>
                    
                    <div className={`text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 ${
                      isDark ? "text-gray-400 group-hover:text-accent" : "text-gray-600 group-hover:text-accent"
                    }`}>
                      {skill.icon}
                    </div>

                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#E23636]" />
                  </div>

                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors ${
                    isDark ? "text-gray-500 group-hover:text-white" : "text-gray-400 group-hover:text-black"
                  }`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;