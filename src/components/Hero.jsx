import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import IdentityCard from "./IdentityCard";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Typing animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
      "
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: particle.id % 2 === 0 
                ? 'rgba(168, 85, 247, 0.15)' 
                : 'rgba(59, 130, 246, 0.15)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Glows with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[180px]"
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[180px]"
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: opacity,
          scale: scale,
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <div className="min-h-screen grid lg:grid-cols-2 items-center gap-20 py-20">
          
          {/* LEFT - Hero Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  hover:border-green-400/30
                  transition-colors
                  duration-300
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-green-500
                    animate-pulse
                  "
                />
                <span className="text-sm text-slate-300">Available For Work</span>
              </div>
            </motion.div>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="
                mt-8
                uppercase
                tracking-[5px]
                text-purple-400
                font-medium
              "
            >
              Full Stack Developer
            </motion.p>

            {/* Name with gradient */}
            <motion.h1
              variants={itemVariants}
              className="
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[10rem]
                font-black
                leading-none
                bg-gradient-to-r
                from-white
                via-purple-200
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              SHAZIL.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="
                mt-8
                max-w-xl
                text-slate-400
                text-lg
                leading-8
              "
            >
              Turning ideas into high-performance
              digital products using <span className="text-purple-400 font-medium">React</span>,
              <span className="text-blue-400 font-medium"> ASP.NET</span>, 
              <span className="text-green-400 font-medium"> Node.js</span> and 
              <span className="text-emerald-400 font-medium"> MongoDB</span>.
              <span className="block text-sm text-slate-500 mt-1">
                    — Powered by CHAI... ☕
              </span>
            </motion.p>
            

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  font-semibold
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/20
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Link to="/projects" className="flex items-center gap-2">
                  <span>View Projects</span>
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
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-purple-400/30
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  group
                "
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <FiSend className="group-hover:scale-110 transition-transform" />
                  <span>Say Hello</span>
                </Link>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10"
            >
              <span className="text-xs text-slate-500 uppercase tracking-wider">Connect</span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/MuhammadShazil7"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                    color: "#ffffff",
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/shazil"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                    color: "#0A66C2",
                  }}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  href="mailto:shazil@example.com"
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                    color: "#a855f7",
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <FiMail className="text-xl" />
                </motion.a>
              </div>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mt-8"
            >
              {["React", "ASP.NET", "Node.js", "MongoDB", "TypeScript", "Tailwind"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    borderColor: "rgba(168, 85, 247, 0.5)",
                  }}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-xs
                    text-slate-400
                    transition-all
                    duration-300
                    cursor-default
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT - Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex justify-center lg:justify-end"
          >
            <IdentityCard />
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          z-20
        "
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5 bg-white/5 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-purple-400 to-blue-400"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-[10px] tracking-[4px] text-slate-500 font-light">
          SCROLL
        </span>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none z-10" />
    </section>
  );
}