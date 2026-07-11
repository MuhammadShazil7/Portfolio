// components/FeaturedProjects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiCode, FiStar, FiClock, FiUser, FiTrendingUp } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "FreelancerOS",
    description:
      "A complete operating system for modern freelancers. Manage projects, track time, handle invoices, and streamline your freelance business all in one place.",
    image: "/FOS.jpeg",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    featured: false,
    category: "Full Stack",
    details: {
      year: "2024",
      type: "Web Application",
      status: "In Development",
    },
    features: [
      "Project Management Dashboard",
      "Time Tracking & Invoicing",
      "Client Management System",
      "Real-time Analytics",
    ],
  },
  {
    number: "02",
    title: "Real Estate AI",
    description:
      "AI-powered property platform that uses machine learning to provide intelligent property recommendations, market trend analysis, and predictive property valuations.",
    image: "/REST.jpg",
    stack: ["ASP.NET", "SQL Server", "AI"],
    githubLink: "https://github.com/MuhammadShazil7/Real-Estate-",
    featured: true,
    category: "AI/ML",
    details: {
      year: "2024",
      type: "AI Application",
      status: "Active",
    },
    features: [
      "AI Property Recommendations",
      "Market Trend Analysis",
      "Predictive Valuations",
      "Smart Search & Filtering",
    ],
  },
  {
    number: "03",
    title: "SRS Lab Automation",
    description:
      "A comprehensive laboratory workflow automation system. Manages test requests, patient records, results tracking, and reporting with real-time updates.",
    image: "/LAB.webp",
    stack: ["PHP", "MySQL"],
    githubLink: "https://github.com/MuhammadShazil7/Lab-Test",
    featured: false,
    category: "Backend",
    details: {
      year: "2023",
      type: "Web Application",
      status: "Complete",
    },
    features: [
      "Patient Record Management",
      "Test Request Tracking",
      "Results Management System",
      "Automated Reporting",
    ],
  },
  {
    number: "04",
    title: "Bookly",
    description:
      "A comprehensive book management system for buying, selling, and reviewing books. Features user authentication, book listings, reviews, and inventory management.",
    image: "/bookly.jpg", // Add this image to public folder
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    githubLink: "https://github.com/MuhammadShazil7/Bookly",
    featured: true,
    category: "Web App",
    details: {
      year: "2024",
      type: "Web Application",
      status: "Active",
    },
    features: [
      "Book Listing & Search",
      "Buy & Sell Books",
      "User Reviews & Ratings",
      "Inventory Management",
    ],
  },
  {
    number: "05",
    title: "Job Finder",
    description:
      "A Flutter-based mobile application for job searching and recruitment. Find jobs, apply with one tap, and track your applications in real-time.",
    image: "/jobfinder.jpg", // Add this image to public folder
    stack: ["Flutter", "Dart"],
    githubLink: "https://github.com/MuhammadShazil7/Job_finder",
    featured: false,
    category: "Mobile",
    details: {
      year: "2024",
      type: "Mobile App",
      status: "In Development",
    },
    features: [
      "Job Search & Filtering",
      "One-Click Application",
      "Application Tracking",
      "Saved Jobs",
    ],
  },
  {
    number: "06",
    title: "BooksBound",
    description:
      "A Flutter-based mobile application for book lovers to discover, read, and share their favorite books. Features personalized recommendations and reading lists.",
    image: "/booksbound.jpg", // Add this image to public folder
    stack: ["Flutter", "Dart"],
    githubLink: "https://github.com/MuhammadShazil7/BooksBound",
    featured: false,
    category: "Mobile",
    details: {
      year: "2024",
      type: "Mobile App",
      status: "In Development",
    },
    features: [
      "Book Discovery",
      "Personalized Recommendations",
      "Reading Lists",
      "Book Reviews",
    ],
  },
  {
    number: "09",
    title: "FreelancerHub-WorkSphere",
    description:
      "A complete platform connecting freelancers and clients. Features real-time messaging, project bidding, secure payments, and seamless collaboration.",
    image: "/FRWS.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/MuhammadShazil7/FreelanceHub-WorkSphere",
    featured: true,
    category: "Full Stack",
    details: {
      year: "2024",
      type: "Web Application",
      status: "In Development",
    },
    features: [
      "🔹 Freelancer & Client Profiles",
      "🔹 Admin Panel and Controlls",
      "🔹 Project Posting & Bidding System",
      "💬 Real-time Messaging with Socket.io",
      "💳 Secure Payment Integration",
      "📊 Project Tracking & Analytics",
      "⭐ Review & Rating System",
      "📌 Job Recommendations",
      "🎯 Portfolio Showcase"
    ],
  },
];

// Show only 3 featured projects on home page
const featuredProjects = projects.filter(p => p.featured);

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center lg:text-left"
      >
        <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
          Selected Work
        </p>
        
        <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <p className="text-slate-400 text-lg mt-6 max-w-2xl lg:mx-0 mx-auto">
          Here are some of my best works that showcase my expertise in building 
          modern, scalable web applications.
        </p>
      </motion.div>

      {/* Projects Grid - Only Featured */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-40"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.number}
            variants={itemVariants}
            onHoverStart={() => setHoveredProject(project.number)}
            onHoverEnd={() => setHoveredProject(null)}
            className="relative"
          >
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}>
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
              >
                {!imageLoaded[project.number] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-purple-500/5 animate-pulse" />
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-[500px] object-cover transition duration-700 group-hover:scale-110 ${
                      imageLoaded[project.number] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded({ ...imageLoaded, [project.number]: true })}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/800x500/1a1a2e/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-purple-600 transition-all duration-300"
                    >
                      <FiCode className="text-2xl" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-semibold">
                  {project.category}
                </div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold flex items-center gap-1">
                    <FiStar className="text-yellow-400" /> Featured
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-8 -left-4 text-8xl font-black text-purple-400 select-none pointer-events-none"
                >
                  {project.number}
                </motion.span>
                
                <div className="relative z-10">
                  <span className="text-purple-400 text-sm uppercase tracking-[3px]">
                    Project {project.number}
                  </span>
                  
                  <h3 className="text-5xl font-black mt-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <span className="flex items-center gap-2 text-slate-400">
                      <FiClock className="text-purple-400" />
                      {project.details.year}
                    </span>
                    <span className="flex items-center gap-2 text-slate-400">
                      <FiUser className="text-purple-400" />
                      {project.details.type}
                    </span>
                    <span className="flex items-center gap-2 text-slate-400">
                      <FiTrendingUp className="text-purple-400" />
                      {project.details.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 mt-4 leading-8">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-semibold text-sm mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-purple-400/50 hover:bg-purple-600/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Project Available
                      </span>
                      <span>✨ Fully Responsive</span>
                      <span>🚀 Optimized</span>
                      <span>💎 Modern UI</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
            </div>
            
            {index !== featuredProjects.length - 1 && (
              <div className="absolute -bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            )}
          </motion.div>
        ))}
      </motion.div>
      
      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20"
      >
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-white/5 transition-all duration-300 font-semibold"
        >
          View All Projects
          <FiExternalLink className="group-hover:translate-x-1 transition" />
        </motion.a>
      </motion.div>
      
    </section>
  );
}