import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiMail, FiUser, FiBriefcase, FiCode, FiSend, FiExternalLink, FiFileText } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { path: "/", label: "Home", icon: FiUser },
    { path: "/about", label: "About", icon: FiUser },
    { path: "/projects", label: "Projects", icon: FiCode },
    { path: "/cv", label: "CV", icon: FiFileText },
    { path: "/blog", label: "Blog", icon: FiFileText },
    { path: "/contact", label: "Contact", icon: FiMail },
  ];

  const handleHireClick = () => {
    setShowHireModal(true);
    setMenuOpen(false);
  };

  // Modal contact options with proper links
  const contactOptions = [
    {
      icon: FiMail,
      label: "Email Me",
      description: "shazilm239@gmail.com",
      href: "mailto:shazilm239@gmail.com",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      hoverBg: "hover:bg-purple-500/20",
      hoverBorder: "hover:border-purple-500/50",
      textColor: "text-purple-400",
      hoverTextColor: "group-hover:text-purple-400",
    },
    {
      icon: FiUser,
      label: "LinkedIn",
      description: "Connect with me",
      href: "https://pk.linkedin.com/in/mohammad-shazil-153654324",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      textColor: "text-blue-400",
      hoverTextColor: "group-hover:text-blue-400",
      external: true,
    },
    {
      icon: FiCode,
      label: "GitHub",
      description: "Check my work",
      href: "https://github.com/Muhammadshazil7",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-500/10",
      hoverBg: "hover:bg-gray-500/20",
      hoverBorder: "hover:border-gray-500/50",
      textColor: "text-gray-400",
      hoverTextColor: "group-hover:text-gray-400",
      external: true,
    },
    {
      icon: FaBehance,
      label: "Behance",
      description: "View my portfolio",
      href: "https://www.behance.net/shazil",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      textColor: "text-blue-400",
      hoverTextColor: "group-hover:text-blue-400",
      external: true,
    },
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">

            {/* Logo with hover animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="text-2xl font-black"
              >
                SHAZIL
                <span className="text-purple-500">
                  .
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative
                      text-slate-300 
                      hover:text-white 
                      transition
                      ${isActive ? "text-white" : ""}
                    `}
                  >
                    {link.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="
                          absolute
                          -bottom-1
                          left-0
                          w-full
                          h-0.5
                          bg-gradient-to-r
                          from-purple-600
                          to-blue-600
                          rounded-full
                        "
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Enhanced Hire Me Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={handleHireClick}
                className="
                  relative
                  group
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  hover:shadow-lg
                  hover:shadow-purple-500/25
                  transition-all
                  duration-300
                  overflow-hidden
                "
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <FiSend className="text-sm" />
                  <span>Hire Me</span>
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
                  />
                </span>
              </motion.button>
            </motion.div>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl relative z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu with smooth animation */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm
                z-40
                md:hidden
              "
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[80%]
                max-w-sm
                bg-gradient-to-br
                from-[#050816]
                to-[#0a0a1a]
                backdrop-blur-2xl
                z-40
                md:hidden
                shadow-2xl
                shadow-purple-500/10
                border-l
                border-white/5
              "
            >
              <div className="flex flex-col mt-28 px-8 gap-6">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          text-2xl
                          font-medium
                          block
                          py-3
                          px-4
                          rounded-xl
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-white bg-white/5"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Hire Me Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-4"
                >
                  <motion.button
                    onClick={handleHireClick}
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      to-blue-600
                      text-white
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:shadow-lg
                      hover:shadow-purple-500/25
                      transition-all
                      duration-300
                    "
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend />
                    Hire Me
                  </motion.button>
                </motion.div>

                {/* Social/extra info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="
                    mt-auto
                    px-4
                    py-6
                    text-center
                    text-slate-500
                    text-sm
                    border-t
                    border-white/5
                  "
                >
                  © 2026 SHAZIL. All rights reserved.
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {showHireModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHireModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-lg bg-gradient-to-br from-[#050816] to-[#0a0a1a] rounded-3xl border border-white/10 p-8 shadow-2xl shadow-purple-500/20 max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={() => setShowHireModal(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition p-2 hover:bg-white/5 rounded-xl"
                >
                  <FiX className="text-2xl" />
                </button>

                {/* Modal content */}
                <div className="mt-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6"
                  >
                    <FiSend className="text-3xl text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-center mb-2">
                    Let's Work Together
                  </h3>
                  <p className="text-slate-400 text-center mb-8">
                    I'm available for freelance projects, full-time positions, or collaborations.
                    How can I help you?
                  </p>

                  <div className="space-y-4">
                    {contactOptions.map((option, index) => (
                      <motion.a
                        key={option.label}
                        href={option.href}
                        target={option.external ? "_blank" : undefined}
                        rel={option.external ? "noopener noreferrer" : undefined}
                        onClick={() => {
                          if (!option.external) {
                            setShowHireModal(false);
                          }
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          flex
                          items-center
                          gap-4
                          p-4
                          rounded-xl
                          border
                          border-white/10
                          ${option.hoverBorder}
                          transition-all
                          duration-300
                          group
                          ${option.hoverBg}
                          cursor-pointer
                        `}
                      >
                        <div className={`
                          p-3
                          rounded-xl
                          ${option.bgColor}
                          ${option.textColor}
                          ${option.hoverBg}
                          transition-all
                          duration-300
                          group-hover:scale-110
                        `}>
                          <option.icon className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-white group-hover:text-purple-300 transition">
                            {option.label}
                          </p>
                          <p className="text-sm text-slate-400">
                            {option.description}
                          </p>
                        </div>
                        {option.external ? (
                          <FiExternalLink className="text-slate-500 group-hover:text-purple-400 transition" />
                        ) : (
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <FiSend className="text-slate-500 group-hover:text-purple-400 transition" />
                          </motion.div>
                        )}
                      </motion.a>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setShowHireModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full
                      mt-6
                      px-6
                      py-3
                      rounded-xl
                      border
                      border-white/10
                      hover:bg-white/5
                      transition-all
                      duration-300
                      text-slate-400
                      hover:text-white
                    "
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}