import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlowBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      
      {/* Dark Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#050816] to-[#0a0a1a]" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[120px]"
        animate={{
          x: `${mousePosition.x - 20}%`,
          y: `${mousePosition.y - 20}%`,
        }}
        transition={{ type: "tween", duration: 0.3 }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{
          x: `${-mousePosition.x / 2}%`,
          y: `${-mousePosition.y / 2}%`,
        }}
        transition={{ type: "tween", duration: 0.5 }}
      />
      
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(white 0px, white 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            transparent 0%, 
            rgba(5, 8, 22, 0.4) 70%,
            #050816 100%
          )`,
        }}
      />
      
    </div>
  );
}