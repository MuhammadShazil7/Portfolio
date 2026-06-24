// pages/TermsOfService.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiCheckCircle, FiAlertCircle, FiUser, FiCode, FiShield } from "react-icons/fi";

export default function TermsOfService() {
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
              <FiFileText className="text-3xl" />
            </div>
            <div>
              <p className="text-purple-400 uppercase tracking-[4px] text-sm">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Terms of Service
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
          {/* Acceptance */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiCheckCircle className="text-purple-400" />
              Acceptance of Terms
            </h2>
            <p className="text-slate-400 leading-relaxed">
              By using this website, you agree to these Terms of Service. If you do not agree, please do not use this website. 
              I reserve the right to update these terms at any time.
            </p>
          </section>

          {/* Services */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiUser className="text-purple-400" />
              Services Provided
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              This portfolio website showcases my work and skills as a Full Stack Developer. The services I offer include:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Responsive Web Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>API Development & Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Database Design & Management</span>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiCode className="text-purple-400" />
              Intellectual Property
            </h2>
            <p className="text-slate-400 leading-relaxed">
              All content on this website, including text, graphics, logos, and code, is the property of SHAZIL. 
              You may not reproduce, distribute, or create derivative works without explicit permission. However, 
              you are welcome to view and learn from the code examples provided.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiAlertCircle className="text-purple-400" />
              Limitation of Liability
            </h2>
            <p className="text-slate-400 leading-relaxed">
              This website is provided "as is" without any warranties. I am not liable for any damages arising from 
              your use of this website or the inability to use it. All projects and code samples are for demonstration 
              purposes and may not be production-ready without proper customization.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiShield className="text-purple-400" />
              User Responsibilities
            </h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Provide accurate information when contacting me</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Use the website for lawful purposes only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Do not attempt to breach security or disrupt the website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-sm mt-1">▸</span>
                <span>Respect intellectual property rights</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-slate-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact me:
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