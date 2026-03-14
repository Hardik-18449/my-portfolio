import React from 'react';
import { motion } from 'framer-motion';
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project3.jpeg"
import project3 from "../assets/project4.jpeg"

const projects = [
  {
    title: "The Sunday Bite",
    category: "Web Design",
    img: project1,
    link: "#"
  },
  {
    title: "Get Interest RealEstate",
    category: "Full Stack",
    img: project2,
    link: "#"
  },
  {
    title: "Soar for less",
    category: "Machine Learning",
    img: project3,
    link: "#"
  }
];

const Portfolio = ({ isDark }) => {
  return (
    <section 
      id="portfolio" 
      className="relative z-20 w-full py-20 px-6 md:px-20 bg-transparent -mt-30 md:-mt-30 lg:-mt-30"
    >
      <div className="mb-12"> 
        <h2 className="text-accent font-display text-5xl md:text-7xl uppercase leading-none">
          Caught in my Web
        </h2>
        <p className={`uppercase tracking-[0.5em] text-[10px] md:text-sm mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Selected Works 2024-2026
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden bg-black/5 dark:bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-sm transition-all duration-300 active:scale-[0.98]"
          >
            {/* Project Image Container */}
            <div className="relative h-64 overflow-hidden mb-6">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-all duration-500 
                  group-hover:grayscale-0 group-hover:scale-110 
                  group-active:grayscale-0 group-active:scale-110"
              />
              
              {/* Overlay with Web Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
                {/* Top-Left Web Line */}
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-accent -rotate-45 origin-top-left"></div>
                {/* Top-Right Web Line */}
                <div className="absolute top-0 right-0 w-20 h-[1px] bg-accent rotate-45 origin-top-right"></div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-2">
              <p className="text-accent font-bold text-xs uppercase tracking-widest">{project.category}</p>
              <h3 className={`text-2xl font-display uppercase ${isDark ? "text-white" : "text-black"}`}>
                {project.title}
              </h3>
            </div>

            {/* View Project Button */}
            <a 
              href={project.link}
              className={`inline-block mt-6 text-sm font-bold border-b-2 border-accent pb-1 transition-all duration-300 
                hover:tracking-widest active:tracking-widest ${isDark ? 'text-white' : 'text-black'}`}
            >
              VIEW CASE STUDY
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;