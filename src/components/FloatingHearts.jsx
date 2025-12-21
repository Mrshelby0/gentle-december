import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 25 }, (_, i) => i);

  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(i) * 100],
            opacity: [1, 0],
            scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeIn",
          }}
          style={{
            position: "fixed",
            left: Math.random() * window.innerWidth,
            top: -50,
            fontSize: `${Math.random() * 30 + 15}px`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          💕
        </motion.div>
      ))}
    </>
  );
}
