import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import GlowBackground from "./components/GlowBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import SmoothScroll from "./components/SmoothScroll";
// import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import PageOverlay from "./components/PageOverlay";
import Spotlight from "./components/Spotlight";
import WhatsAppButton from "./components/WhatsAppButton";
import CVSection from "./components/CVSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Blog from "./pages/Blog";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* Global Components */}
      <Spotlight />
      <GlowBackground />
      {/* <CustomCursor /> */}
      <SmoothScroll />
      
      {/* Main App Content */}
      <div className="relative min-h-screen bg-[#050816]">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CVSection />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />

          </Routes>
        </AnimatePresence>
        
        <Footer />
        <WhatsAppButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;