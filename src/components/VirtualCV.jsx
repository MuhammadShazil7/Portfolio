// components/VirtualCV.jsx
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiDownload, FiUser, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiBook, FiAward, FiGlobe } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function VirtualCV() {
  const cvRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        allowTaint: true,
        useCORS: true,
        logging: false,
      });
      
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

  return (
    <div className="min-h-screen bg-[#050816] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-6"
        >
          <motion.button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <FiDownload />
            {isDownloading ? 'Generating...' : 'Download PDF'}
          </motion.button>
        </motion.div>

        {/* CV Content - This gets converted to PDF */}
        <motion.div
          ref={cvRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-12 shadow-2xl"
          style={{ 
            fontFamily: "'Inter', -apple-system, sans-serif",
            color: '#1a1a2e',
          }}
        >
          
          {/* Header */}
          <div className="flex items-start justify-between border-b-2 border-purple-500/20 pb-6">
            <div>
              <h1 className="text-5xl font-bold text-[#1a1a2e]">MUHAMMAD SHAZIL</h1>
              <p className="text-xl text-purple-600 font-semibold mt-1">Full Stack Developer</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">📧 shazilm239@gmail.com</p>
              <p className="text-sm text-gray-600">📞 +92 123 4567890</p>
              <p className="text-sm text-gray-600">📍 Karachi, Pakistan</p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            
            {/* Left Column */}
            <div className="md:col-span-1">
              
              {/* Profile */}
              <div className="mb-6">
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Profile</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Passionate Full Stack Developer with 2+ years of experience building modern, scalable web applications. 
                  Expertise in React, Node.js, ASP.NET, and MongoDB.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Skills</h2>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500">Frontend</p>
                    <p className="text-sm text-gray-800 font-medium">React, Next.js, Angular, Tailwind CSS</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Backend</p>
                    <p className="text-sm text-gray-800 font-medium">Node.js, ASP.NET Core, PHP, Laravel</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Database</p>
                    <p className="text-sm text-gray-800 font-medium">MongoDB, MySQL, PostgreSQL, SQL Server</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">DevOps</p>
                    <p className="text-sm text-gray-800 font-medium">Docker, Git, Vercel, Netlify</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Languages</h2>
                <div className="space-y-1">
                  <p className="text-sm text-gray-800">🇬🇧 English <span className="text-gray-500 text-xs">- Professional</span></p>
                  <p className="text-sm text-gray-800">🇵🇰 Urdu <span className="text-gray-500 text-xs">- Native</span></p>
                  <p className="text-sm text-gray-800">🇵🇰 Sindhi <span className="text-gray-500 text-xs">- Conversational</span></p>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="md:col-span-2">
              
              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Experience</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                      <p className="text-sm text-purple-600">Freelance</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2023 - Present</span>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
                    <li>Built full-stack applications with React, Node.js, and MongoDB</li>
                    <li>Developed RESTful APIs and integrated third-party services</li>
                    <li>Implemented responsive UI designs with Tailwind CSS</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">Web Developer Intern</h3>
                      <p className="text-sm text-purple-600">Tech Solutions Pakistan</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2022 - 2023</span>
                  </div>
                  <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
                    <li>Developed enterprise applications with ASP.NET Core</li>
                    <li>Worked with SQL Server and Entity Framework</li>
                    <li>Participated in agile sprints and code reviews</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Education</h2>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">BS Computer Science</h3>
                    <p className="text-sm text-purple-600">Aptech Pakistan</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2024 - Present</span>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">Certifications</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs font-semibold text-gray-800">React Developer</p>
                    <p className="text-xs text-gray-500">Meta (Coursera)</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs font-semibold text-gray-800">JavaScript Advanced</p>
                    <p className="text-xs text-gray-500">FreeCodeCamp</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs font-semibold text-gray-800">MongoDB Developer</p>
                    <p className="text-xs text-gray-500">MongoDB University</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs font-semibold text-gray-800">ASP.NET Core</p>
                    <p className="text-xs text-gray-500">Microsoft Learn</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-purple-500/20 mt-6 pt-4 text-center">
            <p className="text-xs text-gray-500">© 2026 Muhammad Shazil — Full Stack Developer</p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}