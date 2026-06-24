import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool, FiZap } from "react-icons/fi";

const skillsData = [
  {
    category: "Frontend Development",
    icon: FiLayout,
    iconName: "FiLayout",
    color: "#a855f7",
    skills: [
      { name: "React.js", percentage: 90, description: "Hooks, Context, Redux, Next.js" },
      { name: "JavaScript/TypeScript", percentage: 88, description: "ES6+, Types, Generics" },
      { name: "HTML5/CSS3", percentage: 92, description: "Semantic, Flex, Grid, Animations" },
      { name: "Tailwind/Bootstrap", percentage: 90, description: "Utility-first, Responsive" },
    ]
  },
  {
    category: "Backend Development",
    icon: FiServer,
    iconName: "FiServer",
    color: "#3b82f6",
    skills: [
      { name: "Node.js/Express", percentage: 85, description: "REST APIs, Middleware, Auth" },
      { name: "ASP.NET Core", percentage: 80, description: "Web API, MVC, Entity Framework" },
      { name: "Python", percentage: 75, description: "Flask, Django, Scripts" },
      { name: "GraphQL", percentage: 70, description: "Apollo, Queries, Mutations" },
    ]
  },
  {
    category: "Database & Cloud",
    icon: FiDatabase,
    iconName: "FiDatabase",
    color: "#10b981",
    skills: [
      { name: "MongoDB", percentage: 85, description: "Aggregation, Indexing, Atlas" },
      { name: "PostgreSQL", percentage: 80, description: "Joins, Views, Optimization" },
      { name: "Firebase", percentage: 75, description: "Auth, Firestore, Storage" },
      { name: "Docker", percentage: 70, description: "Containers, Compose, Deployment" },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: FiTool,
    iconName: "FiTool",
    color: "#ef4444",
    skills: [
      { name: "Git/GitHub", percentage: 90, description: "Branching, PRs, Actions" },
      { name: "VS Code", percentage: 95, description: "Extensions, Debugging, Shortcuts" },
      { name: "Figma", percentage: 75, description: "Prototyping, Components" },
      { name: "Vercel/Netlify", percentage: 85, description: "Deployment, CI/CD" },
    ]
  },
];

const RadialProgress = ({ percentage, color, size = 120 }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="8"
      />
      {/* Progress circle */}
      <motion.circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        strokeDasharray={circumference}
      />
      {/* Percentage text */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="bold"
        className="transform rotate-90"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const currentCategory = skillsData[activeCategory];
  const CurrentIcon = currentCategory.icon;

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl absolute left-1/2 -translate-x-1/2 -mt-8"
        />
        <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4 relative">
          Technical Proficiency
        </p>
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
          My technical toolkit for building exceptional digital experiences
        </p>
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {skillsData.map((category, idx) => {
          const CategoryIcon = category.icon;
          return (
            <motion.button
              key={category.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-400/50"
              }`}
            >
              <CategoryIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.category}</span>
              <span className="sm:hidden">{category.category.split(" ")[0]}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Active Category Display */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Left Side - Category Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${currentCategory.color}20` }}
            >
              <CurrentIcon className="w-8 h-8" style={{ color: currentCategory.color }} />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              {currentCategory.category}
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              {activeCategory === 0 && "Expertise in building responsive, interactive user interfaces with modern frameworks and libraries."}
              {activeCategory === 1 && "Experience in building robust server-side applications, REST APIs, and microservices."}
              {activeCategory === 2 && "Proficient in database design, optimization, and cloud deployment strategies."}
              {activeCategory === 3 && "Skilled in version control, containerization, and modern development workflows."}
            </p>

            {/* Experience Level */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Overall Proficiency</span>
                <span className="text-purple-400">
                  {Math.round(currentCategory.skills.reduce((acc, s) => acc + s.percentage, 0) / currentCategory.skills.length)}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round(currentCategory.skills.reduce((acc, s) => acc + s.percentage, 0) / currentCategory.skills.length)}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <FiZap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold">Did You Know?</span>
            </div>
            <p className="text-sm text-slate-400">
              {activeCategory === 0 && "React was created by Jordan Walke at Facebook and was first deployed on Facebook's newsfeed in 2011!"}
              {activeCategory === 1 && "Node.js was the first JavaScript runtime to enable JS on servers, released in 2009 by Ryan Dahl!"}
              {activeCategory === 2 && "MongoDB was developed in 2007 by 10gen (now MongoDB Inc.) and is a leading NoSQL database!"}
              {activeCategory === 3 && "Git was created by Linus Torvalds in 2005 for Linux kernel development!"}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Skills Grid with Radial Progress */}
        <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-6">
          {currentCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-400/50 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <RadialProgress 
                  percentage={skill.percentage} 
                  color={currentCategory.color}
                  size={100}
                />
              </div>
              
              <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
              <p className="text-xs text-slate-500">{skill.description}</p>
              
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 30px ${currentCategory.color}20` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Skills Heatmap / Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-20 pt-8 border-t border-white/10"
      >
        <h4 className="text-center text-sm uppercase tracking-[3px] text-slate-500 mb-8">
          Technology Cloud
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind",
            "JavaScript", "Python", "Git", "Docker", "PostgreSQL", "GraphQL",
            "Next.js", "Firebase", "Figma", "VS Code", "REST APIs", "Jest"
          ].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + idx * 0.02 }}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 cursor-default transition-all duration-300 hover:border-purple-400/50"
              style={{
                fontSize: `${12 + (Math.random() * 8)}px`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          Let's Work Together
          <FiZap className="w-4 h-4" />
        </a>
      </motion.div>

    </section>
  );
}