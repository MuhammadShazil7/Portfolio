import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProjects";
import CTA from "../components/CTA";
import PageTransition from "../components/PageTransition";
import ScrollToTop from "../components/ScrollToTop.jsx";
import FloatingSocials from "../components/FloatingSocials";
import AdminCounter from "../components/AdminCounter.jsx";

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Background Parallax Effect */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="fixed inset-0 -z-10 bg-[#050816]"
      >
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      <PageTransition type="slideUp" duration={0.6}>
        <main className="relative">
          
          {/* Progress Scroll Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Floating Social Media Icons */}
          <FloatingSocials />

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Hero Section with Enhanced Animation */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="home"
          >
            <Hero />
          </motion.section>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-[2px]">Scroll</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-[2px] h-10 bg-gradient-to-b from-purple-400 to-transparent"
                />
              </div>
            </motion.div>
          )}

          {/* About Section (Optional - Add if needed) */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="about"
            className="relative"
          >
            {/* You can add an About component here if you have one */}
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="skills"
          >
            <TechStack />
          </motion.section>

          {/* Featured Projects Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            id="projects"
          >
            <FeaturedProjects />
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            id="contact"
          >
            <CTA />
          </motion.section>

          {/* Footer Section */}
          {/* <footer className="relative border-t border-white/10 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 text-sm"
              >
                © {new Date().getFullYear()} SHAZIL. All rights reserved.
                <br />
                <span className="text-xs">
                  Built with React, Tailwind CSS, and Framer Motion
                </span>
              </motion.p>
            </div>
          </footer> */}
          <AdminCounter/>

        </main>
      </PageTransition>
    </>
  );
}