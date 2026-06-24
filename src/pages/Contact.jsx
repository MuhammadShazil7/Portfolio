// pages/Contact.jsx
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const formY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // Form state - matches Web3Forms field names
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({});

  // 🔑 REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
  const WEB3FORMS_ACCESS_KEY = "5098f349-bfb0-426a-86ea-73b8e56ba13d";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.email.includes('.')) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
    setSubmitStatus(null);
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name}`,
          // Optional: Add these for better tracking
          from_name: formData.name,
          from_email: formData.email,
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Email sent successfully:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "shazilm239@gmail.com",
      href: "mailto:shazilm239@gmail.com",
      color: "from-purple-400 to-pink-400",
      description: "Drop me an email"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "/Muhammadshazil7",
      href: "https://github.com/Muhammadshazil7",
      color: "from-gray-400 to-gray-600",
      description: "Check my code"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "/in/mohammad-shazil",
      href: "https://pk.linkedin.com/in/mohammad-shazil-153654324",
      color: "from-blue-400 to-cyan-400",
      description: "Connect professionally"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
      color: "from-red-400 to-orange-400",
      description: "Available worldwide"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+92 123 4567890",
      href: "tel:+921234567890",
      color: "from-green-400 to-emerald-400",
      description: "Call or WhatsApp"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
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

      <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-6 z-50 p-5 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 text-green-400 backdrop-blur-xl shadow-lg shadow-green-500/10 max-w-md"
          >
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-2xl" />
              <div>
                <p className="font-semibold">Message Sent! 🎉</p>
                <p className="text-sm text-green-400/80">I'll get back to you within 24 hours.</p>
              </div>
            </div>
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-6 z-50 p-5 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 text-red-400 backdrop-blur-xl shadow-lg shadow-red-500/10 max-w-md"
          >
            <div className="flex items-center gap-3">
              <FiAlertCircle className="text-2xl" />
              <div>
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm text-red-400/80">Please try again or email me directly.</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
          className="grid lg:grid-cols-2 gap-20"
        >

          {/* Left Side - Contact Info */}
          <div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-purple-400 uppercase tracking-[4px] text-sm font-medium"
            >
              Get in Touch
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-6xl md:text-7xl font-black mt-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight"
            >
              Let's Work
              <br />
              Together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-400 mt-6 text-lg leading-relaxed max-w-lg"
            >
              Have a project in mind or looking for a Full Stack Developer? 
              Let's build something amazing together. I'm just one message away!
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { label: "Projects", value: "15+" },
                { label: "Clients", value: "10+" },
                { label: "Response", value: "24hrs" },
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  target={item.href?.startsWith('http') ? "_blank" : undefined}
                  rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-purple-400/50 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-20 group-hover:scale-110 transition duration-300`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition">
                      {item.value}
                    </p>
                    <p className="text-slate-500 text-xs">{item.description}</p>
                  </div>
                  {item.href && (
                    <FiArrowRight className="text-slate-500 group-hover:text-purple-400 transition group-hover:translate-x-1" />
                  )}
                </a>
              ))}
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <motion.form
            ref={formRef}
            style={{
              opacity: formOpacity,
              y: formY,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
            }}
            onSubmit={handleSubmit}
            className="p-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-purple-400/30 transition-all duration-500 shadow-2xl shadow-purple-500/5"
          >

            <div className="space-y-6">

              {/* Header */}
              <div className="mb-2">
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className="text-slate-400 text-sm">I'll respond within 24 hours</p>
              </div>

              {/* Name Input */}
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={`w-full p-4 rounded-2xl bg-black/30 border transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/10 ${
                    errors.name && touched.name ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.name && touched.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <FiAlertCircle className="text-sm" /> {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  className={`w-full p-4 rounded-2xl bg-black/30 border transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/10 ${
                    errors.email && touched.email ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.email && touched.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <FiAlertCircle className="text-sm" /> {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  className={`w-full p-4 rounded-2xl bg-black/30 border transition-all duration-300 outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/10 resize-none ${
                    errors.message && touched.message ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.message && touched.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                  >
                    <FiAlertCircle className="text-sm" /> {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Character count */}
              <div className="text-right text-xs text-slate-500">
                {formData.message.length} characters
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-white ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-slate-500 text-sm mt-2"
              >
                ✨ I'll get back to you within 24 hours
              </motion.p>

              {/* Direct email fallback */}
              <div className="text-center text-xs text-slate-500 mt-4">
                Or email me directly at{' '}
                <a 
                  href="mailto:shazilm239@gmail.com" 
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  shazilm239@gmail.com
                </a>
              </div>

            </div>

          </motion.form>

        </motion.div>

      </section>
    </div>
  );
}