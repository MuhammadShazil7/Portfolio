import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlowBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    // Color cycling animation
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 50);
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      
      {/* Dynamic Gradient Base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsla(${hue}, 70%, 50%, 0.15) 0%,
            hsla(${hue + 60}, 70%, 50%, 0.1) 50%,
            #050816 100%
          )`,
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Rotating Orbs */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        animate={{
          rotate: 360,
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
          background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.15), transparent)`,
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { type: "tween", duration: 0.3 },
          y: { type: "tween", duration: 0.3 },
        }}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        animate={{
          rotate: -360,
          background: `radial-gradient(circle, hsla(${hue + 120}, 80%, 60%, 0.1), transparent)`,
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
        style={{ left: "20%", top: "20%" }}
      />
      
      {/* Matrix-style Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Sparkle Effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            background: `hsla(${hue + i * 30}, 100%, 70%, 0.8)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
    </div>
  );
}