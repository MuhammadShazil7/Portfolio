// pages/About.jsx
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiCode, FiHeart, FiUsers, FiCoffee, FiBook, FiMusic, 
  FiGlobe, FiTarget, FiUser, FiMail, FiMapPin, FiZap,
  FiAward, FiBriefcase, FiCalendar, FiClock, FiStar,
  FiTrendingUp, FiSmile, FiSun, FiMoon, FiCpu,
  FiActivity, FiBattery,  
} from "react-icons/fi";
import { FaTrophy, FaDumbbell, } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

  // Personal Details
  const personalDetails = [
    { icon: FiUser, label: "Full Name", value: "Muhammad Shazil" },
    //{ icon: FiCalendar, label: "Age", value: "20" },
    { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan" },
    { icon: FiMail, label: "Email", value: "shazilm239@gmail.com" },
    { icon: FiClock, label: "Experience", value: "2+ Years" },
    { icon: FiTarget, label: "Focus", value: "Full Stack Development" },
    { icon: FiTrendingUp, label: "Specialty", value: "MERN & ASP.NET" },
    { icon: FiSmile, label: "Personality", value: "Game Changer" },
  ];

  // Education Details
  const education = [
    {
      degree: "BS Computer Science",
      institution: "Aptech Pakistan",
      period: "2024 - Present",
      description: "Currently pursuing Bachelor's in Computer Science with specialization in Software Engineering and Web Development",
      icon: "🎓",
      achievements: [
        "Dean's List Student",
        "Project Lead in Web Development Course",
        "Completed Advanced Programming Modules"
      ]
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "KENT College",
      period: "2019 - 2021",
      description: "Completed intermediate education with focus on Mathematics, Physics, and Computer Science",
      icon: "📚",
      achievements: [
        "A+ Grade in Computer Science",
        "Participated in programming competitions",
        "Active member of Science Club"
      ]
    },
    {
      degree: "Matriculation (Science)",
      institution: "Top Land School",
      period: "2019",
      description: "Completed secondary education with Science subjects",
      icon: "🏫",
      achievements: [
        "Excellent academic record",
        "Participated in school science exhibitions",
        "Active in extra-curricular activities"
      ]
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "Top Graphic Designer",
      issuer: "Korean Computer Academy",
      year: "2022",
      description: "Recognized for excellence in graphic design, visual communication, and creative design principles",
      icon: "🎨"
    },
    {
      name: "Digital Marketing",
      issuer: "Korean Computer Academy",
      year: "2022",
      description: "Completed comprehensive training in digital marketing strategies, SEO, social media marketing, and content creation",
      icon: "📈"
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Self-Taught Journey",
      year: "2023",
      description: "Built 10+ full-stack applications through self-learning and project-based practice",
      icon: "💻"
    }
  ];

  // Sports & Athletic Achievements
  const sportsAchievements = [
    {
      sport: "🏏 Cricket",
      role: "Batting All-Rounder & Fast Bowler",
      description: "Passionate cricketer with strong batting and fast bowling skills. Love being the game-changer on the field.",
      achievements: [
        "🎯 Batting All-Rounder - Can bat anywhere in the lineup",
        "⚡ Fast Bowler - Clocking 140+ kmph speeds",
        "🏆 Scored half-century in tournament final",
        "💪 Fitness enthusiast with strong athletic ability"
      ]
    },
    {
      sport: "⚽ Football",
      role: "Player / Winger",
      description: "Love playing football for its fast pace and team dynamics. Brings energy and agility to the pitch.",
      achievements: [
        "🔥 Energetic winger with good ball control",
        "🤝 Team player who loves the beautiful game",
        "⚡ Fast on the field with quick reflexes"
      ]
    },
    {
      sport: "🏃 Sprint Racing",
      role: "Sprinter",
      description: "Speed and endurance - loves the thrill of racing against the clock and competitors.",
      achievements: [
        "💨 Fast sprinter with great acceleration",
        "🏁 Competitive spirit in every race",
        "💪 Strong physical conditioning"
      ]
    },
    {
      sport: "🏋️ Gym & Fitness",
      role: "Fitness Enthusiast",
      description: "Dedicated to maintaining peak physical fitness through consistent gym training and discipline.",
      achievements: [
        "💪 120kg+ deadlift — yes, developers lift too",
        "🏋️ 6 days a week gym routine",
        "🔥 Focus on functional fitness and athletic performance"
      ]
    }
  ];

  // Skills
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Angular"],
    backend: ["ASP.NET", "Node.js", "Express", "Python", "PHP", "Laravel"],
    database: ["MongoDB", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
    devops: ["Docker", "Git", "Vercel", "Netlify", "AWS Basics"],
    tools: ["VS Code", "GitHub", "Postman", "Figma", "Chrome DevTools"]
  };

  // Hobbies & Interests
  const hobbies = [
    { name: "Coding", icon: "💻" },
    { name: "Cricket", icon: "🏏" },
    { name: "Football", icon: "⚽" },
    { name: "Sprint Racing", icon: "🏃" },
    { name: "Gym", icon: "🏋️" },
    { name: "Gaming", icon: "🎮" },
    { name: "Music", icon: "🎵" },
    { name: "Reading", icon: "📖" },
    { name: "Traveling", icon: "✈️" },
  ];

  // 🔥 NEW FUN FACTS - SHAZIL EDITION 🔥
  const funFacts = [
    "🏏 I'm a batting all-rounder and fast bowler — I can change the game anytime!",
    "⚡ Once clocked 140+ kmph with the ball in a local match (yes, I bowl fast!)",
    "💻 Built my first full-stack app in 2 weeks while learning React from scratch",
    "☕ I drink 3 cups of CHAI a day — code doesn't write itself!",
    "🏋️ Hit the gym 6 days a week — discipline is everything, whether code or fitness",
    "🏏 Scored a half-century in a cricket tournament final and took 3 wickets!",
    "⚽ Played football for my college team as a winger — speed is my weapon",
    "🚀 Deployed my portfolio 50+ times on Vercel — every time was a learning experience",
    "💪 I can deadlift 180kg — yes, developers lift too!",
    "🏃 I run 5km every morning — code smells better after a run"
  ];

  return (
    <section ref={sectionRef} className="min-h-screen py-20 flex items-center bg-[#050816] px-6 lg:px-10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div style={{ y: titleY }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            className="uppercase tracking-[5px] text-purple-400 font-medium"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ type: "spring" }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            I'm Shazil.
            <br />
            I code.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              I build things that work.
            </span>
          </motion.h2>
        </motion.div>

        {/* Content */}
        <motion.div style={{ y: contentY }} className="space-y-10 mt-8">
          
          {/* Bio Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-slate-400 text-lg leading-8">
                I'm <span className="text-white font-semibold">Muhammad Shazil</span>, a passionate developer from Karachi, Pakistan. 
                I've been coding for <span className="text-purple-400 font-semibold">2+ years</span> and I still get excited 
                when something works on the first try.
              </p>
              <p className="mt-4 text-slate-400 text-lg leading-8">
                I work with <span className="text-cyan-400">React</span>, <span className="text-blue-400">ASP.NET</span>, 
                <span className="text-green-400"> Node.js</span>, and <span className="text-red-400">PHP</span>. 
                But I'm not picky — I'll learn whatever I need to get the job done.
              </p>
              <p className="mt-4 text-slate-400 text-lg leading-8">
                When I'm not coding, you'll find me on the cricket pitch 🏏, playing football ⚽, 
                sprinting 🏃, or hitting the gym 🏋️. I believe the discipline and teamwork from sports 
                make me a better developer too.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                  <FiUser className="text-purple-400" />
                  Personal Details
                </h3>
                <div className="space-y-2">
                  {personalDetails.slice(0, 5).map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <detail.icon className="text-purple-400 text-xs" />
                      <div className="flex-1 flex justify-between">
                        <span className="text-slate-500 text-xs">{detail.label}</span>
                        <span className="text-white text-xs font-medium">{detail.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {personalDetails.slice(5).map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition"
              >
                <div className="flex items-center gap-3">
                  <detail.icon className="text-purple-400" />
                  <div>
                    <p className="text-slate-500 text-[10px]">{detail.label}</p>
                    <p className="text-white text-sm font-medium">{detail.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiBook className="text-purple-400" />
              Education
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{edu.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-white font-semibold">{edu.degree}</h4>
                        <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-purple-400 text-sm">{edu.institution}</p>
                      <p className="text-slate-400 text-sm mt-1">{edu.description}</p>
                      {edu.achievements && (
                        <ul className="mt-2 space-y-0.5">
                          {edu.achievements.map((item, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-center gap-1">
                              <span className="text-purple-400">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiAward className="text-purple-400" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{cert.icon}</div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-white font-semibold">{cert.name}</h4>
                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-purple-400 text-sm">{cert.issuer}</p>
                      <p className="text-slate-400 text-sm mt-1">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sports & Athletic Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaTrophy className="text-purple-400" />
              🏏 Sports & Athletic Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sportsAchievements.map((sport, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{sport.sport.split(' ')[0]}</span>
                    <div>
                      <h4 className="text-white font-semibold">{sport.sport}</h4>
                      <p className="text-purple-400 text-sm">{sport.role}</p>
                      <p className="text-slate-400 text-sm mt-1">{sport.description}</p>
                      <ul className="mt-2 space-y-0.5">
                        {sport.achievements.map((item, i) => (
                          <li key={i} className="text-xs text-slate-500 flex items-center gap-1">
                            <span className="text-purple-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiCode className="text-purple-400" />
              Tech Stack & Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition"
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
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiHeart className="text-purple-400" />
              Hobbies & Interests
            </h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <span className="text-xl mr-2">{hobby.icon}</span>
                  <span className="text-slate-300 text-sm">{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🔥 FUN FACTS - SHAZIL EDITION 🔥 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiStar className="text-purple-400" />
              Fun Facts
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-400/30 transition"
                >
                  <p className="text-slate-300 text-sm">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Currently Section */}
          <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-sm text-purple-400 font-medium">📌 Currently</p>
            <div className="grid md:grid-cols-4 gap-4 mt-3">
              <div>
                <p className="text-xs text-slate-500">Learning</p>
                <p className="text-white font-medium">AI/ML & Go</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Reading</p>
                <p className="text-white font-medium">"The Pragmatic Programmer"</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Building</p>
                <p className="text-white font-medium">Side Project (Coming Soon)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">On the Field</p>
                <p className="text-white font-medium">🏏 Cricket & ⚽ Football & 🏋️ Gym</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
              >
                <span>See My Work</span>
                <span>→</span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition flex items-center gap-2"
              >
                <span>Say Hi 👋</span>
              </motion.button>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}