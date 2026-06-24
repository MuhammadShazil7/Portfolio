// components/Footer.jsx
import { Link } from "react-router-dom";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiTwitter, 
  FiInstagram,
  FiYoutube,
  FiCode,
  FiHeart,
  FiArrowUp,
  FiMapPin,
  FiSend
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Muhammadshazil7",
      color: "hover:text-white",
      bgColor: "hover:bg-white/10",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://pk.linkedin.com/in/mohammad-shazil-153654324",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Behance",
      icon: FaBehance,
      url: "https://www.behance.net/shazil",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:shazilm239@gmail.com",
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/10",
    },
    // {
    //   name: "Twitter",
    //   icon: FiTwitter,
    //   url: "https://twitter.com/yourusername",
    //   color: "hover:text-sky-400",
    //   bgColor: "hover:bg-sky-500/10",
    // },
    // {
    //   name: "Instagram",
    //   icon: FiInstagram,
    //   url: "https://instagram.com/yourusername",
    //   color: "hover:text-pink-400",
    //   bgColor: "hover:bg-pink-500/10",
    // },
    // {
    //   name: "YouTube",
    //   icon: FiYoutube,
    //   url: "https://youtube.com/@yourchannel",
    //   color: "hover:text-red-400",
    //   bgColor: "hover:bg-red-500/10",
    // },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-32 bg-gradient-to-b from-transparent to-black/20 relative overflow-hidden">
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12"
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-black hover:text-purple-400 transition-colors duration-300">
                SHAZIL<span className="text-purple-500">.</span>
              </h2>
            </Link>
            <p className="text-slate-400 mt-3 text-sm">
              Full Stack Developer
            </p>
            <p className="text-slate-500 mt-4 text-sm flex items-center gap-2">
              <FiMapPin className="text-purple-400" />
              Karachi, Pakistan
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <FiSend className="text-purple-400" />
              shazilm239@gmail.com
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    p-3 rounded-xl bg-white/5 border border-white/10 
                    transition-all duration-300 group
                    ${social.bgColor}
                  `}
                  aria-label={social.name}
                >
                  <social.icon 
                    className={`text-lg text-slate-400 transition-colors duration-300 ${social.color}`} 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Let's Work Together
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Have a project in mind? Let's build something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full px-4 py-3 rounded-xl bg-gradient-to-r 
                  from-purple-600 to-blue-600 text-white font-medium 
                  transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25
                  flex items-center justify-center gap-2
                "
              >
                <FiSend className="text-sm" />
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>© {currentYear} SHAZIL. All Rights Reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <FiHeart className="text-red-400 text-xs animate-pulse" /> in Pakistan
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              v1.0 <FiCode className="text-purple-400" />
            </span>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-6 left-6 z-40
            p-4 rounded-full
            bg-gradient-to-r from-purple-600 to-blue-600
            text-white shadow-lg shadow-purple-500/25
            hover:scale-110 transition-all duration-300
            ${showScrollTop ? "pointer-events-auto" : "pointer-events-none"}
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>

      </div>
    </footer>
  );
}