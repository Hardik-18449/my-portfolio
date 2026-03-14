import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = ({ isDark }) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to disable sticky hover links
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    
    checkMobile();
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  // Spiderman Red for Dark, Black for Light
  const webColor = isDark ? "#E23636" : "#000000";

  return (
    <Particles
      id="tsparticles"
      key={isDark ? "dark-web-bold" : "light-web-bold"}
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          color: { value: webColor },
          links: {
            enable: true,
            color: webColor,
            distance: 220, 
            opacity: 0, 
            width: 1, 
          },
          move: { 
            enable: true, 
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" } 
          },
          number: { 
            value: isMobile ? 60 : 120, // Mobile par nodes kam kar diye performance ke liye
            density: { enable: true, width: 1920, height: 1080 } 
          },
          opacity: { value: 0 }, 
          shape: { type: "circle" },
          size: { value: 0 }, 
        },
        interactivity: {
          events: { 
            // On Mobile, we disable grab mode to prevent sticky lines
            onHover: { 
              enable: !isMobile, 
              mode: "grab" 
            },
            onClick: { enable: true, mode: "push" } 
          },
          modes: { 
            grab: { 
              distance: 280, 
              links: { 
                opacity: isDark ? 0.8 : 0.5, 
                color: webColor,
                width: 3 
              } 
            },
            push: { quantity: 4 }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;