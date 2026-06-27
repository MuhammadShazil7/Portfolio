import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom"; 
import { 
  FiCode, 
  FiAward, 
  FiUsers, 
  FiZap, 
  FiBriefcase, 
  FiGithub,
  FiHeart,
  FiCoffee,
  FiBook,
  FiMusic,
  FiGlobe,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const statsY = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [40, 0, 0, -40]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0]);

  const stats = [
    {
      number: "10+",
      label: "Projects Built",
      icon: FiCode,
      color: "from-purple-400 to-blue-400",
      delay: 0.1,
    },
    {
      number: "5+",
      label: "Technologies",
      icon: FiZap,
      color: "from-cyan-400 to-blue-400",
      delay: 0.2,
    },
    {
      number: "100%",
      label: "Passion",
      icon: FiHeart,
      color: "from-pink-400 to-purple-400",
      delay: 0.3,
    },
    {
      number: "24/7",
      label: "Availability",
      icon: FiUsers,
      color: "from-orange-400 to-red-400",
      delay: 0.4,
    },
  ];

  // Personal details
  const personalInfo = [
    { icon: FiUser, label: "Name", value: "Muhammad Shazil" },
    { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan" },
    { icon: FiMail, label: "Email", value: "shazilm239@gmail.com" },
    { icon: FiBriefcase, label: "Experience", value: "2+ Years" },
    { icon: FiTarget, label: "Focus", value: "Full Stack Development" },
    { icon: FiTrendingUp, label: "Specialty", value: "MERN & ASP.NET" },
  ];

  // Skills sections
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    backend: ["ASP.NET", "Node.js", "Express", "Python", "PHP"],
    database: ["MongoDB", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
    devops: ["Docker", "Git", "Vercel", "Netlify", "AWS Basics"],
  };

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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="
        min-h-screen
        py-20
        flex
        items-center
        bg-[#050816]
        px-6
        lg:px-10
        relative
        overflow-hidden
      "
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header with parallax */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="
              uppercase
              tracking-[5px]
              text-purple-400
              font-medium
            "
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="
              mt-6
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-tight
            "
          >
            I DON'T JUST BUILD
            <br />
            WEBSITES.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              I BUILD EXPERIENCES.
            </span>
          </motion.h2>
        </motion.div>

        {/* Content with parallax */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="grid lg:grid-cols-3 gap-12 mt-10"
        >
          {/* Left column - Main bio */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              className="
                text-slate-400
                text-lg
                leading-8
              "
            >
              I'm <span className="text-white font-semibold">Muhammad Shazil</span>, a passionate 
              <span className="text-purple-400 font-semibold"> Full Stack Developer</span> from Karachi, Pakistan. 
              I specialize in building modern, scalable web applications that deliver exceptional user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              className="
                mt-4
                text-slate-400
                text-lg
                leading-8
              "
            >
              With <span className="text-white font-semibold">2+ years of experience</span> in the industry, 
              I've worked on diverse projects ranging from e-commerce platforms to AI-powered applications. 
              My expertise lies in the <span className="text-cyan-400 font-semibold">MERN stack</span> and 
              <span className="text-blue-400 font-semibold"> ASP.NET</span>, with a strong focus on writing 
              clean, maintainable code and following best practices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              className="
                mt-4
                text-slate-400
                text-lg
                leading-8
              "
            >
              I believe in <span className="text-purple-400 font-semibold">continuous learning</span> and 
              staying updated with the latest technologies. Whether it's building RESTful APIs, designing 
              responsive UIs, or optimizing database performance, I'm always excited to tackle new challenges 
              and create solutions that make a difference.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : { width: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-6"
            />

            {/* Personal Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {personalInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <info.icon className="text-purple-400 text-lg" />
                  <div>
                    <p className="text-slate-500 text-xs">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Quick fact / Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
              <h3 className="text-white font-bold text-lg mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <FiCoffee className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Fuel</p>
                    <p className="text-white font-medium">Coffee & Code</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <FiBook className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Learning</p>
                    <p className="text-white font-medium">AI & Cloud Computing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <FiMusic className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Vibe</p>
                    <p className="text-white font-medium">Lo-Fi & Ambient</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <FiGlobe className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Working</p>
                    <p className="text-white font-medium">Remote Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub stats */}
            <motion.a
              href="https://github.com/MuhammadShazil7"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="block p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FiGithub className="text-2xl text-white" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-slate-400 text-sm">@MuhammadShazil7</p>
                  </div>
                </div>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          style={{
            opacity: statsOpacity,
            y: statsY,
          }}
          className="mt-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-6"
          >
            Tech Stack
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="p-4 rounded-2xl border border-white/10 bg-white/5"
              >
                <h4 className="text-purple-400 font-medium text-sm uppercase tracking-wider mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats with parallax */}
        <motion.div
          style={{
            opacity: statsOpacity,
            y: statsY,
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="
            mt-12
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.15)",
              }}
              className="
                p-6
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-white/5
                to-transparent
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/30
                group
                relative
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-slate-400 mt-2 text-sm flex items-center gap-2">
                  <stat.icon className="text-purple-400 text-sm" />
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - FIXED with Link component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-blue-600
                text-white
                font-medium
                transition-all
                duration-300
                shadow-lg
                shadow-purple-500/20
                group
              "
            >
              <span>View My Work</span>
              <motion.span
                animate={{
                  x: [0, 6, 0],
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
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                border
                border-white/20
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white/5
              "
            >
              <span>Let's Connect</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}