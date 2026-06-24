// components/WhatsAppButton.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX, FiSend, FiClock, FiCheckCircle, FiMessageCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = "+923131267143"; // Replace with your WhatsApp number
  const message = "Hi! I'm interested in working with you.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-2 w-48 p-3 rounded-xl bg-[#1a1a2e] border border-green-500/30 shadow-xl"
          >
            <p className="text-white text-sm font-medium">Chat with me! 💬</p>
            <p className="text-green-400 text-xs mt-1">Available 24/7</p>
            <div className="absolute -bottom-2 right-4 w-3 h-3 bg-[#1a1a2e] border-r border-b border-green-500/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="absolute bottom-20 right-0 w-72 p-6 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] border border-green-500/20 shadow-2xl shadow-green-500/10 mb-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-green-500/20">
                <FaWhatsapp className="text-2xl text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Chat with Me</h3>
                <p className="text-green-400 text-xs">Usually replies within 5 mins</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiClock className="text-green-400" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiCheckCircle className="text-green-400" />
                <span>Quick responses</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiSend className="text-green-400" />
                <span>Direct message</span>
              </div>
            </div>

            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-green-600
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-green-500/25
              "
            >
              <FaWhatsapp />
              <span>Start Chat</span>
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.button>

            <p className="text-center text-slate-500 text-xs mt-3">
              Click to open WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative
          w-14
          h-14
          rounded-full
          bg-gradient-to-r
          from-green-500
          to-green-600
          shadow-2xl
          shadow-green-500/40
          flex
          items-center
          justify-center
          text-3xl
          text-white
          transition-all
          duration-300
          hover:shadow-2xl
          hover:shadow-green-500/60
          group
        "
      >
        {/* Pulse animation ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Second pulse ring for double effect */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {isOpen ? (
          <FiX className="relative z-10 text-2xl" />
        ) : (
          <FaWhatsapp className="relative z-10" />
        )}

        {/* Notification dot */}
        <motion.span
          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#050816]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </div>
  );
}