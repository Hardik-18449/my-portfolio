import React, { useEffect, useState } from 'react';
import SpiderIcon from '../assets/spider.svg'; 

const CustomCursor = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => setIsClicked(true);
    const mouseUp = () => setIsClicked(false);

    const checkPointer = () => {
      const hoveredElement = document.querySelectorAll(':hover');
      const lastElement = hoveredElement[hoveredElement.length - 1];
      if (lastElement) {
        const cursorType = window.getComputedStyle(lastElement).cursor;
        setIsPointer(cursorType === 'pointer');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mouseover', checkPointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mouseover', checkPointer);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        // Smooth movement ke liye translate use kar rahe hain
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        transition: 'transform 0.05s linear', 
      }}
    >
      <img
        src={SpiderIcon}
        alt="spider-cursor"
        className={`w-10 h-10 transition-all duration-200 ease-out ${
          isPointer ? 'scale-150 rotate-[20deg]' : 'scale-100'
        } ${isClicked ? 'scale-75 opacity-80' : 'scale-100'}`}
        style={{
          // Agar SVG black hai aur tu use Red banana chahta hai dark mode mein:
          filter: isDark 
            ? 'invert(27%) sepia(91%) saturate(2352%) hue-rotate(346deg) brightness(91%) contrast(93%)' 
            : 'none',
        }}
      />
    </div>
  );
};

export default CustomCursor;