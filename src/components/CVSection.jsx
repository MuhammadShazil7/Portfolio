// components/CVSection.jsx
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FiDownload, 
  FiEye, 
  FiFileText, 
  FiBriefcase, 
  FiAward,
  FiBook,
  FiCode,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiHeart,
  FiZap,
  FiTarget,
  FiClock,
  FiServer,
  FiDatabase,
  FiBox
} from "react-icons/fi";
import { 
  FaReact, 
  FaNodeJs, 
  FaLaravel,
  FaAngular,
  FaPhp,
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiGraphql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiDotnet
} from "react-icons/si";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CVSection() {
  const sectionRef = useRef(null);
  const cvRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("experience");
  const [isDownloading, setIsDownloading] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // Personal Info
  const personalInfo = [
    { icon: FiUser, label: "Full Name", value: "Muhammad Shazil" },
    { icon: FiMail, label: "Email", value: "shazilm239@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+92 123 4567890" },
    { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan" },
    { icon: FiTarget, label: "Status", value: "Open to Opportunities" },
    { icon: FiClock, label: "Experience", value: "2+ Years" },
  ];

  // Expanded Skills
  const skills = {
    frontend: [
      { name: "React/Next.js", level: 90, icon: FaReact },
      { name: "Angular", level: 75, icon: FaAngular },
      { name: "TypeScript", level: 85, icon: SiTypescript },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
      { name: "HTML/CSS", level: 95, icon: FiCode },
    ],
    backend: [
      { name: "ASP.NET Core", level: 85, icon: SiDotnet },
      { name: "Node.js/Express", level: 88, icon: FaNodeJs },
      { name: "Laravel (PHP)", level: 78, icon: FaLaravel },
      { name: "PHP", level: 80, icon: FaPhp },
      { name: "REST APIs", level: 90, icon: SiExpress },
      { name: "GraphQL", level: 70, icon: SiGraphql },
    ],
    database: [
      { name: "MongoDB", level: 85, icon: SiMongodb },
      { name: "MySQL", level: 82, icon: SiMysql },
      { name: "PostgreSQL", level: 78, icon: SiPostgresql },
      { name: "SQL Server", level: 80, icon: FiDatabase },
      { name: "Redis", level: 70, icon: SiRedis },
      { name: "Prisma/ORM", level: 75, icon: SiPrisma },
    ],
    devops: [
      { name: "Docker", level: 75, icon: FaDocker },
      { name: "Git/GitHub", level: 90, icon: FaGitAlt },
      { name: "Vercel", level: 82, icon: SiVercel },
      { name: "Netlify", level: 80, icon: SiNetlify },
      { name: "Firebase", level: 78, icon: SiFirebase },
    ],
    programming: [
      { name: "C#", level: 80, icon: SiDotnet },
      { name: "Java", level: 75, icon: FaJava },
      { name: "Python", level: 72, icon: FaPython },
      { name: "JavaScript", level: 92, icon: FiCode },
    ],
  };

  // Experience
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Built full-stack web applications using React, Node.js, MongoDB, and ASP.NET Core",
        "Developed RESTful APIs and integrated third-party services",
        "Implemented responsive UI designs with Tailwind CSS and Material-UI",
        "Collaborated with clients to deliver scalable solutions on time",
        "Managed deployment and hosting using Vercel and Netlify"
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Docker"],
    },
    {
      title: "Web Developer Intern",
      company: "Tech Solutions Pakistan",
      period: "2022 - 2023",
      location: "Karachi, Pakistan",
      description: [
        "Assisted in developing enterprise web applications with ASP.NET Core",
        "Worked with SQL Server and Entity Framework for data management",
        "Fixed bugs and optimized application performance",
        "Participated in daily standups, code reviews, and agile sprints",
        "Created technical documentation for internal use"
      ],
      tech: ["ASP.NET Core", "SQL Server", "C#", "JavaScript", "Git"],
    },
    {
      title: "Junior Developer",
      company: "Digital Innovations Labs",
      period: "2021 - 2022",
      location: "Karachi, Pakistan",
      description: [
        "Developed PHP/Laravel applications for various clients",
        "Implemented MySQL databases and optimized queries",
        "Created responsive web interfaces using Bootstrap",
        "Integrated payment gateways and third-party APIs"
      ],
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    },
  ];

  // Education
  const education = [
    {
      degree: "BS Computer Science",
      institution: "Aptech Pakistan",
      period: "2025 - Present",
      location: "Karachi, Pakistan",
      description: "Pursuing Bachelor's in Computer Science with focus on Software Engineering, Web Development, and Data Science",
      achievements: [
        "Dean's List Student",
        "Project Lead in Web Development Course",
        "Completed Advanced Programming Modules"
      ]
    },
    {
      degree: "Diploma in Advance Software Engineering",
      institution: "Aptech Pakistan",
      period: "2024 - Present",
      location: "Karachi, Pakistan",
      description: "Comprehensive program covering Advance software development, database management, and web technologies",
      achievements: [
        "Soon Graduated with Distinction",
        "Built 5+ full-stack projects",
        "Best Final Year Project Award"
      ]
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "KENT College",
      period: "2019 - 2021",
      location: "Karachi, Pakistan",
      description: "Completed intermediate education in Pre-Engineering",
      achievements: [
        "Got passed out in Pre-Engineering",
        "Participated in programming competitions"
      ]
    },
  ];

  // Certifications
  const certifications = [
    { 
      name: "React Developer Certification", 
      issuer: "Aptech Pakistan", 
      year: "2025",
      icon: FaReact
    },
    { 
      name: "JavaScript Advanced", 
      issuer: "Aptech Pakistan", 
      year: "2024",
      icon: FiCode
    },
    { 
      name: "MongoDB Developer", 
      issuer: "Aptech Pakistan", 
      year: "2025",
      icon: SiMongodb
    },
    { 
      name: "ASP.NET Core Web Development", 
      issuer: "Aptech Pakistan", 
      year: "2024",
      icon: SiDotnet
    },
    { 
      name: "Laravel Fundamentals", 
      issuer: "Aptech Pakistan", 
      year: "2024",
      icon: FaLaravel
    },
    { 
      name: "Responsive Web Design", 
      issuer: "Aptech Pakistan", 
      year: "2023",
      icon: SiTailwindcss
    },
  ];

  // Languages
  const languages = [
    { name: "Urdu", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional Working", proficiency: 85 },
    { name: "Sindhi", level: "Conversational", proficiency: 50 },
    { name: "Turkish", level: "Conversational", proficiency: 40 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = cvRef.current;
      
      // Create a clone for PDF generation with white background
      const clone = element.cloneNode(true);
      clone.style.transform = 'scale(1)';
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.width = '1000px';
      clone.style.background = '#ffffff';
      clone.style.padding = '40px';
      clone.style.borderRadius = '0';
      clone.style.color = '#1a1a2e';
      
      // Override dark styles for PDF
      const allElements = clone.querySelectorAll('*');
      allElements.forEach(el => {
        // Remove dark backgrounds
        if (el.style.backgroundColor === 'rgba(255, 255, 255, 0.05)' ||
            el.style.backgroundColor === 'rgba(255, 255, 255, 0.03)' ||
            el.style.background === 'rgba(255, 255, 255, 0.05)' ||
            el.style.background === 'rgba(255, 255, 255, 0.03)') {
          el.style.backgroundColor = '#f8f9fa';
        }
        
        // Change text colors to dark
        if (el.style.color === '#ffffff' || el.style.color === 'white') {
          el.style.color = '#1a1a2e';
        }
        if (el.style.color === '#94a3b8' || el.style.color === 'rgb(148, 163, 184)') {
          el.style.color = '#64748b';
        }
        if (el.style.color === '#e2e8f0') {
          el.style.color = '#334155';
        }
      });
      
      document.body.appendChild(clone);
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        backgroundColor: '#ffffff',
        allowTaint: true,
        useCORS: true,
        logging: false,
        width: 1000,
        height: clone.scrollHeight,
      });
      
      document.body.removeChild(clone);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('Shazil_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
    setIsDownloading(false);
  };

  const handlePrint = () => {
    const printContents = cvRef.current.cloneNode(true);
    const originalContents = document.body.innerHTML;
    
    // Create print-friendly styles
    const styles = `
      * { color: #1a1a2e !important; background: white !important; }
      .bg-white\\/5, .bg-white\\/10, .bg-white\\/20 { background: #f8f9fa !important; }
      .text-white { color: #1a1a2e !important; }
      .text-slate-400 { color: #64748b !important; }
      .text-purple-400 { color: #7c3aed !important; }
      .border-white\\/10 { border-color: #e2e8f0 !important; }
      .backdrop-blur-xl { backdrop-filter: none !important; }
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head><title>Shazil CV</title></head>
        <style>${styles}</style>
        <body style="padding:40px;font-family:Arial,sans-serif;">${printContents.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case "experience":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{exp.title}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-2">{exp.location}</p>
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400 text-xs mt-1">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-blue-400">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-2">{edu.location}</p>
                <p className="text-slate-300 text-sm mb-3">{edu.description}</p>
                {edu.achievements && (
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-green-400">
                        <FiCheckCircle className="text-xs" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        );
      
      case "skills":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <h4 className="text-white font-semibold mb-4 capitalize flex items-center gap-2">
                  <FiZap className="text-purple-400" />
                  {category}
                </h4>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-slate-300 flex items-center gap-2">
                          <skill.icon className="text-purple-400 text-xs" />
                          {skill.name}
                        </span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      
      case "certifications":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <cert.icon className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{cert.name}</h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mt-1">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-[#050816] px-6 lg:px-10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            className="text-purple-400 uppercase tracking-[5px] text-sm font-medium"
          >
            Resume / CV
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="text-5xl md:text-6xl font-black mt-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
          >
            My CV / Resume
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            A comprehensive overview of my skills, experience, and qualifications
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <motion.button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
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
              "
            >
              <FiDownload />
              {isDownloading ? 'Generating...' : 'Download CV'}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.button>

            <motion.button
              onClick={handlePrint}
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
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
              <FiEye />
              Print / Preview
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["experience", "education", "skills", "certifications"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-purple-400/50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* CV Content Grid - WITH REF FOR PDF */}
        <div ref={cvRef} className="bg-transparent">
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >

            {/* Left Column - Personal Info */}
            <div className="lg:col-span-1 space-y-6">

              {/* Personal Info Card */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <FiUser className="text-purple-400" />
                  Personal Info
                </h3>
                <div className="space-y-3">
                  {personalInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <info.icon className="text-purple-400 text-sm" />
                      <div>
                        <p className="text-slate-500 text-xs">{info.label}</p>
                        <p className="text-white text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <FiGlobe className="text-purple-400" />
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">{lang.name}</span>
                        <span className="text-slate-400">{lang.level}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { value: "15+", label: "Projects", icon: FiCode },
                  { value: "2+", label: "Years", icon: FiClock },
                  { value: "10+", label: "Clients", icon: FiUser },
                  { value: "100%", label: "Commitment", icon: FiHeart },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                    <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                      <stat.icon className="text-xs" />
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Columns - Dynamic Content */}
            <div className="lg:col-span-2">
              {renderContent()}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}