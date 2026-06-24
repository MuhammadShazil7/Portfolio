import { motion } from "framer-motion";

export default function PageOverlay({ onComplete, direction = "vertical" }) {
  // Different overlay directions
  const getAnimation = () => {
    switch (direction) {
      case "vertical":
        return {
          initial: { scaleY: 1 },
          animate: { scaleY: 0 },
          exit: { scaleY: 1 },
          className: "origin-top"
        };
      case "horizontal":
        return {
          initial: { scaleX: 1 },
          animate: { scaleX: 0 },
          exit: { scaleX: 1 },
          className: "origin-left"
        };
      case "diagonal":
        return {
          initial: { scaleX: 1, scaleY: 1 },
          animate: { scaleX: 0, scaleY: 0 },
          exit: { scaleX: 1, scaleY: 1 },
          className: "origin-top-left"
        };
      default:
        return {
          initial: { scaleY: 1 },
          animate: { scaleY: 0 },
          exit: { scaleY: 1 },
          className: "origin-top"
        };
    }
  };

  const animation = getAnimation();

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={`fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 z-[9999] ${animation.className}`}
      onAnimationComplete={onComplete}
    />
  );
}