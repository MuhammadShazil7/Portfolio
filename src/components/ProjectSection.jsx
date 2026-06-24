import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useRef } from "react";

export default function ProjectSection({
  number,
  title,
  subtitle,
  image,
  tech,
  github,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px 0px -100px 0px"
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // === IMAGE EFFECTS ===
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.1, 1.3, 1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.2, 1, 1, 0.2]);
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, -40, 20, 0]);
  
  // === CONTENT EFFECTS ===
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const contentX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]);
  
  // === NUMBER EFFECTS ===
  const numberScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  
  // === OVERLAY EFFECTS ===
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.8, 0.7, 0.7, 0.8]);

  return (
    <section 
      ref={ref} 
      className="relative h-screen overflow-hidden"
    >

      {/* === BACKGROUND IMAGE === */}
      <motion.img
        src={image}
        alt={title}
        style={{
          scale: imageScale,
          y: imageY,
          opacity: imageOpacity,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          will-change-transform
        "
      />

      {/* === DARK OVERLAY === */}
      <motion.div
        style={{
          opacity: overlayOpacity,
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/70
          to-black/30
          will-change-transform
        "
      />

      {/* === COLOR OVERLAY === */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.2, 0.2, 0.1]),
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-600/20
          via-transparent
          to-blue-600/20
          pointer-events-none
        "
      />

      {/* === CONTENT === */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <motion.div
          style={{
            opacity: contentOpacity,
            x: contentX,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
          className="max-w-3xl"
        >

          {/* === NUMBER === */}
          <motion.span
            style={{
              scale: numberScale,
              opacity: numberOpacity,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
            className="
              text-8xl
              md:text-[10rem]
              font-black
              text-white/10
              block
              will-change-transform
              select-none
              relative
            "
          >
            {number}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400/30 to-blue-400/30">
              {number}
            </span>
          </motion.span>

          {/* === TITLE === */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="
              text-5xl
              md:text-7xl
              font-black
              mt-2
              bg-gradient-to-r
              from-white
              via-purple-200
              to-purple-400
              bg-clip-text
              text-transparent
              leading-tight
            "
          >
            {title}
          </motion.h2>

          {/* === SUBTITLE === */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              text-xl
              md:text-2xl
              text-purple-400
              mt-4
              font-light
              tracking-wide
            "
          >
            {subtitle}
          </motion.p>

          {/* === DECORATIVE LINE === */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : { width: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"
          />

          {/* === TECH TAGS === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {tech && tech.length > 0 ? (
              tech.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    borderColor: "rgba(168, 85, 247, 0.6)",
                    y: -5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    cursor-default
                    text-sm
                    font-medium
                    text-slate-300
                    hover:text-white
                  "
                >
                  {item}
                </motion.span>
              ))
            ) : (
              <span className="text-slate-400 text-sm">No technologies listed</span>
            )}
          </motion.div>

          {/* === GITHUB BUTTON === */}
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex
              items-center
              gap-3
              mt-10
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              transition-all
              duration-300
              relative
              overflow-hidden
              group
              font-medium
              shadow-lg
              shadow-purple-500/20
            "
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <FiGithub className="relative z-10 text-lg" />
            <span className="relative z-10">View Code</span>
            <motion.span
              className="relative z-10"
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </motion.a>

        </motion.div>
      </div>

      {/* === SCROLL INDICATOR === */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-slate-500 uppercase tracking-[3px] font-light">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5 bg-white/5 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-purple-400 to-blue-400"
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* === PROGRESS BAR === */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-0.5 h-32 bg-white/5 rounded-full overflow-hidden hidden lg:block z-20"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
            originY: 0,
          }}
        />
      </motion.div>

    </section>
  );
}