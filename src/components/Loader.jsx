import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-black to-pink-900 flex items-center justify-center overflow-hidden"
    >
      
      {/* Neon Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(transparent, transparent 40px, rgba(0, 255, 255, 0.1) 40px, rgba(0, 255, 255, 0.1) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0, 255, 255, 0.1) 40px, rgba(0, 255, 255, 0.1) 41px)
          `,
        }}
      />

      {/* Sun/Moon Circle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(255,0,255,0.5)",
            "0 0 40px rgba(255,0,255,0.8)",
            "0 0 20px rgba(255,0,255,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-50"
      />

      <div className="relative z-10 text-center">
        
        {/* Glowing Text */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "20px" }}
          animate={{ opacity: 1, letterSpacing: "0px" }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-black"
          style={{
            textShadow: "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7",
          }}
        >
          SHAZIL
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px #ec4899",
                "0 0 20px #ec4899",
                "0 0 40px #ec4899",
                "0 0 20px #ec4899",
                "0 0 10px #ec4899",
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="text-pink-500"
          >
            .
          </motion.span>
        </motion.h1>

        {/* Neon Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-cyan-400 tracking-[5px] text-sm"
          style={{ textShadow: "0 0 5px #06b6d4" }}
        >
          CRAFTING DIGITAL EXPERIENCES
        </motion.p>

        {/* Neon Progress Bar */}
        <div className="mt-12 w-80 mx-auto">
          <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
              style={{ boxShadow: "0 0 10px #a855f7" }}
            />
          </div>
        </div>

        {/* Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 font-mono text-cyan-400 text-sm"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            █
          </motion.span>{" "}
          LOADING 100%
        </motion.div>

        {/* Neon Border Pulse Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: "0 0 50px rgba(168,85,247,0.3)",
          }}
        />

      </div>
    </motion.div>
  );
}