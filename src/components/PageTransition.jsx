import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PageTransition({ children }) {
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    // Start exit animation
    controls.start("exit");
    
    // After exit, start enter animation
    const timer = setTimeout(() => {
      controls.start("animate");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 origin-left z-50"
      />

      {/* Page Content */}
      <motion.div
        key={location.pathname}
        initial="initial"
        animate={controls}
        exit="exit"
        variants={{
          initial: { opacity: 0, y: 30, filter: "blur(5px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: { opacity: 0, y: -30, filter: "blur(5px)" },
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}