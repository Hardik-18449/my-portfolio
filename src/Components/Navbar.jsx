import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeSpider from './Themespider';

const Navbar = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* 1. THE HANGING SPIDER - Thoda left shift kiya taaki burger se na takraye */}
      <div className="fixed top-0 right-24 md:right-32 z-[70] pointer-events-auto">
        <ThemeSpider isDark={isDark} setIsDark={setIsDark} />
      </div>

      <nav className="fixed top-0 w-full z-[60] h-20 flex items-center justify-between px-6 md:px-16 bg-transparent pointer-events-none">
        {/* LOGO */}
        <span className="font-display text-2xl text-accent cursor-pointer pointer-events-auto">
          HARDIK.PETER
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-all ${isDark ? 'text-white' : 'text-black'} hover:text-accent`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Burger for Mobile - Added pointer-events-auto and high z-index */}
        <div className="flex items-center gap-4 pointer-events-auto z-[90]">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Stop event bubbling
              setIsMenuOpen(true);
            }} 
            className={`md:hidden text-3xl p-2 ${isDark ? 'text-white' : 'text-black'}`}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />

      {/* Mobile Drawer Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 z-[110] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-black'} shadow-2xl`}>
        <div className="p-8 flex flex-col gap-8">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="self-end text-3xl p-2 hover:text-accent transition-colors"
          >
            <HiX />
          </button>
          
          <div className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold uppercase hover:text-accent transition-colors tracking-tighter" 
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