import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-purple-500/5 backdrop-blur-xl p-16 text-center overflow-hidden group"
      >
        
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 rounded-full bg-purple-400/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-blue-400/30"
          animate={{
            y: [0, 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-purple-400/30"
          animate={{
            x: [0, 30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 text-sm font-semibold border border-purple-500/20">
              🚀 Let's Collaborate
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mt-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
          >
            Let's Build Something
            <br />
            <span className="text-white">Great Together</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto"
          >
            Available for freelance and full-time opportunities. 
            Let's create something amazing that makes a difference.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            <div>
              <div className="text-3xl font-black text-purple-400">10+</div>
              <div className="text-slate-500 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">2+</div>
              <div className="text-slate-500 text-sm">Years Exp</div>
            </div>
            <div>
              <div className="text-3xl font-black text-green-400">100%</div>
              <div className="text-slate-500 text-sm">Satisfaction</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <motion.button
              onClick={handleContactClick}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 mt-12 pt-8 border-t border-white/10"
          >
            <a
              href="https://github.com/Muhammadshazil7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mohammad-shazil-153654324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:shazilm239@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <FiMail />
            </a>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}