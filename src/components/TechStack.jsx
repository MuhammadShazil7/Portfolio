import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  SiReact,
  SiDotnet,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiVercel,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: 90,
    description: "Building modern UIs with hooks, context, and component architecture",
    category: "Frontend",
    years: 2,
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: "#DD0031",
    level: 75,
    description: "Building enterprise-grade single-page applications with TypeScript",
    category: "Frontend",
    years: 1,
  },
  {
    name: "ASP.NET",
    icon: SiDotnet,
    color: "#512BD4",
    level: 85,
    description: "RESTful APIs and enterprise applications with .NET Core",
    category: "Backend",
    years: 1.5,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: 88,
    description: "Scalable backend services and API development",
    category: "Backend",
    years: 2,
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
    level: 80,
    description: "Server-side scripting and web application development",
    category: "Backend",
    years: 1.5,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
    level: 78,
    description: "PHP framework for building robust web applications",
    category: "Backend",
    years: 1,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 85,
    description: "NoSQL database design and aggregation pipelines",
    category: "Database",
    years: 2,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    level: 82,
    description: "Relational database management and complex queries",
    category: "Database",
    years: 2,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: 92,
    description: "Utility-first CSS framework for rapid UI development",
    category: "Frontend",
    years: 1.5,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 90,
    description: "ES6+, async programming, and functional paradigms",
    category: "Frontend",
    years: 2.5,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 85,
    description: "Type-safe JavaScript for scalable applications",
    category: "Frontend",
    years: 1.5,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    level: 87,
    description: "Backend framework for Node.js applications",
    category: "Backend",
    years: 2,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    level: 80,
    description: "React framework for SSR and static sites",
    category: "Frontend",
    years: 1,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#2D3748",
    level: 75,
    description: "ORM for Node.js and TypeScript",
    category: "Database",
    years: 0.5,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    level: 78,
    description: "Advanced relational database management",
    category: "Database",
    years: 1,
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    level: 70,
    description: "In-memory data structure store for caching",
    category: "Database",
    years: 0.5,
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    level: 75,
    description: "Containerization for consistent development",
    category: "DevOps",
    years: 1,
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: 88,
    description: "Version control and collaborative development",
    category: "DevOps",
    years: 2.5,
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    level: 82,
    description: "Platform for deploying frontend applications",
    category: "DevOps",
    years: 1.5,
  },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  // Get unique categories
  const categories = ["all", ...new Set(techs.map(tech => tech.category))];
  
  // Filter techs based on selected category
  const filteredTechs = filter === "all" 
    ? techs 
    : techs.filter(tech => tech.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Floating particles background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <section ref={sectionRef} className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
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

      {/* Header with parallax */}
      <motion.div
        style={{
          y: headerY,
          opacity: headerOpacity,
          scale: scale,
        }}
        className="mb-16 text-center lg:text-left relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 uppercase tracking-[4px] text-sm mb-4"
        >
          My Skills
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
        >
          Technologies
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto lg:mx-0"
        >
          Tools and technologies I work with to build modern, scalable applications
        </motion.p>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto lg:mx-0 mt-4"
        />
      </motion.div>

      {/* Category Filter with slide animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start relative z-10"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-400/50 hover:bg-white/10"
            }`}
          >
            {category === "all" ? "All" : category}
          </motion.button>
        ))}
      </motion.div>

      {/* Tech Grid with staggered animation */}
      <motion.div
        key={filter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {filteredTechs.length > 0 ? (
          filteredTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
              
              <div className="relative z-10">
                {/* Icon and Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: tech.color }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <tech.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Years Badge */}
                  <motion.div 
                    className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    whileHover={{ scale: 1.1, borderColor: "#a855f7" }}
                  >
                    {tech.years}+ yrs
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 min-h-[40px]">
                  {tech.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Proficiency</span>
                    <motion.span 
                      className="text-purple-400 font-semibold"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {tech.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 relative"
                    >
                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs">
                  <motion.span 
                    className="text-slate-500 flex items-center gap-1"
                    whileHover={{ color: "#a855f7" }}
                  >
                    ⚡ {Math.floor(tech.level * 0.3 + 3)} projects
                  </motion.span>
                  <motion.span 
                    className="text-slate-500 flex items-center gap-1"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    🚀 {tech.level > 80 ? "Expert" : tech.level > 70 ? "Advanced" : "Intermediate"}
                  </motion.span>
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-purple-500/50 text-xs whitespace-nowrap shadow-lg shadow-purple-500/20"
                >
                  <span className="font-bold text-white">{tech.name}</span>
                  <span className="text-slate-400"> • </span>
                  <span className="text-purple-400">{tech.level}% proficient</span>
                </motion.div>
              )}
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-slate-400 py-12"
          >
            No technologies found in this category
          </motion.div>
        )}
      </motion.div>

      {/* Stats Summary with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      >
        {[
          { number: techs.length, label: "Technologies", color: "purple" },
          { number: "2+", label: "Years Experience", color: "blue" },
          { number: "15+", label: "Projects", color: "cyan" },
          { number: "100%", label: "Commitment", color: "green" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
            }}
            className="p-6 text-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30"
          >
            <motion.div 
              className={`text-4xl font-black text-${stat.color}-400`}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}