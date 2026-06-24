import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiZap, 
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiStar
} from "react-icons/fi";
import { 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiDotnet
} from "react-icons/si";

export default function IdentityCard() {
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  const stats = [
    { value: "10+", label: "Projects", icon: FiCode },
    { value: "2+", label: "Years", icon: FiClock },
    { value: "100%", label: "Passion", icon: FiZap },
  ];

  return (
    <motion.div animate={floatAnimation} className="relative">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1200}
        scale={1.03}
        transitionSpeed={1500}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#a855f7"
        gyroscope={true}
      >
        <div className="
          relative
          w-[320px]
          h-[480px]
          md:w-[380px]
          md:h-[540px]
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/5
          to-transparent
          backdrop-blur-2xl
          overflow-hidden
          shadow-2xl
          shadow-purple-500/10
        ">
          {/* Glow Orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-[100px]" />

          {/* Profile Image Section - UPDATED */}
          <div className="relative w-full h-44 md:h-52 overflow-hidden">
            {/* Replace /profile.jpg with your actual image path */}
            <img 
              src="/PFP.jpg" 
              alt="Shazil - Full Stack Developer"
              className="w-full h-full object-cover object-top"
            />
            
            {/* Gradient overlay - makes it blend smoothly */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
            
            {/* Status Badge on Image */}
            <div className="absolute bottom-3 left-4 px-3 py-1.5 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Available
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 pb-6 pt-2">
            
            {/* Name & Title */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  SHAZIL
                </h2>
                <p className="text-slate-400 text-sm">Full Stack Developer</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-purple-300">
                <FiStar className="inline text-yellow-400 mr-1" />
                Pro
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-2 text-center border border-white/5">
                  <div className="text-base font-bold text-purple-400">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
                    <stat.icon className="text-xs" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Tech Stack</p>
              <div className="grid grid-cols-3 gap-1.5">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(168, 85, 247, 0.15)",
                      borderColor: "rgba(168, 85, 247, 0.3)",
                    }}
                    className="
                      bg-white/5 
                      rounded-xl 
                      p-2 
                      border 
                      border-white/5
                      flex
                      items-center
                      justify-center
                      gap-1
                      transition-all
                      duration-300
                      group
                    "
                  >
                    <tech.icon 
                      className="text-xs transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: tech.color }} 
                    />
                    <span className="text-[9px] text-slate-400 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <p className="text-[10px] text-slate-500">
                Available For Work
              </p>
              <div className="flex items-center gap-2">
                <motion.a
                  href="https://github.com/Muhammadshazil7"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -2, color: "#fff" }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiGithub className="text-sm" />
                </motion.a>
                <motion.a
                  href="https://pk.linkedin.com/in/mohammad-shazil-153654324"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -2, color: "#0A66C2" }}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin className="text-sm" />
                </motion.a>
                <motion.a
                  href="mailto:shazilm239@gmail.com"
                  whileHover={{ scale: 1.2, y: -2, color: "#a855f7" }}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <FiMail className="text-sm" />
                </motion.a>
              </div>
            </div>

          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}