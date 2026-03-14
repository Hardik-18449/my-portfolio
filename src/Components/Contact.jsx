import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDark }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 px-4 md:px-20 relative bg-transparent overflow-hidden -mt-45 md:-mt-30 lg:-mt-48"
    >
      
      {/* Background Decorative Text - Theme Adaptive */}
      <div className="absolute top-0 md:top-10 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.h1 
          className={`text-[25vw] md:text-[15vw] font-display uppercase leading-none whitespace-nowrap transition-colors duration-500 ${
            isDark ? "text-accent/20" : "text-black/10"
          }`}
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          I believe there's a hero in all of us • I believe there's a hero in all of us •
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Spider-Signal Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div>
            <h2 className="text-accent font-display text-4xl md:text-7xl uppercase leading-none mb-4">
              Send the <br className="hidden md:block" /> Spider-Signal
            </h2>
            <p className={`text-sm md:text-lg font-medium px-4 lg:px-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Got a project that needs a web-slinger? Or just want to talk about 
              the multiverse? My spidey-sense is tingling!
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
            {/* Email Contact Item */}
            <div className="flex flex-col md:flex-row items-center gap-4 group cursor-pointer">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent flex items-center justify-center transition-all 
                group-hover:bg-accent group-active:bg-accent`}>
                <span className={`text-accent font-bold text-sm md:text-base group-hover:text-white group-active:text-white`}>@</span>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Me</p>
                <p className={`text-sm md:text-xl font-display uppercase ${isDark ? "text-white" : "text-black"}`}>hardikgurjar174@gmail.com</p>
              </div>
            </div>

            {/* Social Contact Item */}
            <div className="flex flex-col md:flex-row items-center gap-4 group cursor-pointer">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent flex items-center justify-center transition-all 
                group-hover:bg-accent group-active:bg-accent`}>
                <span className={`text-accent font-bold text-sm md:text-base group-hover:text-white group-active:text-white`}>#</span>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Socials</p>
                <p className={`text-sm md:text-xl font-display uppercase ${isDark ? "text-white" : "text-black"}`}>LinkedIn / GitHub / Instagram</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: The Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`w-full lg:w-1/2 p-6 md:p-12 border transition-colors duration-500 ${isDark ? "bg-[#1d1836]/80 border-white/10" : "bg-white/80 border-black/10 shadow-2xl"} backdrop-blur-xl rounded-2xl relative overflow-hidden`}
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-[100px]" />

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Your Secret Identity (Name)</label>
              <input 
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text" 
                placeholder="Peter Parker"
                className={`w-full bg-transparent border-b py-3 outline-none focus:border-accent transition-colors 
                ${isDark ? "text-white border-white/20 placeholder:text-gray-600" : "text-black border-black/20 placeholder:text-gray-400"}`}
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Email Address</label>
              <input 
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email" 
                placeholder="peter.parker@dailybugle.com"
                className={`w-full bg-transparent border-b py-3 outline-none focus:border-accent transition-colors 
                ${isDark ? "text-white border-white/20 placeholder:text-gray-600" : "text-black border-black/20 placeholder:text-gray-400"}`}
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Your Message</label>
              <textarea 
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="With great projects comes great responsibility..."
                className={`w-full bg-transparent border-b py-3 outline-none focus:border-accent transition-colors resize-none
                ${isDark ? "text-white border-white/20 placeholder:text-gray-600" : "text-black border-black/20 placeholder:text-gray-400"}`}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-accent text-white font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300 shadow-[0_0_20px_rgba(226,54,54,0.3)] text-xs md:text-base
                hover:bg-black hover:text-white 
                active:scale-95 active:bg-black active:text-white"
            >
              Dispatch Message
            </button>
          </form>
        </motion.div>

      </div>

      <div className="mt-16 md:mt-24 text-center opacity-30 px-4">
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">
          Handcrafted by Hardik Gurjar © 2026 • TASM Multiverse Edition
        </p>
      </div>

    </section>
  );
};

export default Contact;