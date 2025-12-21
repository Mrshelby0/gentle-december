import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedText = ({ text, style, delay = 0 }) => {
  return (
    <div style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.23, 1, 0.320, 1],
        }}
        style={style}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 107, 157, 0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          top: "-100px",
          right: "-100px",
        }}
      />

      <motion.div
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(240, 114, 128, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          bottom: "-80px",
          left: "-80px",
        }}
      />

      {/* Mouse tracking light effect */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
        }}
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255, 200, 124, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          textAlign: "center",
          color: "white",
          zIndex: 10,
          position: "relative",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "5rem",
            marginBottom: "2rem",
          }}
        >
          💎
        </motion.div>

        <div style={{ marginBottom: "2rem" }}>
          <AnimatedText
            text="FOR"
            delay={0.2}
            style={{
              fontFamily: "Playfair Display",
              fontSize: "1.5rem",
              letterSpacing: "4px",
              opacity: 0.7,
            }}
          />
          <div style={{ height: "20px" }} />
          <AnimatedText
            text="MY DEVI JI"
            delay={0.4}
            style={{
              fontFamily: "Playfair Display",
              fontSize: "5rem",
              fontWeight: "700",
              background: "linear-gradient(45deg, #ff6b9d, #ffa07a, #ff6b9d)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            fontSize: "1.5rem",
            opacity: 0.8,
            fontStyle: "italic",
            marginBottom: "3rem",
            letterSpacing: "2px",
          }}
        >
          A moment beyond words, beyond time
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255, 107, 157, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "1rem 3rem",
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontFamily: "Playfair Display",
            fontWeight: "600",
            letterSpacing: "1px",
            boxShadow: "0 10px 40px rgba(255, 107, 157, 0.4)",
          }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          ENTER ✨
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          opacity: 0.6,
          fontSize: "2rem",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}
