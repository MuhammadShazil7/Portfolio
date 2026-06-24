// pages/PrivacyPolicy.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShield, FiLock, FiEye, FiServer, FiMail } from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400">
              <FiShield className="text-3xl" />
            </div>
            <div>
              <p className="text-purple-400 uppercase tracking-[4px] text-sm">
                Privacy Policy
              </p>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
          </div>
          <p className="text-slate-400 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-slate-400 leading-relaxed">
              Welcome to SHAZIL's portfolio website. I respect your privacy and am committed to protecting 
              your personal data. This privacy policy will inform you about how I look after your personal 
              data when you visit my website and tell you about your privacy rights.
            </p>
          </section>

          {/* Data Collection */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiServer className="text-purple-400" />
              Data Collection
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I collect the following information when you use the contact form:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Name:</strong> To address you personally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Email Address:</strong> To respond to your inquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Message:</strong> Your specific questions or requests</span>
              </li>
            </ul>
          </section>

          {/* Data Usage */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiEye className="text-purple-400" />
              How I Use Your Data
            </h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>To respond to your inquiries and messages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>To improve my services and website experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>To send occasional updates about my work (only if you opt-in)</span>
              </li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiLock className="text-purple-400" />
              Data Protection
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I take data security seriously. I implement appropriate technical and organizational measures 
              to protect your personal data against unauthorized access, alteration, disclosure, or destruction. 
              Your data is processed through secure channels and is not shared with third parties without your consent.
            </p>
          </section>

          {/* Your Rights */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Under data protection law, you have rights including:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Right to access:</strong> You can request a copy of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Right to rectification:</strong> You can correct inaccurate data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Right to erasure:</strong> You can request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span><strong className="text-white">Right to object:</strong> You can object to data processing</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiMail className="text-purple-400" />
              Contact Me
            </h2>
            <p className="text-slate-400 leading-relaxed">
              If you have any questions about this privacy policy or how I handle your data, please contact me:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white">Email: <a href="mailto:shazilm239@gmail.com" className="text-purple-400 hover:text-purple-300 transition">shazilm239@gmail.com</a></p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}