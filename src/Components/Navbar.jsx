import React, { useState, useEffect } from 'react'; // 1. useEffect add kiya
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeSpider from './Themespider';

const Navbar = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 2. Scroll state

  // 3. Scroll position check karne ke liye logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* 1. THE HANGING SPIDER */}
      <div className="fixed top-0 right-24 md:right-32 z-[70] pointer-events-auto">
        <ThemeSpider isDark={isDark} setIsDark={setIsDark} />
      </div>

      {/* 4. Dynamic Background & Transition */}
      <nav className={`fixed top-0 w-full z-[60] h-20 flex items-center justify-between px-6 md:px-16 transition-all duration-500 
        ${scrolled 
          ? (isDark ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-white/40 backdrop-blur-md border-b border-black/5') 
          : 'bg-transparent'} 
        pointer-events-none`}
      >
        {/* LOGO */}
        <div className="glitch-wrapper font-display text-2xl md:text-3xl cursor-pointer pointer-events-auto">
          <p className="glitch-layer glitch-red">HARDIK</p>
          <p className="glitch-layer glitch-cyan">HARDIK</p>
          <p className="glitch-main">HARDIK</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-all 
                ${isDark ? 'text-white' : 'text-black'} 
                hover:text-accent active:text-accent`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Burger for Mobile */}
        <div className="flex items-center gap-4 pointer-events-auto z-[90]">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(true);
            }} 
            className={`md:hidden text-3xl p-2 transition-transform active:scale-90 
              ${isDark ? 'text-white' : 'text-black'}`}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay & Side Panel (Same as before) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 
          ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />

      <div className={`fixed top-0 right-0 h-full w-64 z-[110] transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
        ${isDark ? 'bg-zinc-950 text-white border-l border-white/10' : 'bg-white text-black shadow-2xl'}`}>
        
        <div className="p-8 flex flex-col gap-8">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="self-end text-3xl p-2 hover:text-accent active:text-accent transition-colors"
          >
            <HiX />
          </button>
          
          <div className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xl font-bold uppercase tracking-tighter transition-colors 
                  active:text-accent hover:text-accent`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;