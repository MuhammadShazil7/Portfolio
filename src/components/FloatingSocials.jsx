import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function FloatingSocials() {
  const socials = [
    { icon: FiGithub, href: "https://github.com/Muhammadshazil7", label: "GitHub", color: "#333" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/mohammad-shazil-153654324", label: "LinkedIn", color: "#0077b5" },
    { icon: FiMail, href: "mailto:shazilm239@gmail.com", label: "Email", color: "#ea4335" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-6 bottom-1/2 transform translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: index * 0.1 }}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-600/20 transition-all duration-300 group"
        >
          <social.icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
        </motion.a>
      ))}
      
      {/* Vertical Line */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent mx-auto mt-2" />
    </motion.div>
  );
}